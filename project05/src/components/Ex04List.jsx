import React, { useContext } from 'react'
import { TodoContext } from '../context/Ex04TodoContext'
import Ex04ListItem from './Ex04ListItem';

const Ex04List = () => {

    const {todos} = useContext(TodoContext);

  return (
    <div>
        {todos.map((item, idx) =>
            
        <Ex04ListItem 
        todo={item} index={idx} key={item.text +idx}/>
        )}
    </div>
  )
}

export default Ex04List