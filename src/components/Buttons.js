import React from 'react'
import 'C:/Users/shiva/OneDrive/Desktop/api_example/project2/my-app2/src/componentsCSS/Buttons.css'
import Btn from "./Btn"

const Buttons = ({value,setValue}) => {
  return (
    <form  onSubmit={(e) => e.preventDefault()}>
      <div className='container'>
        <Btn 
          buttonText = "users"
          value = {value}
          setValue = {setValue}
        />
        <Btn 
          buttonText = "posts"
          value = {value}
          setValue = {setValue}
        />
        <Btn 
          buttonText = "comments"
          value = {value}
          setValue = {setValue}
        />
      </div>
    </form>
  )
}

export default Buttons