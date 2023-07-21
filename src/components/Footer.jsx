import React from 'react'
import { styled } from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <div id="footer">
        <h1>Absolute Core</h1>
        <h2>osascore@gmail.com</h2>
        <h3>This is the address box content</h3>
        <p>Absolutecore ©2023 All rights reserved</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
width: 100%;
height: 550px;
background-color: #080827;
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
  p {
    position: absolute;
    bottom: 100px;
    left: 100px;
    color: rgb(133, 132, 132);
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
  p {
    bottom: 30px;
    left: auto;
  }
}
} 
`

export default Footer
