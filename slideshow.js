const img_src = ["image/hutami.jpg", "image/tikutetsu.jpg", "image/ema.jpg", "image/hk.jpg"];
let num = -1;

function slide_time() {
    if (num === 3) {
    num = 0;
    } else {
    num++;
    }
    document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 2500);

function footer(){
    $.ajax({
        url: "footer.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}