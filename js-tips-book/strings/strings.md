# Strings

JavaScript strings share many similarities with string implementations from other high-level languages. They represent text based messages and data.

In this course we will cover the basics. How to create new strings and perform common operations on them.

Here is an example of a string:

```
"Hello World"
```


# Creation

You can define strings in JavaScript by enclosing the text in single quotes or double quotes:

```js
// Single quotes can be used
var str = 'Our lovely string';

// Double quotes as well
var otherStr = "Another nice string";
```

In Javascript, Strings can contain UTF-8 characters:

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

**Note:** Strings can not be subtracted, multiplied or divided.

{% exercise %}
Create a variable named `str` set to the value `"abc"`.
{% solution %}
var str = 'abc';
{% validation %}
assert(str === 'abc');
{% endexercise %}


# Concatenation

Concatenation involves adding two or more strings together, creating a larger string containing the combined data of those original strings. This is done in JavaScript using the **+** operator.

```js
var bigStr = "Hi " + "JS strings are nice " + "and " + "easy to add";
```

{% exercise %}
Add up the different names so that the `fullName` variable contains John's complete name.
{% initial %}
var firstName = "John";
var lastName = "Smith";

var fullName =
{% solution %}
var firstName = "John";
var lastName = "Smith";

var fullName = firstName + " " + lastName;
{% validation %}
assert(fullName === 'John Smith');
{% endexercise %}


# Length

It's easy in Javascript to know how many characters are in string using the property `.length`.

```js
// Just use the property .length
var size = "Our lovely string".length;
```

**Note:** Strings can not be subtracted, multiplied or divided.

{% exercise %}
Store in the variable named `size` the length of `str`.
{% initial %}
var str = "Hello World";

var size =
{% solution %}
var str = "Hello World";

var size = str.length;
{% validation %}
assert(size === str.length);
{% endexercise %}
