// constants for default settings if keyword arguments are not defined
const UNIQUE_DEFAULT_SETTING = true;
const MUTATION_DEFAULT_SETTING = true;

/**
 * A class that allows a user to create a number of elements to manipulate cards.
 */
class CardOrganizer {
    /**
     * Create a CardOrganizer object.
     * @param {Object[]} data 
     * @param {Element} cardContainerEl
     * @param {Element} outputEl 
     * @param {Object} config
     */
    constructor(data, cardContainerEl, outputEl, config)
    {
        // ensure that all positional arguments are defined before proceeding
        if (!data || !cardContainerEl || !outputEl)
        {
            return;
        }

        this.data = data;
        this.cardContainerEl = cardContainerEl;
        this.outputEl = outputEl;

        // populate the configuration settings
        this.keysAreUnique = config?.unique ?? UNIQUE_DEFAULT_SETTING;
        this.allowMutatation = config?.mutation ?? MUTATION_DEFAULT_SETTING;
        this.hiddenData = config?.hiddenData;

        // an array to keep track of the key order of the cards
        this.keys = [];

        // populate keys array and check for key uniqueness
        data
            .forEach(item => {
                // ensure key uniqueness by throwing error and stop checking if the key is already array
                if (this.keysAreUnique && this.keys.includes(item.key))
                {
                    throw new Error("Data keys must be unique.");
                }

                this.keys.push(item.key);
            });

        // set the output element value to inital key order
        outputEl.value = this.keys.join(",");

        // enable drop detection of cards
        outputEl.ondragover = e => e.preventDefault();
        outputEl.ondrop = e => e.preventDefault();

        this.addableCards = [];

        if (this.hiddenData)
        {
            this.addableCards = this.addableCards.concat(this.hiddenData);
        }

        if (this.allowMutatation)
        {
            if (!this.keysAreUnique)
            {
               this.addableCards = this.addableCards.concat(this.data);
            }
        }

        // create the card elements
        this.createCards(this.data);
    }

    /**
     * Create a card HTML element from a data item with all the necessary buttons and onclick
     * functions and return it.
     * @param {Object} item 
     * @returns {Element} cardEl
     */
    createCard(item) 
    {
        // create a card HTML element object so that we can easily manage drag-n-drop functionality
        const card = document.createElement("div");
        card.className = "card mb-1";
        card.draggable = true;
        card.setAttribute("data-key", item.key);

        // set the card contents to Bootstrap card markup with its data
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">
                    ${item.title}
                </h5>
                                
                <p class="card-text">
                    ${item.description}
                </p>
            </div>

            <div class="card-footer"></div>
        `;

        // add all the buttons to the card footer
        const footer = card.querySelector(".card-footer");

        // define move up elevator button appearance
        const moveUpBtn = document.createElement("button");
        moveUpBtn.className = "btn btn-light";
        moveUpBtn.innerHTML = `
            <i class="fa fa-arrow-up"></i>
           Move Up
        `;

        // define move up elevator button functionality
        moveUpBtn.onclick = () => {
            const previousSibling = card.previousElementSibling;

            if (previousSibling != null) 
            {
                cardContainerEl.insertBefore(card, previousSibling);
            }

            this.updateOutputValue();
        }

        // define move down elevator button appearance
        const moveDownBtn = document.createElement("button");
        moveDownBtn.className = "btn btn-light";
        moveDownBtn.innerHTML = `
            <i class="fa fa-arrow-down"></i>
            Move Down
        `;

        // define move down elevator button functionality
        moveDownBtn.onclick = () => {
            const nextSibling = card.nextElementSibling?.nextElementSibling;

            // if is at bottom, do not swap with the Add Another Card element
            if (nextSibling == null) 
            {
                return;
            }
            else 
            {
                this.cardContainerEl.insertBefore(card, nextSibling);
            }

            this.updateOutputValue();
        }

        // add the elevator buttons to the footer
        footer.appendChild(moveUpBtn);
        footer.appendChild(moveDownBtn);

        // duplication is only allowed if keys are not unique
        if (!this.keysAreUnique) 
        {
            // define duplicate button appearance
            const duplicateBtn = document.createElement("button");
            duplicateBtn.className = "btn btn-light";
            duplicateBtn.innerHTML = `
                <i class="fa fa-copy"></i>
                Duplicate
            `;

            // define duplicate button functionality
            duplicateBtn.onclick = () => {
                const nextSibling = card.nextElementSibling;

                // if the node is not the end node
                if (nextSibling != null) {
                    // cloneNode(true) means copy node's children too
                    this.cardContainerEl.insertBefore(card.cloneNode(true), nextSibling);
                }
                // if the node is the last node, add to end
                else {
                    this.cardContainerEl.appendChild(card.cloneNode(true));
                }

                this.updateOutputValue();
            }

            footer.appendChild(duplicateBtn);
        }

        // deletion is only allowed if mutation is allowed
        if (this.allowMutatation) 
        {
            // define delete button appearance
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "btn btn-danger";
            deleteBtn.innerHTML = `
                <i class="fa fa-trash-alt"></i>
                Delete
            `;

            // define delete button functionality
            deleteBtn.onclick = () => {
                // if keys are unique, when deleting, add to addableCards as a "recyling bin"
                if (this.keysAreUnique) 
                {
                    // get the key of the card so that we can search for the data by key
                    const key = parseInt(card.getAttribute("data-key"), 10);

                    // look for item in data, if not found, try in hiddenData
                    let item = this.data.find(x => x.key == key);
                    if (item == null)
                    {
                        item = this.hiddenData.find(x => x.key == key);
                    }

                    // add the data item to addableCards and update the select menu options
                    this.addableCards.push(item);
                    this.updateAddableCardsSelect();
                }

                // remove card from container and update output element value
                this.cardContainerEl.removeChild(card);
                this.updateOutputValue();
            }

            // add delete button to card footer
            footer.appendChild(deleteBtn);
        }

        // add a class to items being currently dragged so they can be identified with querySelector
        card.ondragstart = () => card.classList.add("dragging");
        card.ondragend = () => card.classList.remove("dragging");

        // when the user stops dragging, swap the element
        cardContainerEl.ondragover = e => {
            e.preventDefault();

            const currentElement = document.querySelector(".dragging");
            const closestElement = getClosestElement(cardContainerEl, e.clientY);

            // if no closest element at drag end, insert at bottom of container
            if (closestElement == null) 
            {
                cardContainerEl.appendChild(currentElement);
            }
            // if there is a closest element, insert before that element
            else 
            {
                cardContainerEl.insertBefore(currentElement, closestElement);
            }

            // get updated key order and update the output element value
            this.updateOutputValue();
        }

        // add the card to the container element on the page
        return card;
    }

    /**
     * Create the card elements and make them draggable.
     * @param {Object[]} data 
     */
    createCards(data) 
    {
        // create the cards for every data item
        data.forEach(item => {
            this.cardContainerEl.appendChild(this.createCard(item));
        });

        // define Add Another card element appearance
        const addAnotherCardEl = document.createElement("div");
        addAnotherCardEl.className = "card";
        addAnotherCardEl.style.setProperty("border-top", "none", "important");
        addAnotherCardEl.innerHTML += `
            <div class="card-footer" style="border-radius: calc(.25rem - 1px)">
                <p class="mb-0">
                    <i class="fa fa-plus-square"></i>
                    Add Another
                </p>

                <div class="mt-2 adder">
                    <select class="form-control custom-select mb-2"></select>
                </div>
            </div>
        `;
        
        // get references to the newly created html in the add another card element
        const adderEl = addAnotherCardEl.querySelector(".adder");
        this.addableCardsSelect = addAnotherCardEl.querySelector("select");

        // hide adder element initially and show on click
        adderEl.style.display = "none";
        addAnotherCardEl.onclick = () => adderEl.style.display = "";

        // define add button appearance
        const addBtn = document.createElement("button");
        addBtn.className = "btn btn-success mr-1";
        addBtn.innerText = "Add";

        // define add button functionality
        addBtn.onclick = () => {
            // find the data item by key value
            const obj = this.addableCards.find(x => x.key == this.addableCardsSelect.value);

            // if keys are unique the newly added card can no longer be in the addable cards array
            if (this.keysAreUnique)
            {
                // remove the card from addable cards to prevent double add
                this.addableCards.splice(
                    this.addableCards.findIndex(x => x.key == this.addableCardsSelect.value),
                    1
                );
                
                this.updateAddableCardsSelect();
            }

            // insert new card before add another card element to ensure that it is always on the bottom
            this.cardContainerEl.insertBefore(this.createCard(obj), addAnotherCardEl);

            this.updateOutputValue();
        }

        // define cancel button appearance
        const cancelBtn = document.createElement("button");
        cancelBtn.className = "btn btn-danger";
        cancelBtn.innerText = "Cancel";

        // define cancel button functionality
        cancelBtn.onclick = e => {
            // otherwise the event will bubble up to adder onclick which shows adder element
            e.stopPropagation();

            adderEl.style.display = "none";
        }

        // append buttons to adder element
        adderEl.appendChild(addBtn);
        adderEl.appendChild(cancelBtn);

        this.updateAddableCardsSelect();

        // add the add another card element to the end of the card container
        this.cardContainerEl.appendChild(addAnotherCardEl);
    }

    /**
     * Update the select menu that allows users to add new cards to the column.
     */
    updateAddableCardsSelect()
    {
        // clear previous options
        this.addableCardsSelect.innerHTML = "";

        // create option elements for each addable item
        if (this.addableCards.length)
        {
            this.addableCards
                .forEach(
                    (item) => {
                        // create an option value for each data item and add it to the select
                        const option = document.createElement("option");
                        option.value = item.key;
                        option.innerText = item.title;

                        this.addableCardsSelect.add(option);
                    }
                );
        }
    }

    /**
     * Update the value of the hidden input with the order of the cards and their keys.
     */
    updateOutputValue()
    {
        // get all divs with data-key attribute to get updated key order 
        this.keys = Array.from(this.cardContainerEl.querySelectorAll("div[data-key]"))
            .map(x => {
                // convert keys into ints to prevent any possible weird type bugs later
                return parseInt(x.getAttribute("data-key"), 10);
            });

        // update the output element value
        this.outputEl.value = this.keys.join(",");
    }
}

/**
 * Modified from: https://github.com/WebDevSimplified/Drag-And-Drop/blob/master/script.js.
 * @param {Element} container 
 * @param {Number} y 
 * @returns {Element} closest
 */
function getClosestElement(container, y) 
{
    const closest = Array.from(container.querySelectorAll('.card:not(.dragging)'))
        .reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;

                if (offset < 0 && offset > closest.offset) 
                {
                    return { offset: offset, element: child };
                } 
                else 
                {
                    return closest;
                }
            }, 
            { offset: Number.NEGATIVE_INFINITY }
        );

    return closest.element;
}

/**
 * HTML5 Drag-N-Drop Polyfill
 * https://github.com/Bernardo-Castilho/dragdroptouch
 */
var DragDropTouch;
(function (DragDropTouch_1) {
    'use strict';
    /**
    * Object used to hold the data that is being dragged during drag and drop operations.
    *
    * It may hold one or more data items of different types. For more information about
    * drag and drop operations and data transfer objects, see
    * <a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer">HTML Drag and Drop API</a>.
    *
    * This object is created automatically by the @see:DragDropTouch singleton and is
    * accessible through the @see:dataTransfer property of all drag events.
    */
    var DataTransfer = (function () {
        function DataTransfer() {
            this._dropEffect = 'move';
            this._effectAllowed = 'all';
            this._data = {};
        }
        Object.defineProperty(DataTransfer.prototype, "dropEffect", {
            /**
            * Gets or sets the type of drag-and-drop operation currently selected.
            * The value must be 'none',  'copy',  'link', or 'move'.
            */
            get: function () {
                return this._dropEffect;
            },
            set: function (value) {
                this._dropEffect = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTransfer.prototype, "effectAllowed", {
            /**
            * Gets or sets the types of operations that are possible.
            * Must be one of 'none', 'copy', 'copyLink', 'copyMove', 'link',
            * 'linkMove', 'move', 'all' or 'uninitialized'.
            */
            get: function () {
                return this._effectAllowed;
            },
            set: function (value) {
                this._effectAllowed = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTransfer.prototype, "types", {
            /**
            * Gets an array of strings giving the formats that were set in the @see:dragstart event.
            */
            get: function () {
                return Object.keys(this._data);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * Removes the data associated with a given type.
        *
        * The type argument is optional. If the type is empty or not specified, the data
        * associated with all types is removed. If data for the specified type does not exist,
        * or the data transfer contains no data, this method will have no effect.
        *
        * @param type Type of data to remove.
        */
        DataTransfer.prototype.clearData = function (type) {
            if (type != null) {
                delete this._data[type];
            }
            else {
                this._data = null;
            }
        };
        /**
        * Retrieves the data for a given type, or an empty string if data for that type does
        * not exist or the data transfer contains no data.
        *
        * @param type Type of data to retrieve.
        */
        DataTransfer.prototype.getData = function (type) {
            return this._data[type] || '';
        };
        /**
        * Set the data for a given type.
        *
        * For a list of recommended drag types, please see
        * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types.
        *
        * @param type Type of data to add.
        * @param value Data to add.
        */
        DataTransfer.prototype.setData = function (type, value) {
            this._data[type] = value;
        };
        /**
        * Set the image to be used for dragging if a custom one is desired.
        *
        * @param img An image element to use as the drag feedback image.
        * @param offsetX The horizontal offset within the image.
        * @param offsetY The vertical offset within the image.
        */
        DataTransfer.prototype.setDragImage = function (img, offsetX, offsetY) {
            var ddt = DragDropTouch._instance;
            ddt._imgCustom = img;
            ddt._imgOffset = { x: offsetX, y: offsetY };
        };
        return DataTransfer;
    }());
    DragDropTouch_1.DataTransfer = DataTransfer;
    /**
    * Defines a class that adds support for touch-based HTML5 drag/drop operations.
    *
    * The @see:DragDropTouch class listens to touch events and raises the
    * appropriate HTML5 drag/drop events as if the events had been caused
    * by mouse actions.
    *
    * The purpose of this class is to enable using existing, standard HTML5
    * drag/drop code on mobile devices running IOS or Android.
    *
    * To use, include the DragDropTouch.js file on the page. The class will
    * automatically start monitoring touch events and will raise the HTML5
    * drag drop events (dragstart, dragenter, dragleave, drop, dragend) which
    * should be handled by the application.
    *
    * For details and examples on HTML drag and drop, see
    * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations.
    */
    var DragDropTouch = (function () {
        /**
        * Initializes the single instance of the @see:DragDropTouch class.
        */
        function DragDropTouch() {
            this._lastClick = 0;
            // enforce singleton pattern
            if (DragDropTouch._instance) {
                throw 'DragDropTouch instance already created.';
            }
            // detect passive event support
            // https://github.com/Modernizr/Modernizr/issues/1894
            var supportsPassive = false;
            document.addEventListener('test', function () { }, {
                get passive() {
                    supportsPassive = true;
                    return true;
                }
            });
            // listen to touch events
            if ('ontouchstart' in document) {
                var d = document, ts = this._touchstart.bind(this), tm = this._touchmove.bind(this), te = this._touchend.bind(this), opt = supportsPassive ? { passive: false, capture: false } : false;
                d.addEventListener('touchstart', ts, opt);
                d.addEventListener('touchmove', tm, opt);
                d.addEventListener('touchend', te);
                d.addEventListener('touchcancel', te);
            }
        }
        /**
        * Gets a reference to the @see:DragDropTouch singleton.
        */
        DragDropTouch.getInstance = function () {
            return DragDropTouch._instance;
        };
        // ** event handlers
        DragDropTouch.prototype._touchstart = function (e) {
            var _this = this;
            if (this._shouldHandle(e)) {
                // raise double-click and prevent zooming
                if (Date.now() - this._lastClick < DragDropTouch._DBLCLICK) {
                    if (this._dispatchEvent(e, 'dblclick', e.target)) {
                        e.preventDefault();
                        this._reset();
                        return;
                    }
                }
                // clear all variables
                this._reset();
                // get nearest draggable element
                var src = this._closestDraggable(e.target);
                if (src) {
                    // give caller a chance to handle the hover/move events
                    if (!this._dispatchEvent(e, 'mousemove', e.target) &&
                        !this._dispatchEvent(e, 'mousedown', e.target)) {
                        // get ready to start dragging
                        this._dragSource = src;
                        this._ptDown = this._getPoint(e);
                        this._lastTouch = e;
                        e.preventDefault();
                        // show context menu if the user hasn't started dragging after a while
                        setTimeout(function () {
                            if (_this._dragSource == src && _this._img == null) {
                                if (_this._dispatchEvent(e, 'contextmenu', src)) {
                                    _this._reset();
                                }
                            }
                        }, DragDropTouch._CTXMENU);
                        if (DragDropTouch._ISPRESSHOLDMODE) {
                            this._pressHoldInterval = setTimeout(function () {
                                _this._isDragEnabled = true;
                                _this._touchmove(e);
                            }, DragDropTouch._PRESSHOLDAWAIT);
                        }
                    }
                }
            }
        };
        DragDropTouch.prototype._touchmove = function (e) {
            if (this._shouldCancelPressHoldMove(e)) {
            this._reset();
            return;
            }
            if (this._shouldHandleMove(e) || this._shouldHandlePressHoldMove(e)) {
                // see if target wants to handle move
                var target = this._getTarget(e);
                if (this._dispatchEvent(e, 'mousemove', target)) {
                    this._lastTouch = e;
                    e.preventDefault();
                    return;
                }
                // start dragging
                if (this._dragSource && !this._img && this._shouldStartDragging(e)) {
                    this._dispatchEvent(e, 'dragstart', this._dragSource);
                    this._createImage(e);
                    this._dispatchEvent(e, 'dragenter', target);
                }
                // continue dragging
                if (this._img) {
                    this._lastTouch = e;
                    e.preventDefault(); // prevent scrolling
                    if (target != this._lastTarget) {
                        this._dispatchEvent(this._lastTouch, 'dragleave', this._lastTarget);
                        this._dispatchEvent(e, 'dragenter', target);
                        this._lastTarget = target;
                    }
                    this._moveImage(e);
                    this._isDropZone = this._dispatchEvent(e, 'dragover', target);
                }
            }
        };
        DragDropTouch.prototype._touchend = function (e) {
            if (this._shouldHandle(e)) {
                // see if target wants to handle up
                if (this._dispatchEvent(this._lastTouch, 'mouseup', e.target)) {
                    e.preventDefault();
                    return;
                }
                // user clicked the element but didn't drag, so clear the source and simulate a click
                if (!this._img) {
                    this._dragSource = null;
                    this._dispatchEvent(this._lastTouch, 'click', e.target);
                    this._lastClick = Date.now();
                }
                // finish dragging
                this._destroyImage();
                if (this._dragSource) {
                    if (e.type.indexOf('cancel') < 0 && this._isDropZone) {
                        this._dispatchEvent(this._lastTouch, 'drop', this._lastTarget);
                    }
                    this._dispatchEvent(this._lastTouch, 'dragend', this._dragSource);
                    this._reset();
                }
            }
        };
        // ** utilities
        // ignore events that have been handled or that involve more than one touch
        DragDropTouch.prototype._shouldHandle = function (e) {
            return e &&
                !e.defaultPrevented &&
                e.touches && e.touches.length < 2;
        };

        // use regular condition outside of press & hold mode
        DragDropTouch.prototype._shouldHandleMove = function (e) {
        return !DragDropTouch._ISPRESSHOLDMODE && this._shouldHandle(e);
        };

        // allow to handle moves that involve many touches for press & hold
        DragDropTouch.prototype._shouldHandlePressHoldMove = function (e) {
        return DragDropTouch._ISPRESSHOLDMODE &&
            this._isDragEnabled && e && e.touches && e.touches.length;
        };

        // reset data if user drags without pressing & holding
        DragDropTouch.prototype._shouldCancelPressHoldMove = function (e) {
        return DragDropTouch._ISPRESSHOLDMODE && !this._isDragEnabled &&
            this._getDelta(e) > DragDropTouch._PRESSHOLDMARGIN;
        };

        // start dragging when specified delta is detected
        DragDropTouch.prototype._shouldStartDragging = function (e) {
            var delta = this._getDelta(e);
            return delta > DragDropTouch._THRESHOLD ||
                (DragDropTouch._ISPRESSHOLDMODE && delta >= DragDropTouch._PRESSHOLDTHRESHOLD);
        }

        // clear all members
        DragDropTouch.prototype._reset = function () {
            this._destroyImage();
            this._dragSource = null;
            this._lastTouch = null;
            this._lastTarget = null;
            this._ptDown = null;
            this._isDragEnabled = false;
            this._isDropZone = false;
            this._dataTransfer = new DataTransfer();
            clearInterval(this._pressHoldInterval);
        };
        // get point for a touch event
        DragDropTouch.prototype._getPoint = function (e, page) {
            if (e && e.touches) {
                e = e.touches[0];
            }
            return { x: page ? e.pageX : e.clientX, y: page ? e.pageY : e.clientY };
        };
        // get distance between the current touch event and the first one
        DragDropTouch.prototype._getDelta = function (e) {
            if (DragDropTouch._ISPRESSHOLDMODE && !this._ptDown) { return 0; }
            var p = this._getPoint(e);
            return Math.abs(p.x - this._ptDown.x) + Math.abs(p.y - this._ptDown.y);
        };
        // get the element at a given touch event
        DragDropTouch.prototype._getTarget = function (e) {
            var pt = this._getPoint(e), el = document.elementFromPoint(pt.x, pt.y);
            while (el && getComputedStyle(el).pointerEvents == 'none') {
                el = el.parentElement;
            }
            return el;
        };
        // create drag image from source element
        DragDropTouch.prototype._createImage = function (e) {
            // just in case...
            if (this._img) {
                this._destroyImage();
            }
            // create drag image from custom element or drag source
            var src = this._imgCustom || this._dragSource;
            this._img = src.cloneNode(true);
            this._copyStyle(src, this._img);
            this._img.style.top = this._img.style.left = '-9999px';
            // if creating from drag source, apply offset and opacity
            if (!this._imgCustom) {
                var rc = src.getBoundingClientRect(), pt = this._getPoint(e);
                this._imgOffset = { x: pt.x - rc.left, y: pt.y - rc.top };
                this._img.style.opacity = DragDropTouch._OPACITY.toString();
            }
            // add image to document
            this._moveImage(e);
            document.body.appendChild(this._img);
        };
        // dispose of drag image element
        DragDropTouch.prototype._destroyImage = function () {
            if (this._img && this._img.parentElement) {
                this._img.parentElement.removeChild(this._img);
            }
            this._img = null;
            this._imgCustom = null;
        };
        // move the drag image element
        DragDropTouch.prototype._moveImage = function (e) {
            var _this = this;
            requestAnimationFrame(function () {
                if (_this._img) {
                    var pt = _this._getPoint(e, true), s = _this._img.style;
                    s.position = 'absolute';
                    s.pointerEvents = 'none';
                    s.zIndex = '999999';
                    s.left = Math.round(pt.x - _this._imgOffset.x) + 'px';
                    s.top = Math.round(pt.y - _this._imgOffset.y) + 'px';
                }
            });
        };
        // copy properties from an object to another
        DragDropTouch.prototype._copyProps = function (dst, src, props) {
            for (var i = 0; i < props.length; i++) {
                var p = props[i];
                dst[p] = src[p];
            }
        };
        DragDropTouch.prototype._copyStyle = function (src, dst) {
            // remove potentially troublesome attributes
            DragDropTouch._rmvAtts.forEach(function (att) {
                dst.removeAttribute(att);
            });
            // copy canvas content
            if (src instanceof HTMLCanvasElement) {
                var cSrc = src, cDst = dst;
                cDst.width = cSrc.width;
                cDst.height = cSrc.height;
                cDst.getContext('2d').drawImage(cSrc, 0, 0);
            }
            // copy style (without transitions)
            var cs = getComputedStyle(src);
            for (var i = 0; i < cs.length; i++) {
                var key = cs[i];
                if (key.indexOf('transition') < 0) {
                    dst.style[key] = cs[key];
                }
            }
            dst.style.pointerEvents = 'none';
            // and repeat for all children
            for (var i = 0; i < src.children.length; i++) {
                this._copyStyle(src.children[i], dst.children[i]);
            }
        };
        DragDropTouch.prototype._dispatchEvent = function (e, type, target) {
            if (e && target) {
                var evt = document.createEvent('Event'), t = e.touches ? e.touches[0] : e;
                evt.initEvent(type, true, true);
                evt.button = 0;
                evt.which = evt.buttons = 1;
                this._copyProps(evt, e, DragDropTouch._kbdProps);
                this._copyProps(evt, t, DragDropTouch._ptProps);
                evt.dataTransfer = this._dataTransfer;
                target.dispatchEvent(evt);
                return evt.defaultPrevented;
            }
            return false;
        };
        // gets an element's closest draggable ancestor
        DragDropTouch.prototype._closestDraggable = function (e) {
            for (; e; e = e.parentElement) {
                if (e.hasAttribute('draggable') && e.draggable) {
                    return e;
                }
            }
            return null;
        };
        return DragDropTouch;
    }());
    /*private*/ DragDropTouch._instance = new DragDropTouch(); // singleton
    // constants
    DragDropTouch._THRESHOLD = 5; // pixels to move before drag starts
    DragDropTouch._OPACITY = 0.5; // drag image opacity
    DragDropTouch._DBLCLICK = 500; // max ms between clicks in a double click
    DragDropTouch._CTXMENU = 900; // ms to hold before raising 'contextmenu' event
    DragDropTouch._ISPRESSHOLDMODE = false; // decides of press & hold mode presence
    DragDropTouch._PRESSHOLDAWAIT = 400; // ms to wait before press & hold is detected
    DragDropTouch._PRESSHOLDMARGIN = 25; // pixels that finger might shiver while pressing
    DragDropTouch._PRESSHOLDTHRESHOLD = 0; // pixels to move before drag starts
    // copy styles/attributes from drag source to drag image element
    DragDropTouch._rmvAtts = 'id,class,style,draggable'.split(',');
    // synthesize and dispatch an event
    // returns true if the event has been handled (e.preventDefault == true)
    DragDropTouch._kbdProps = 'altKey,ctrlKey,metaKey,shiftKey'.split(',');
    DragDropTouch._ptProps = 'pageX,pageY,clientX,clientY,screenX,screenY,offsetX,offsetY'.split(',');
    DragDropTouch_1.DragDropTouch = DragDropTouch;
})(DragDropTouch || (DragDropTouch = {}));
