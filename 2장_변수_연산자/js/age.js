//함수 calc()선언과 구현을 하고 있다.
function calc() {
    var currentYear = 2023;//올해 년도를 지덩을 변수 currentyear에 저장
    //사용자로붕터 입력 받은 값으로 변수 birthyear에 저장함
    var birthYear = prompt("태어난 년도를 입력하세요", "YYYY")
    //변수 age를 0으로 초기화
    var age = 0;
    //상세 나이를 구하기 위한 코드
    age = currentYear - birthYear + 1;
    //document는 현재 웹 브라우저의 페이지를 의미하고, querySelector()는 
    //id가 result인 웹 요소 (div)를 의미한다. innerHTML은 대입한 값을
    // html문서에 대체하시오
    document.querySelector("#result").innerHTML
        = "당신의 나이는 " + age + "세 입니다"
}