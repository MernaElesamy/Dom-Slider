// dom element event action 
var imgs= Array.from(document.querySelectorAll('.item img')) ;
var lightBoxContainer=document.querySelector('.lightbox-container');
var closeBtn=document.querySelector('#close');
var nextBtn=document.querySelector('#next');
var prevBtn=document.querySelector('#prev');
var lightBoxItem=document.querySelector('.lightbox-item');
var currentIndex=0;

for(var i=0;i<imgs.length;i++){
   imgs[i].addEventListener('click',function(e){
    currentIndex =imgs.indexOf(e.target);
     var currentSrc=e.target.src;
    lightBoxContainer.style.display='flex'
    lightBoxItem.style.backgroundImage=`url(${currentSrc})`
    
   })
}

closeBtn.addEventListener('click',closeSlider)
    // lightBoxContainer.style.display="none" 
function closeSlider(){
    lightBoxContainer.style.display="none"
    
}
nextBtn.addEventListener('click',getNextSlide);

function getNextSlide(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    var currentSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${currentSrc})`
}

prevBtn.addEventListener('click',getPrevSlider)
 function getPrevSlider(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
    var currentSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${currentSrc})`
 }
document.addEventListener('keydown',function(e){
//   console.log(e);
  if(e.key=='ArrowRight'){
         getNextSlide()
      }

      else if(e.key=='ArrowLeft'){
        getPrevSlider()
      }
      else if(e.key=='Escape'){
        closeSlider()
      }
})























