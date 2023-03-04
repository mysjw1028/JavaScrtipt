//heading 변수를 선언 하고 h1 태그를 저장한 글이 되었다.
var heading = document.querySelector("#heading");
//h1 택를 onclick를 하면 글자색을 red로 변경한다.
heading.onclick = function () {
    heading.style.color = "red";
}