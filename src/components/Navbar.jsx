import React, { useState } from 'react'
import { styled } from 'styled-components'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <a href="#">
        <h1>O<span className="logo">SAS.</span></h1>
      </a>
      <ul className="list" style={open !== false ? { left: 0 } : { left: '-100%' }}>
        <li onClick={() => setOpen(!open)}><a href="#about" >About</a></li>
        <li onClick={() => setOpen(!open)}><a href="#education" >Education</a></li>
        <li onClick={() => setOpen(!open)}><a href="#" >Experience</a></li>
        <li onClick={() => setOpen(!open)}><a href="#contact" >Contact</a></li>
      </ul>
      <img onClick={() => setOpen(!open)} src={open !== false ? "./images/icons8-delete-30.png" : "./images/hamburger.png"} alt="open menu" className="hamper" />
    </Wrapper>
  )
}

const Wrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px;
  position: sticky;
  top: 0%;
  background: black;
  z-index: 1;
a {
  text-decoration: none;
}
.none {
  display: none;
  justify-content: space-between;
}
.block {
  display: flex;
}
.navbar a {
  text-decoration: none;
}
h1 {
  margin-top: 0%;
  color: white;
  font-size: 30px;
}
.logo {
  color: rgb(128, 29, 221);
}
.list {
  display: flex;
}
.list li {
  padding: 0px 50px 10px 0px;
  list-style-type: none;
}
.list li a:focus {
  color: rgb(128, 29, 221);
  border-bottom: 2px solid rgb(128, 29, 221);
}
.list li a {
  text-decoration: none;
  color: whitesmoke;
}

.hamper {
  display: none;
}

@media screen and (max-width: 767px) {

  h1 {
      font-size: 30px;
  }

  .list li {
      padding: 0px 10px;
  }

  .list li a {
      font-size: 18px;
  }
}

@media screen and (max-width: 540px) {
      padding: 20px;

  .list {
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 80px;
      left: 0%;
      right: 0%;
      bottom: 0%;
      background-color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
  }

  .list li {
      font-size: 50px;
      font-weight: 900;
      letter-spacing: 10px;
      padding-right: 0;
      list-style-type: none;
  }
  .list li a {
      text-decoration: none;
      color: whitesmoke;
  }

  .hamper,
  .closehamper {
      display: block;
      position: absolute;
      right: 5%;
  }
}
`

export default Navbar
