$(document).ready(function () {
    $("#next").click( function () {
       let currentImages = [$("img.first"), $("img.second"), $("img.third")];
       let count = $(".count");
       let countNum = Number(count[0].innerText);
       if(countNum == 3) {
           count.html(1);
       } else{
           count.html(Number(count[0].innerText) + 1);
       }
       currentImages[0][0].src = "img/Model3.jpg";
       currentImages[0][0].style.display = "none";
       currentImages[0].fadeIn(200);
       currentImages[1][0].src = "img/Model1.jpg";
       currentImages[1][0].style.display = "none";
       currentImages[1].fadeIn(200);
       currentImages[2][0].src = "img/Model2.jpg";
       currentImages[2][0].style.display = "none";
       currentImages[2].fadeIn(200);
       currentImages[0][0].classList = "third";
       currentImages[1][0].classList = "first";
       currentImages[2][0].classList = "second";
    });
    $("#back").click( function () {
        let currentImages = [$("img.first"), $("img.second"), $("img.third")];
        let count = $(".count");
        let countNum = Number(count[0].innerText);
        if(countNum == 1) {
            count.html(3);
        } else{
            count.html(Number(count[0].innerText) - 1);
        }
        currentImages[0][0].src = "img/Model2.jpg";
        currentImages[0][0].style.display = "none";
        currentImages[0].fadeIn(200);
        currentImages[1][0].src = "img/Model3.jpg";
        currentImages[1][0].style.display = "none";
        currentImages[1].fadeIn(200);
        currentImages[2][0].src = "img/Model1.jpg";
        currentImages[2][0].style.display = "none";
        currentImages[2].fadeIn(200);
        currentImages[0][0].classList = "second";
        currentImages[1][0].classList = "third";
        currentImages[2][0].classList = "first";
    });
});