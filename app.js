let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0
let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("The game has started");
        started=true;
        levelup();
    }
})
function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}
function UserFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColour=btns[randIdx];
    let randBtn=document.querySelector(`.${randColour}`);
    // console.log(randIdx);
    // console.log(randColour);
    // console.log(randBtn);
    gameSeq.push(randColour);
    console.log(gameSeq);
    GameFlash(randBtn);
}
function checkAns(idx){
    //console.log("curr level :",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your score was <b>${level}<b> <br> Press any key to start over`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }),450;
        reset();
    }
}
function btnPress() {
    let btn=this;
    //console.log(btn);

    UserFlash(btn);
    userColour=btn.getAttribute("id");
    console.log(userColour);
    userSeq.push(userColour);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}