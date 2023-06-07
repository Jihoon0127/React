import React from 'react'

const Ex03Main = () => {
const{setisDrk, isDark} = useContext(ThemeContext)
const toggleTheme=() =>{
  setIsDark(!isDark)
 }
  return (
    <div style ={{
      backgroundColor: isDark ? "black" : "white",
      color : isDark ? "white" : "black"
    }}>
      <br/>
        <button
        onClick = {toggleTheme}>다크모드</button>
    </div>
  )
}

export default Ex03Mint