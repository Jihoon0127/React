// rafce + Enter
import React from 'react'
import MemberBox from './components/MemberBox'
import './AppExample.css';


const AppExample = () => {

    /* 여러분의 팀원을 소개해주세요!
    이름 : 홍길동
    성별 : 여성 / 남성
    좋아하는 노래 : 

    단, Componet와 porps의 개념을 이용할 것
    */

  return (
    <div>
        <MemberBox name="신지훈" gender="남자" sing="빅뱅 - cafe"></MemberBox>
        <MemberBox name="이지희" gender="남자" sing="뉴진스 - ditto"></MemberBox>
        <MemberBox name="윤영현" gender="남자" sing="윤하 - 사건의 지평선"></MemberBox>
        <MemberBox name="김다운" gender="남자" sing="아이유 - 새신발"></MemberBox>
    </div>
  )
}

export default AppExample