var btn = document.getElementById('btn');
var qr_img = document.getElementById('temp-img');
var loader = document.getElementById('lds-spinner');
var filez = document.getElementById('choose-file');
var txt = document.getElementById('text');
var ev;
var loadFile = function(event) {
    ev =event;
};
btn.addEventListener("click",function(){
    qr_img.style.display='none';
    loader.style.display='block';

    let val;
    if(txt.value)
    val = txt.value;
    else if(filez.value)
    val = URL.createObjectURL(ev.target.files[0]);
    else
    alert("Please enter one of given field");
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`;
    qr_img.src = api;

    qr_img.onload = function(){
        loader.style.display="none";
        qr_img.style.display='block';
    }
})