for (var i = 0; i < 3; i++) {
    console.log('안녕');
}
// 자바스크립트 for문 작성법

var tab = $('.tab-button');
var content = $('.tab-content');

// 함수로 축약하는 방법
// 함수 생성 후 그 안에 실행문을 담고
// 이벤트 안에서 사용할 수 있고 코드 작성

for (let i = 0; i < tab.length; i++) {
    tab.eq(i).on('click', function() {
        tabChange(i);
    });
}

function tabChange(i) {
    tab.removeClass('orange');
    tab.eq(i).addClass('orange');
    content.removeClass('show');
    content.eq(i).addClass('show');
}


// for (let i = 0; i < tab.length; i++) {
//     tab.eq(i).on('click', function() {
//         tab.removeClass('orange');
//         tab.eq(i).addClass('orange');
//         content.removeClass('show');
//         content.eq(i).addClass('show');
//     });
// }

// for문에 let으로 한 이유는 변수의 범위 때문

// tab.eq(0).on('click', function() {
//     tab.removeClass('orange');
//     tab.eq(0).addClass('orange');
//     tab.removeClass('show');
//     tab.eq(0).addClass('show');
// });

// tab.eq(1).on('click', function() {
//     tab.removeClass('orange');
//     tab.eq(1).addClass('orange');
//     tab.removeClass('show');
//     tab.eq(1).addClass('show');
// });

// tab.eq(2).on('click', function() {
//     tab.removeClass('orange');
//     tab.eq(2).addClass('orange');
//     tab.removeClass('show');
//     tab.eq(2).addClass('show');
// });

// 클래스명이 tab-button이 3개가 있기 때문에
// 내가 찾을 값을 지정해 줘야 합니다.
// selector뒤에 .eq(내가 찾고 싶은 셀렉터 위치)
// 이렇게 가져오면 됩니다.