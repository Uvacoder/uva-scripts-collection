const fs = require('fs');
const { execSync } = require('child_process');
// const shortid = require('shortid');
 
const directoryWithPhotos = './photos';
// const numPicsPerRow = 60;
// const resolutionInGrid = '640x480';
const newResolution = '64x48';
const inputPhotosExtension = '.jpg';
const outputPhotoExtension = '.jpg';

// const gridID = shortid.generate();
// const gridDirectory = `./grid_${gridID}`;

const findAllPhotos = dir => {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = dir + '/' + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      console.log(`Searching ${file}`);
      try {
        fs.mkdirSync(`${file.replace(directoryWithPhotos, newResolution)}`, {recursive: true});
      } catch(e) {
        console.log(e);
      }
      results = results.concat(findAllPhotos(file));
    } else { 
      if (file.toLowerCase().endsWith(inputPhotosExtension)) {
        results.push(file);
      } else {
        console.log(`Skipping ${file}`);
      }
    }
  });
  return results;
}

// console.log(`Starting script with id ${gridID} to avoid name conflicts. Creating directory ${gridDirectory} for new files.`);
// fs.mkdirSync(gridDirectory);
try {
  fs.mkdirSync(newResolution);
} catch(e) {
  console.log(e);
}

const start = new Date();
console.log(`Finding all photos...`);
const photosArray = findAllPhotos(directoryWithPhotos);

// console.log(`Generating ${Math.ceil(photosArray.length/numPicsPerRow)} rows with max ${numPicsPerRow} photos each for ${photosArray.length} total photos...`);

console.log('Creating new lower res photos...')
photosArray.forEach(f => {
  execSync(`magick "${f}" -resize ${newResolution} "./${f.replace(directoryWithPhotos, newResolution)}"`);
});

console.log(`Finished in ${(new Date() - start)/1000}`);

// let i = 0;
// while (i < photosArray.length) {
//   const photosInRow = photosArray.slice(i, i + numPicsPerRow);
//   const photosInRowWithNewResolution = photosInRow.map(filename => `'${filename}[${newResolution}]'`);
//   const rowNum = String(i/numPicsPerRow).padStart(3, '0');
//   const args = [...photosInRowWithNewResolution, '+append', `${gridDirectory}/row_${rowNum}${outputPhotoExtension}`];
//   console.log(`Generating row ${rowNum} of ${Math.ceil(photosArray.length/numPicsPerRow)}...`);
//   execSync(`magick ${args.join(' ')}`);
//   i += numPicsPerRow;
// }

// console.log('Finished with rows, combining into grid...');
// const args = [`${gridDirectory}/row_*${outputPhotoExtension}`, '-append', `${gridDirectory}/grid_with_${numPicsPerRow}_per_row${outputPhotoExtension}`];
// execSync(`magick ${args.join(' ')}`);
console.log('Done.')
