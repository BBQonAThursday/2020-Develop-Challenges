const inputLink = document.querySelector('#originalLink');
const form = document.querySelector('.link-builder-form');

const link = 'https://embed.widencdn.net/img/springswindowfashions/uibybxc1db/2048x495px/GRL0810_RN040113CA.jpeg?keep=c&crop=yes&u=fpq9bh';


const linkRegex = RegExp('(?<=springswindowfashions\/(?:.*))\/(.*?)\/','g');

const regTest = link.match(linkRegex);
console.log(regTest);


form.addEventListener('submit', buildLinks);


function buildLinks(e) {
  e.preventDefault();
  let originalLink = inputLink.value;
}