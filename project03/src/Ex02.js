import React from 'react'
import picSrc from './img/가오나시.jpg'
import LikeList from './components/Ex02LikeList'

const Ex02 = () => {

/* React에서 내부 이미지 경로 지정하는 방법

1) src 폴더에서 이미지를 import 하기
    - import 이미지 변수 from '경로'
    -<img src={이미지변수}/>

2) public 폴더 내에 이미지를 저장하고 접근하기
    - public - img 폴더를 만든 후 파일을 보관
    - 이 떄, 별도로 import는 필요하지 않다.
        why? public 폴더는 서버와 계속해서 통신 중

*/
  return (
    <div>
      <img src={picSrc} width='150px'></img>
      <LikeList/>
    </div>
  )
}

export default Ex02