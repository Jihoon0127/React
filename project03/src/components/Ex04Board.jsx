import React from 'react'

const Ex04Board = ({path,name,score,dice}) => {

    // 이미지 경로 가져오기! (public폴더 이용할 때만!)
    let mypath = path+'1.png'

    return (
    <div className='board-item'>
        <h3>{name}</h3>
        <p>{dice}</p>
        <img src={path}></img>
        <h4>현재 점수는?</h4>
        <h3>{score}</h3>

    </div>
  )
}

export default Ex04Board