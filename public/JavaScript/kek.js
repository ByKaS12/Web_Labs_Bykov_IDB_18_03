let images = new Array();
let i = 0;

images[0] = 'images/photo1.jpg';
images[1] = 'images/photo2.jpg';
images[2] = 'images/photo3.jpg';

let timerId = setInterval(() => {
  document.getElementById("img").src = images[i];
  i++;
  if(i == images.length) i = 0;
}, 2500);

let j = 1;
let timerAboutId = setInterval(() => {
  document.getElementById("about").innerHTML = 'Tut doljen bitb ogromnii text, no chto-to poshlo ne tak primerno  ' + j + '  raz';
  j++;
    if(j==4)
       j=1;
}, 2500);
