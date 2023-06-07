import React, { useRef } from 'react'

const Ex07 = () => {

    /* 
        1) 사용자가 input 태그 안에 입력한 값을 가져오기
        2) 그 값에 따라서 사진의 src 속성을 변경하기
    */


    const textRef = useRef();
    const imgRef = useRef();
    const chImg = () => {
        console.log('change Img Function', textRef.current);
        textRef.current.value == '가오나시'
            ? imgRef.current.src = "https://i.namu.wiki/i/V4uEw5MZl2TeJ9pYWnQNexAb4-dupWjGLqHcPJgQx82Oh20MkBCXJBc1_B1kd8-h71eW8Omt-TXXvd5kh8BiLA.webp"
            : imgRef.current.src = "https://i.namu.wiki/i/V4uEw5MZl2TeJ9pYWnQNexAb4-dupWjGLqHcPJgQx82Oh20MkBCXJBc1_B1kd8-h71eW8Omt-TXXvd5kh8BiLA.webp"
    
            textRef.current.value = ""
            textRef.current.focus()
    
        }


    return (
        <div>
            <div>
                <p>희망하는 사진이 있으신가요?</p>
                <input type='text' ref={textRef} />
                <button onClick={chImg}>변경!</button>
            </div>

            <div>
                <img
                src='https://www.anewsa.com/news_images/2019/06/14/mark/2019061416184311586375305d034a530be077.40685940.jpg'
                width='200px'
                ref={imgRef}
                ></img>


                {/* <img src="https://www.anewsa.com/news_images/2019/06/14/mark/2019061416184311586375305d034a530be077.40685940.jpg"
                    width='200px'
                    ref={imgRef}
                 /> */}

            </div>
        </div>
    )

}

export default Ex07