$(document).ready(function () {
    //이미지 웹 요소 (노드) 찾아서 저장
    var $img = $("#img");
    // 버튼에 이벤트 등록. (5초안에 left 값 480px 으로 설정하는 것이 곧
    // 움직이는 애니메이션 형태가 된다.)
    //버튼을 클릭하면 콜백함수가 실행된다.
    $("#btnStart").click(function () {
        $img.animate({
            left: "480px"
        }, 5000);
    })
})