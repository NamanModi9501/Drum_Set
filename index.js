alert("fuck you");
var audio=[];
for(var i=0;i<4;i++)
audio[i]=new Audio('sounds/tom-'+(i+1)+'.mp3');
audio.push(new Audio('sounds/snare.mp3'));
audio.push(new Audio('sounds/crash.mp3'));
audio.push(new Audio('sounds/kick-bass.mp3'));
document.addEventListener("keydown",function(event){
  var k=event.key;
  switch(k){
    case "w": audio[0].play();break;
    case "a": audio[1].play();break;
    case "s": audio[2].play();break;
    case "d": audio[3].play();break;
    case "j": audio[4].play();break;
    case "k": audio[5].play();break;
    case "l": audio[6].play();break;
  }
});
for(var i=0;i<7;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var ch=this.innerHTML;
  switch(ch){
    case "w": audio[0].play();break;
    case "a": audio[1].play();break;
    case "s": audio[2].play();break;
    case "d": audio[3].play();break;
    case "j": audio[4].play();break;
    case "k": audio[5].play();break;
    case "l": audio[6].play();break;
  }
});
