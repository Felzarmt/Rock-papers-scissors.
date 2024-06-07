const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const choiceCpu = document.getElementById('cpuchoice');
const choiceUser = document.getElementById('userchoice');
const result = document.getElementById('result');
const userpoints = document.getElementById('userpoints');
const cpupoints = document.getElementById('cpupoints');
let choice = 0;
let choiceCPU = 0;
let img = "";
let imgUser = "";
let winsUser = 0;
let winsCpu= 0;

rock.addEventListener("click",piedraChoice);
paper.addEventListener("click",papelChoice);
scissors.addEventListener("click",tijeraChoice);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
async function piedraChoice(){ 
    choice = 1;
    changeImg();
    referee();
    await delay(3000);
result.textContent = "VS";
    winner();
};
async function papelChoice(){ 
    choice = 2;
    changeImg();
    referee();
    await delay(3000);
result.textContent = "VS";
    winner();
};
async function tijeraChoice(){ 
    choice = 3;
    changeImg();
    referee();
    await delay(3000);
result.textContent = "VS";
    winner();
};
function referee(){
    if(choiceCPU == choice){
    result.textContent = "Draw";
    }else if(choiceCPU == 1 && choice == 2 || choiceCPU == 2 && choice == 3 || choiceCPU == 3 && choice == 1){
    result.textContent = "You Win :D";
        winsUser += 1;
        userpoints.textContent = winsUser; 
    }else if(choiceCPU == 1 && choice == 3 || choiceCPU == 2 && choice == 1 || choiceCPU == 3 && choice == 2){
    result.textContent = "You Lose :b";
        winsCpu += 1;
        cpupoints.textContent = winsCpu;  
    }
}
async function winner(){
    choice = 0;
    choiceCPU = 0;
    if (winsUser == 3){
        result.textContent = "YOU WIN THE GAME!!";
        await delay(4000);
        location.reload();
    }else if (winsCpu == 3){
        result.textContent = "I'm sorry, you lose, try your luck again";
        await delay(4000);
        location.reload();
    }
}
async function changeImg(){
    choiceCPU =Math.floor(Math.random() * 3) + 1;
    if(choiceCPU == 1){
        img = "./rock.jpg";
    }else if(choiceCPU == 2){
        img = "./paper.jpg";
    }else if(choiceCPU == 3){
        img = "./scissors.jpg";
    }
    if(choice == 1){
        imgUser = "./rock.jpg";
    }else if(choice == 2){
        imgUser = "./paper.jpg";
    }else if(choice == 3){
        imgUser = "./scissors.jpg";
    }
    choiceUser.style.opacity = 0;
    choiceCpu.style.opacity = 0;
    await delay(500); 
    choiceUser.src = imgUser;
    choiceCpu.src = img;
    choiceUser.style.opacity = 1;
    choiceCpu.style.opacity = 1;
    await delay(2000);
    choiceUser.style.opacity = 0;
    choiceCpu.style.opacity = 0;
    await delay(500);
    choiceUser.src = "./random.png";
    choiceCpu.src = "./random.png";
    choiceUser.style.opacity = 1;
    choiceCpu.style.opacity = 1;
    await delay(500);
}