window.onload = function(){

    
    

    // function shuffle(array) {
    //     let currentIndex = array.length,  randomIndex;
    //     while (currentIndex != 0) {
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;
    
    //         [array[currentIndex], array[randomIndex]] = [
    //         array[randomIndex], array[currentIndex]];
    //     }
    //     return array;
    // }


    // let arr = [
    //     {java : "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},
    //     {python: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},
    //     {nodejs: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"},
    //     {cpp : "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},
    //     {react: "https://reactnative.dev/img/header_logo.svg"},
    //     {c : "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"},
    //     {js : "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"},
    //     {figma : "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"},

    //     {c : "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"},
    //     {java : "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},
    //     {cpp : "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},
    //     {figma : "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"},
    //     {react: "https://reactnative.dev/img/header_logo.svg"},
    //     {python: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},
    //     {js : "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"},
    //     {nodejs: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"},

    // ]



    let boxContainer =  document.querySelector(".box-container")
    let boxes = Array.from(document.querySelectorAll(".box"));
    let resetbtn = document.querySelector(".resetbtn");
    let displayContainer = document.querySelector(".display-container");
    let movesDisp = document.querySelector(".moves-disp");
    let yougotDisp = document.querySelector(".yougot-disp");

    let cardOne;
    let cardTwo;
    let cardOneOpenend=false;
    let cardTwoOpenend=false;
    let moves = 0;
    let youGot = 0;
    let cardcount = 0;

    
    boxes.forEach((box,index)=>{
        box.addEventListener("click",(e)=>{userAction(box,index,e)});
    });

    resetbtn.addEventListener("click",(e)=>{

        cardOne=null;
        cardTwo=null;
        cardOneOpenend=false;
        cardTwoOpenend=false;
        moves = 0;
        youGot = 0;
        cardcount = 0;

        boxes.forEach((box)=>{
            box.classList.remove("hide");
            box.classList.remove("box-animate");
        })
        // boxContainer.classList.remove("hide");
        boxContainer.classList.remove("hide");
        displayContainer.classList.add("hide"); 

        yougotDisp.innerHTML=`<h2 class="movesDisp">You got: ${youGot}</h2>`;
        movesDisp.innerHTML = `<h2 class="movesDisp">Moves: ${moves}</h2>`;

        // shuffle(arr);
        // console.log(arr);

    })


    


    function userAction(box,index,o){

        // console.log(box.getAttribute("name"));
        console.log("box : "+box+"\n index: "+index+"\n object: "+o);


        if(cardOneOpenend === false && cardcount === 0){
            cardcount+=1;
            cardOne = index;
            // console.log(cardOne);
            boxes[cardOne].classList.add("box-animate")
            cardOneOpenend=true;
        }

        else if(cardTwoOpenend === false && cardOne !== index){
            cardcount+=1;
            cardTwo = index;
            // console.log(cardTwo);
            box.classList.add("box-animate");
            cardTwoOpenend = true;
        }

        setTimeout( ()=>
        {
            if(cardOneOpenend && cardTwoOpenend && cardcount === 2){
                moves+=1;
                console.log("moves: "+moves);
                movesDisp.innerHTML = `<h2 class="movesDisp">Moves: ${moves}</h2>`;

                setTimeout(()=>{
                checkBoathSame(cardOne,cardTwo);
                },500);
            }
        },500);



        // if(cardOneOpenend && cardTwoOpenend){
        //     moves+=1;
        //     // console.log(firstname);
        //     // console.log(secondname);

        //     checkBoathSame(cardOne,cardTwo);
        // }
    }


    function checkBoathSame(cardOne,cardTwo){
        let firstName = boxes[cardOne].getAttribute("name");
        let secondName = boxes[cardTwo].getAttribute("name");
        

        if(firstName === secondName){
            youGot+=2;
            yougotDisp.innerHTML=`<h2 class="movesDisp">You got: ${youGot}</h2>`;
            console.log("You Got: "+youGot);
            deleteCards(cardOne,cardTwo);
            checkgameEnded(youGot);

        }
        else{
            flipCards(cardOne,cardTwo);
        }

    }

    

    function deleteCards(cardOne,cardTwo){
        boxes[cardOne].classList.add("hide");
        boxes[cardTwo].classList.add("hide");
        cardOneOpenend = false;
        cardTwoOpenend = false;
        cardcount=0;
    }

    function flipCards(cardOne,cardTwo){
        boxes[cardOne].classList.remove("box-animate");
        boxes[cardTwo].classList.remove("box-animate");
        cardOneOpenend = false;
        cardTwoOpenend = false;
        cardcount=0;

    }
+
    function checkgameEnded(youGot){
        if(youGot >= 16){
            console.log("check game ended");
            boxContainer.classList.add("hide");
            displayContainer.classList.remove("hide");
        }
    }


}