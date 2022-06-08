const cursor=document.querySelector('.cursor');
const holes=[...document.querySelectorAll('.hole')];
// console.log(holes);
const scores=document.querySelector('.score span');
const time=document.querySelector('.time');
const startbutton=document.querySelector('.modal button');
const modal=document.querySelector(".modal");
const highscore=document.querySelector('.highscore');
const gameover=document.querySelector('.display h2');
let timeleft;
let maxscore=0;
let score=0;
startbutton.addEventListener("click",()=>{
    modal.classList.add('modalclose');
    timeleft=10;
   
    time.textContent=timeleft;
    let timer=setInterval(()=>{
        time.textContent=timeleft;
        if(timeleft===0){
            clearInterval(timer);
            gameover.style.visibility="visible";
            modal.classList.remove("modalclose");
        if(score>maxscore){
            maxscore=score;
            highscore.textContent=maxscore;
        }
        else{
            highscore.textContent=maxscore;
        }
        score=0;
        scores.textContent=score;
        }
        else{
            timeleft--;
            time.textContent=timeleft<10?("0"+timeleft):timeleft;  
            // const face=document.querySelectorAll("")
        }
       
    },1000)
})
function run(){
    const i=Math.floor(Math.random()*holes.length);
    // const j=Math.floor(Math.random()*holes.length);
    // console.log(i);
    const hole=holes[i];
    let timer=null;
    const sound=new Audio("assets_smash.mp3");
    const img=document.createElement('img');
    // const img1=document.createElement('img1');
    img.classList.add('mole');
    img.src="mole.png";
    img.classList.add('bomb');
    // img.src="bomb.png";
    img.addEventListener('click',()=>{
        score+=10;
        sound.play();
        scores.textContent=score;
        img.src='mole-whacked.png';
        clearTimeout(timer);
        timer=setTimeout(()=>{
            hole.removeChild(img)
            run()
        },100)
    })
    hole.appendChild(img);
    timer=setTimeout(()=>{
        hole.removeChild(img)
        run()
    },1500)
}
run()
window.addEventListener('mousemove',e=>{
    cursor.style.top=e.pageY+'px';
    cursor.style.left=e.pageX+'px';
})
window.addEventListener('mousedown',()=>{
    cursor.classList.add('active');
})
window.addEventListener('mouseup',()=>{
    cursor.classList.remove('active');
})

