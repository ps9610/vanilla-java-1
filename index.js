/*
[ #2.2 JS DOM Fucntions ]

{ CSS 없이 JS만 이용해서 html의 h1 스타일 바꿔보기 }

const title = document.getElementById("title");
(//What is DOM? ->Document Object Model)
title.innerHTML ="Hi! From JS";
title.style.color = "red";

[ #2.3 Modifying the DOM with JS ]

//-> index.html의 h1은 This work, But 브라우저 속성의 html h1은 Hi! From JS.
이게 JS를 이용하여 DOM의 형태를 바꾼 것!

document.title = 'I own you now';
*/

/* 
const title = document.querySelector("#title");
(//class 입력은  "." , id 입력은 "#" )
(//querySelector: 노드의 첫번째 자식 반환 )
title.innerHTML ="Hi! From JS";
title.style.color = "red";
*/

// [ #2.4 Events and event handlers ]
const title = document.querySelector("#title");

/*
Events? 웹사이트에서 발생하는 모든 것들
ex) cilck, resize, submit, input change, load, before closing printing ...


function handleClick() {
    title.style.color = "blue";
}

    title.addEventListener("click", handleClick);
    */


