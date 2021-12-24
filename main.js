
let time = 6;
let score = 0;
let isPlaying;


//DOM Elements
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const message = document.querySelector("#message")
// console.log(timeDisplay)

// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

    // console.log(words)

    function showWord(words){
        // console.log(words)
        const randomIdx = Math.floor(Math.random() * words.length)
        console.log(words[randomIdx])
        currentWord.innerHTML = words[randomIdx]
    }

    function matchWords(){
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = "Correct !!!"
            return true
        }else{
            message.innerHTML = "Incorrect!!!"
            return false
        }
    }

    function startMatch(){
        // console.log("start Match Call")
        if(matchWords()){
            time = 6;
            score++;
            showWord(words)
            wordInput.value = ''
            isPlaying = true
        }
        scoreDisplay.innerHTML = score
    }

    function checkstatus(){
        console.log("checkstatus")
        if(!isPlaying && time == 0){
            message.innerHTML = "Game Over"
        }
    }

    function countdown(){
        console.log("countdown")
        if(time>0)
         time--;
         else if(time ==0 )
         timeDisplay = false;

         timeDisplay.innerHTML = time
        
    }

    //Intialize the Game
    function init(){
        // console.log("Page Load")
        showWord(words)
        wordInput.addEventListener('input',startMatch)
        setInterval(countdown,1000)
        setInterval(checkstatus,50)
        // for(let i=0;i<100000000000;i++)
        // console.log("baaki kaam abhi karo")
    }

    //Page Load
    document.addEventListener("DOMContentLoaded",init)