const picArray = [
{src: 'images/hutami.jpg', title: 'Star'},
{src: 'images/tikutetsu.jpg', title: 'Sakura'},
{src: 'images/ema.jpg', title: 'Ema'},
{src: 'images/hk.jpg', title: 'Hong Kong'}
];

let counter = 0;

function changePicture() {
  if (counter < picArray.length) {
    document.getElementById('pics').src = picArray[counter].src;
    document.getElementById('pic-title').innerHTML = picArray[counter].title;
    counter++;
  } else {
    document.getElementById('pics').src = picArray[0].src;
    document.getElementById('pic-title').innerHTML = picArray[0].title;
    counter = 1;
  } 
}

let playingID = 0;

function playSlidedeshow () {
  if (playingID == 0) {
    document.getElementById('playButton').innerHTML = 'STOP';
    playingID = setInterval(changePicture, 2000);
  } else {
    document.getElementById('playButton').innerHTML = 'START';
    clearInterval(playingID);
    playingID = 0;
  }
}