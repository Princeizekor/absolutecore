import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

function Contact() {
    return (
    <Wrapper>
      <div id="footer">
        <h1>Absolute Core</h1>
        <h2>osascore@gmail.com</h2>
        <h3>12 Wale Adeliyi street, Ewupe, Sango
Ota, Ogun State.</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
width: 100%;
height: 550px;
background-color: #0a0a0a;
#footer {
  position: relative;
  max-width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  // justify-content: center;
  color: whitesmoke;
  h1 {
    margin-bottom: 10px;
  }
  h2 {
    font-size: 50px;
    line-height: 120px;
    font-weight: 300;
  }
}
@media (max-width: 540px) {
height: auto;
#footer {
  width: 100%;
  padding: 100px;
  h1 {
    margin-bottom: 10px;
  }
  h2 {
    font-size: 30px;
    line-height: 100px;
  }
}
} 
`
export default Contact
