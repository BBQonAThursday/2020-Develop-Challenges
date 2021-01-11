const inputLink = document.querySelector('#originalLink');
const form = document.querySelector('.link-builder-form');
const options = document.querySelector('#sizes');

const link = 'https://embed.widencdn.net/img/springswindowfashions/uibybxc1db/2048x495px/GRL0810_RN040113CA.jpeg?keep=c&crop=yes&u=fpq9bh';
const outputList = document.querySelector('.output-links');

const springsEmbed = 'https://embed.widencdn.net/img/springswindowfashions'
;
const widenIdRegex = RegExp('(?<=springswindowfashions)\/(.*?)\/','g');
const imageParamsRegex = RegExp('[^/]*$','g');

const linkRegex = RegExp('(?<=springswindowfashions\/(?:.*))\/(.*?)\/','g');
const regTest = link.match(linkRegex);

// let newUrl = imageWidenId[0] + 'options.value' + '/' + imageParams[0];
// need to use the linkRegex to split the string to 3 parts:
// 1. The whole string up until the dimensions
// 2. the linkRegex
// 3. the remainder of the string

// next, need to loop through the images sizes and concat strings of string 1, image size and string 2




form.addEventListener('submit', handleSubmit);


function handleSubmit(e){
  e.preventDefault();
  let originalLink = inputLink.value;
  let sizesArray = options.value.split(',');
  console.log(sizesArray, originalLink);
  const generatedLinks = buildLinks(originalLink, sizesArray);

  outputHTML = generatedLinks.map(link => `
  <li class="output-link">
    ${link}
  </li>`).join('');
  console.log(outputHTML);
  outputList.innerHTML = outputHTML;
}


function buildLinks(originalLink, sizesArray ) {

  const linkId = originalLink.match(widenIdRegex);
  // get the widen id from original Link
  console.log("widen id is: " + linkId);

  const trimmedSize = sizesArray.map(size => size.trim());
  const processedLinks = trimmedSize.map(size => `${springsEmbed}${linkId}${size}`);
   console.log(processedLinks);

   return processedLinks;

  // const imageWidenId = originalLink.match(widenIdRegex);
  // const imageParams = originalLink.match(imageParamsRegex);
  // console.log(originalLink, options.value);
  
  // let newUrls = [springsEmbed + imageWidenId[0] + options.value + '@2x/' + imageParams[0],  springsEmbed + imageWidenId[0] + options.value + '/' + imageParams[0]];
  // console.log(newUrls);
  
  
}

function createRetinaLinks(){

}