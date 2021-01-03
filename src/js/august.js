const inputLink = document.querySelector('#originalLink');
const form = document.querySelector('.link-builder-form');
const options = document.querySelector('#sizes');

const link = 'https://embed.widencdn.net/img/springswindowfashions/uibybxc1db/2048x495px/GRL0810_RN040113CA.jpeg?keep=c&crop=yes&u=fpq9bh';
const outputList = document.querySelector('.output-links');

const springsEmbed = 'https://embed.widencdn.net/img/springswindowfashions'
const imageSizes = ['1440x560px', '768x300px', '540x300px', '1440x960px'];
const widenIdRegex = RegExp('(?<=springswindowfashions)\/(.*?)\/','g');
const imageParamsRegex = RegExp('[^/]*$','g');

const linkRegex = RegExp('(?<=springswindowfashions\/(?:.*))\/(.*?)\/','g');
const regTest = link.match(linkRegex);
let sizeArray = [];



// let newUrl = imageWidenId[0] + 'options.value' + '/' + imageParams[0];
// need to use the linkRegex to split the string to 3 parts:
// 1. The whole string up until the dimensions
// 2. the linkRegex
// 3. the remainder of the string

// next, need to loop through the images sizes and concat strings of string 1, image size and string 2




form.addEventListener('submit', buildLinks);


function buildLinks(e) {
  e.preventDefault();
  let originalLink = inputLink.value;
  // console.log(originalLink);
  const imageWidenId = originalLink.match(widenIdRegex);
  const imageParams = originalLink.match(imageParamsRegex);
  // console.log(originalLink, options.value);
  
  let newUrls = [springsEmbed + imageWidenId[0] + options.value + '@2x/' + imageParams[0],  springsEmbed + imageWidenId[0] + options.value + '/' + imageParams[0]];
  console.log(newUrls);
  
  
}