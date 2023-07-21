import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Navbar() {
  return (
    <Wrapper>
      <h1><Link to='/'>OSAS</Link></h1>
      <ul>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><Link to='#'>Experience</Link></li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div `
  position: sticky;
  top: 0%;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  background-color: silver;
  z-index: 1000000;

h1 a{
  text-decoration: none;
  color: purple;
}

ul {
  display: flex;
  align-items: center;
  gap: 50px;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: purple;
      font-size: 20px;
    }
  }
}
@media (max-width: 768px) {
  ul {
    position: absolute;
    top: 80px;
    width: 100%;
    height: 20vh;
    left: 0%;
    align-items: flex-start;
    background-color: whitesmoke;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: purple;
        font-size: 20px;
      }
    }
  }
}
`

export default Navbar
