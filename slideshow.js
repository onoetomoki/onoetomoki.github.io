const img_src = ["image/hutami.jpg", "image/tikutetsu.jpg", "image/ema.jpg", "image/hk.jpg"];
let num = -1;

function slide_time() {
    if (num === 2) {
    num = 0;
    } else {
    num++;
    }
    document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 1200);