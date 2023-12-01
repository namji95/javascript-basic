var tab = $('.tab-button');
var content = $('.tab-content');

// 다른 방법
// 클래스명에 dataset 이용하기
// 내가 지정한 dataset의 아이디가 클릭되면
// 그 값을 내가만든 함수에 입력될 수 있게 코드 작성

$('.list').click(function(e) {
    tabChange(e.target.dataset.id);
});

// for문을 사용하지 않고 버블링 응용하는 방법

// $('.list').click(function(e) {
//     if (e.target == document.querySelectorAll('.tab-button')[0]) {
//         tabChange(0);
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[1]) {
//         tabChange(1);
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[2]) {
//         tabChange(2);
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[3]) {
//         tabChange(3);
//     }
// });

function tabChange(i) {
    tab.removeClass('orange');
    tab.eq(i).addClass('orange');
    content.removeClass('show');
    content.eq(i).addClass('show');
}
