const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["mine/cat.jpg","mine/dog.jpg","mine/duck.jpg","mine/panda.jpg","mine/racoon.jpg"];

/* Declaring the alternative text for each image file */

const alts = ['eyeball', 'curly stone', 'purple flowers', 'cat person', 'butterfly'];

/* Looping through images */

for(var i=0; i<images.length; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', images[i]);
newImage.setAttribute('alt', alts[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener("click", e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
})
}

/* Wiring up the Darken/Lighten button */
function darkBtn () {
    if (btn.getAttribute("class") == 'dark')
    {
        btn.setAttribute("class", 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute("class", 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

btn.addEventListener("click", darkBtn);