import React from 'react'
import { styled } from 'styled-components'

function Contact() {
  const discuss = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam neque ipsum corrupti dolores, facere numquam voluptate aspernatur sit perferendis qui nisi modi! Recusandae deserunt consequatur voluptatibus alias repellendus nobis eligendi.`
  return (
    <Wrapper>
      <div id="contact">
        <h1 className='title'>Contact Me</h1>
        <h2 className='topic'>Have any project?</h2>
        <p className='exp'>{discuss}</p>
        <button>Let Chat</button>
      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.div `
width: 100%;
height: 400px;
background-color: #F0F8FF;
#contact {
  max-width: 1440px;
  height: 100%;
  display: flex;
  padding: 0px 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0% auto;
  h1 {
    margin-bottom: 50px;
  }
  h2 {
    margin-bottom: 20px;
    font-weight: 400;
  }
  p {
    margin-bottom: 20px;
    font-size: 20px;
  }
  button {
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: whitesmoke;
    font-size: 25px;
    transition: 0.5s all ease;
    background-color: purple;
  }
  button:hover {
    color: purple;
    transition: 0.5s all ease;
    border: 3px solid purple;
    background-color: transparent;
  }
}
@media (max-width: 1023px) {
height: auto;
#contact {
  width: 100%;
  padding: 30px 100px;
  margin: 0%;
  h1 {
    margin-bottom: 40px;
  }
}
}
@media (max-width: 768px) {
  #contact {
    padding: 30px;
  }
  }
`

export default Contact
