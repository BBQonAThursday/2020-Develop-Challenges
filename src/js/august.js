const inputLink = document.querySelector('#originalLink');
const form = document.querySelector('.link-builder-form');
const options = document.querySelector('#sizes');

const link = 'https://embed.widencdn.net/img/springswindowfashions/uibybxc1db/2048x495px/GRL0810_RN040113CA.jpeg?keep=c&crop=yes&u=fpq9bh';
const outputList = document.querySelector('.output-links');

const springsEmbed = 'https://embed.widencdn.net/img/springswindowfashions'
;
const widenIdRegex = RegExp('(?<=springswindowfashions)\/(.*?)\/','g');
const imageParamsRegex = RegExp('[^/]*$','g');

const widenUrlParamsRegex = RegExp('(?<=springswindowfashions\/.*\/.*\/)(.*$)','g');

<<<<<<< HEAD
let preMadeSizes = 
  [
    {
      "name": "horizons sliders",
      "sizes": "1440x655px@2x,1440x655px,768x590px@2x,768x590px,540x590px@2x,540x590px"
    }
  ]
=======
const tooltip = document.querySelector('.tooltip');
>>>>>>> 7c4a82461b701f9210eaf42d1c15eb840e26240f


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
  // console.log(sizesArray, originalLink);
  const generatedLinks = buildLinks(originalLink, sizesArray);

  // TODO : add in the Image size for each link. may need to convert the output array to an object in the build LInks function
  outputHTML = generatedLinks.map(link => `
  <li class="output-link">
  <div class="size-and-link">
    <div class="link-size">
    ${link.size} 
    <div class="copy-link" data-link="${link.link}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
        <path xmlns="http://www.w3.org/2000/svg" d="M2 4C2 2.89543 2.89543 2 4 2H14C15.1046 2 16 2.89543 16 4V8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H10C8.89543 22 8 21.1046 8 20V16H4C2.89543 16 2 15.1046 2 14V4ZM10 16V20H20V10H16V14C16 15.1046 15.1046 16 14 16H10ZM14 14V4L4 4V14H14Z" fill="#155674"></path>
      </svg>
    </div>
    </div>
    <p class="link-display">${link.link}</p>
  </div>
  
   
  </li>`).join('');
  // console.log(outputHTML);
  outputList.innerHTML = outputHTML;
  
  generateCopyFunctionality();
}

function generateCopyFunctionality() {
  const copyLinks = outputList.querySelectorAll('.copy-link');
  // console.log(copyLinks);

  // I think this needs to dispatch a custom event that adds the listeners. this is just returning the outcome right away and not sticking globally.
  copyLinks.forEach(link => link.addEventListener('click', handleCopy));
}

function toggleHidden(input) {
    if(input.classList.contains("hidden")){
    input.classList.remove("hidden");
    // console.log("hidden removed");
  } else {
    input.classList.add("hidden");
    // console.log("hidden");
  }
}

function handleCopy(e) {
  // console.log(e.currentTarget);
  const copyData = e.currentTarget.dataset.link;
  
  navigator.clipboard.writeText(copyData).then(function(){
    console.log("text copied:  " + copyData);
    // alert("text copied:" + copyData);
    toggleHidden(tooltip);
    setTimeout(toggleHidden, 1500, tooltip);
  }, function() {
    // console.log("copy failed");
  });
  // setTimeout(toggleHidden(tooltip), 2000);
}


function buildLinks(originalLink, sizesArray ) {
 
  // TODO handle the retina sizes checkbox and generate those links as well

  const linkId = originalLink.match(widenIdRegex);
  const endUrl = originalLink.match(widenUrlParamsRegex);
  //console.log(endUrl);
  // get the widen id from original Link
  // console.log("widen id is: " + linkId);

  const trimmedSizes = sizesArray.map(size => size.trim());
  const processedLinks = trimmedSizes.map(size => `${springsEmbed}${linkId}${size}/${endUrl}`);

  // console.log(trimmedSizes);
  // console.log(processedLinks);
  let finalLinks = []
  for(i = 0; i < sizesArray.length; i++) {
    finalLinks.push(
      {
        size: trimmedSizes[i],
        link : processedLinks[i]
      })
  }
  // console.log(finalLinks);
  
   return finalLinks;

  // const imageWidenId = originalLink.match(widenIdRegex);
  // const imageParams = originalLink.match(imageParamsRegex);
  // console.log(originalLink, options.value);
  
  // let newUrls = [springsEmbed + imageWidenId[0] + options.value + '@2x/' + imageParams[0],  springsEmbed + imageWidenId[0] + options.value + '/' + imageParams[0]];
  // console.log(newUrls);
  
  
}

function createRetinaLinks(){

}