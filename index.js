/*
[ #2.2 JS DOM Fucntions -> CSS 없이 JS만 이용해서 html의 h1 스타일 바꿔보기]    
+  
[ #2.3 Modifying the DOM with JS ]

const title = document.getElementById("title");                 // DOM: Document Object Model
title.innerHTML ="Hi! From JS";                                //-> index.html의 h1: This work, But, 브라우저 속성의 html h1: Hi! From JS. 이게 JS를 이용하여 DOM의 형태를 바꾼 것!
title.style.color = "red";
document.title = 'I own you now';
*/

/* 
const title = document.querySelector("#title");               //class : "." , id : "#", //querySelector("#"): document 중 첫번째 #의 요소를 가져옴 )
title.innerHTML ="Hi! From JS";                               //innerHTML : 해당 ()(지금은 title)을 "~~"로 바꿔줌
title.style.color = "red";
*/

/*
// [ #2.4 Events and event handlers ]
const title = document.querySelector("#title");               //Events? 웹사이트에서 발생하는 모든 것들 ex) cilck, resize, submit, input change, load, before closing printing ...
function handleClick() {
    title.style.color = "blue";
}
    title.addEventListener("click", handleClick);
*/

/*
 //  [ #2.5 - #2.7 조건문 if, else, and, or ]

 if(10 > 5){                                                  //if(#) : #이 true일 경우, hi
     console.log("hi");
 } else {                                                     //else : #이 false일 경우, ho
     console.log("ho");
 }

if(20 > 5 && "elly" === "elly"){                              // ===, || 등 여러 연산기호 있음
    console.log("yes");
} else {
    console.log("no");
}

const title = document.querySelector("#title");

    const BASE_COLOR = "rgb(52, 73, 94)";                    //CSS h1 없애도 됨
    const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
*/

//Javascript를 로직에만 이용하기
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    } 이걸 한 방에 정리 */
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
