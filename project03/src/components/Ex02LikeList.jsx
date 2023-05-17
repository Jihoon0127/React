import React from 'react'
import {useState} from 'react';



const Ex02LikeList = () => {

const [num, setNum] = useState(0);
const [heart, setHeart] = useState('🤍');

const handleLike =()=>{
   
    if(num ==0){
        setNum(1);
        setHeart('❤');
    }else if(num==1){
        setNum(0)
        setHeart('♡');
    }
}


  return (
    <div>
        <span onClick={handleLike}>{heart}</span>{" "}
        <span>좋아요 {num}개</span>
        
    </div>
  )
}

export default Ex02LikeList