(function(){
    'use strict';
    console.log('reading JS');

    const body =document.querySelector('body');
    let imgCount=0;
    let idleCount=0;

    const pic = document.querySelector('#slideshow');
    
    const lArrow = document.querySelector('#left');
    const rArrow = document.querySelector('#right');

    lArrow.addEventListener("click", function(){
        if (imgCount == 0){
            lArrow.style.filter = 'grayscale(100%)';
        }else if (imgCount==1) {
            imgCount--;
            lArrow.style.filter = 'grayscale(100%)';
            pic.src = `images/Salvaged Pins-images-0.jpg`;
        }else if (imgCount ==2){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-2.jpg`;
     }else if (imgCount==3){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-3.jpg`;
        }else if (imgCount==4){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-4.jpg`;
        }else if (imgCount==5){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-5.jpg`;
        }else if (imgCount==6){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-6.jpg`;
        }else if (imgCount==7){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-7.jpg`;
        }else if (imgCount==8){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-8.jpg`;
        }else if (imgCount==9){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-9.jpg`;
        }else if (imgCount==10){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-10.jpg`;
        }else if (imgCount==11){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-11.jpg`;
        }else if (imgCount==12){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-12.jpg`;
        }else if (imgCount==13){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-13.jpg`;
            rArrow.style.filter = 'grayscale(0%)';
        }else if (imgCount==14){
            imgCount--;
            pic.src = `images/Salvaged Pins-images-14.jpg`;
            rArrow.style.filter = 'grayscale(0%)';
        }

    });

        rArrow.addEventListener("click", function(){
        if (imgCount == 0){
            imgCount++;
            lArrow.style.filter = 'grayscale(0%)';

            pic.src = `images/Salvaged Pins-images-2.jpg`;
        }else if (imgCount==1) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-3.jpg`;
        }else if (imgCount==2) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-4.jpg`;
        }else if (imgCount==3) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-5.jpg`;
         }else if (imgCount==4) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-6.jpg`;
         }else if (imgCount==5) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-7.jpg`;
         }else if (imgCount==6) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-8.jpg`;
         }else if (imgCount==7) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-9.jpg`;
         }else if (imgCount==8) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-10.jpg`;
         }else if (imgCount==9) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-11.jpg`;
         }else if (imgCount==10) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-12.jpg`;
         }else if (imgCount==11) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-13.jpg`;
         }else if (imgCount==12) {
            imgCount++;
            pic.src = `images/Salvaged Pins-images-14.jpg`;
            rArrow.style.filter = 'grayscale(100%)';
        }
    });

    function idle(){
            setTimeout(function(){
                if(idleCount == 0){
                    me.src = 'images/idle2.png';
                    me.style.left = '400px';
                    idleCount++;
                } else if (idleCount == 1){
                    me.src = 'images/idle1.png';
                    me.style.left = '350px';
                    idleCount--;
                }
                idle();
                
            }, 2500);
        };
    idle();
})();