import React from 'react'

const MemberBox = ({name,gender,sing}) => {
  return (
    <div>
    <div className="a">
        <p>{name}</p>
        <p>{gender}</p>
        <p>{sing}</p>
            </div>
            </div>
  )
}

export default MemberBox