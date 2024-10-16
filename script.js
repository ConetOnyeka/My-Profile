alert('this is javascript website')

let imageVar=document.getElementById('image');
let captionVar=document.getElementById('caption');

let imageArray=['image/slide1.jpg','image/slide2.jpg','image/slide3.png', ];
let textArray=['Graphics Design','AI Engineer','Website Development', ];

let imageIndex=0;

function slideShow(){
    imageVar.setAttribute('src', imageArray[imageIndex]);

    captionVar.textContent=textArray[imageIndex];
    imageIndex++;

    if(imageIndex >= imageArray.length){
        imageIndex=0
}
}

setInterval(slideShow,3000);


