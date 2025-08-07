const left=document.querySelector('.left');
const right =document.querySelector('.right');
const images=document.querySelectorAll('.image');
const slider=document.querySelector('.slider');
let slideNumber=1;
const length=images.length;

const bottom=document.querySelector('.bottom');

for (i=0; i<length; i++){
    const div=document.createElement('div');
    div.className='button';
    bottom.appendChild(div);
};

const buttons=document.querySelectorAll('.button');
buttons[0].style.backgroundColor='white';

const resetBg= () =>{
buttons.forEach((button) =>{
    button.style.backgroundColor="transparent";
    button.addEventListener('mouseover',stopslideshow);
    button.addEventListener('mouseout', startslideshow);
})
}

buttons.forEach((button,i) => {
 button.addEventListener('click',() =>{
    resetBg();
    slider.style.transform = `translateX(-${i*600}px)`;
   
    slideNumber= i + 1;
    button.style.backgroundColor="white";

 });
});

const changeColor=() =>{
    resetBg();
    buttons[slideNumber-1].style.backgroundColor='white';
}



right.addEventListener('click',()=>{
    if(slideNumber < length){
        slider.style.transform = `translateX(-${slideNumber * 600}px)`;
        slideNumber++;
    }
    else {
        
        slider.style.transform = `translateX(0px)`;
        slideNumber=1; 
    }
    changeColor();
  
})

// left button

left.addEventListener('click',()=>{
    if(slideNumber > 1){
        slider.style.transform = `translateX(-${(slideNumber-2) * 600}px)`;
        slideNumber--;
        
    }
    else {
        
        slider.style.transform = `translateX(-${(length-1)*600}px)`;
        slideNumber=length;
    }
    changeColor();
  
});

let slideinterval;

const startslideshow= () =>{
    slideinterval=setInterval(() => {
        if(slideNumber < length){
            slider.style.transform = `translateX(-${slideNumber * 600}px)`;
            slideNumber++;
        }
        else {
            
            slider.style.transform = `translateX(0px)`;
            slideNumber=1; 
        }
        changeColor();
    }, 2000);
};

const stopslideshow= ()=>{
 clearInterval(slideinterval);
};
startslideshow();

slider.addEventListener('mouseover', stopslideshow);
slider.addEventListener('mouseout', startslideshow);

right.addEventListener('mouseover', stopslideshow);
right.addEventListener('mouseout', startslideshow);

left.addEventListener('mouseover',stopslideshow);
left.addEventListener('mouseout', startslideshow);







