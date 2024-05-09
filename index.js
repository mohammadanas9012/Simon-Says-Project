let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

// Step 1: Key press krne pe game start ho gaya

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();

    }
});

function gameFlash(btn){        // ye Game flash krwaye ga Jb tum tab kro ge button ek sec ke leye white screen hoge uske baad
    btn.classList.add("Flash"); // fir same colour display hoga
    setTimeout(function (){
        btn.classList.remove("Flash");
    },250);
}

function userFlash(btn){            // ye user flash krwaye ga
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndex=Math.floor(Math.random() * 3);
    let randColor=btns[randIndex];
    let randbtn=document.querySelector(`.${randColor}`);

    // console.log(randIndex);
    // console.log(randColor);
    // console.log(randbtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    // random btn choose
    gameFlash(randbtn);

}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }   
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress(){
    // console.log(this); // Detect kro kaun sa button press kiya gaya hai
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}