function AppExample(){
    /*
    (1) 사용자에게 이름을 입력받아 준다 - prompt
    (2) 현재 날짜를 가지고 올 것
    (3) 조건에 따라 계절을 분류
        - 3~5월 : 봄
        - 6~8월 : 여름
        - 9~11월 : 가을
        - 12 ~ 2월 : 겨울
    (4)
    2023-05-15 => h1태그
    수평선
    XXX님 지금은 봄입니다. 좋은 하루 보내세요! :)
*/
    // (2) 현재 날짜 가지고 오기
    let today = new Date()
    console.log('today :', today);

    // a. 연도-월-일 .toLocaleDateString();
    let date = today.toLocaleDateString()
    console.log('date :', date );
    
    // b. 현재 몇월? .getMonth()
    let month = today.getMonth()+1
    console.log('month : ', month);

    let text= ""

    if(month ==3 || month ==4 || month ==5){
       text = "봄"
    }else if (month ==6 || month ==7 || month ==8){
      text ="여름"
    }else if (month ==9|| month ==10|| month ==11){
      text ="가을"
    }else{
        text="겨울"
    }
    console.log(`신지훈님 지금은 ${text}입니다. 좋은 하루 보내세요!`);

    return (
    <div>
        <h1>{date}</h1>
        <hr></hr>
        <p>신지훈님 지금은 {text}입니다. 좋은 하루 보내세요!</p>
        </div>
    )
}

export default AppExample