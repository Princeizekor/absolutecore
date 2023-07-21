import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Intro() {
  return (
    <Wrapper>
      <div className="wrapper-intro">
        <div className="greetings">
          <h1>Hi, I am Izekor Osas Lucky, Electrical/Automation engineer </h1>
          <button>Email me</button>
          <div><Link>Linkdln</Link>/<Link>Facebook</Link>/<Link>Twitter</Link></div>
        </div>
        <div className='profile-image'>
          <img src="/images/istockphoto-1149054436-612x612.jpg" alt="profie-image" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 620px;
    background-color: silver;
    .wrapper-intro {
      max-width: 1440px;
      height: 100%;
      margin: 0% auto;
      display: flex;
      padding: 50px 0px 50px 50px;
      align-items: center;
    }
    .greetings {
      position: relative;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
      h1 {
        font-size: 50px;
        margin-bottom: 30px;
      }
      button {
        width: 150px;
        height: 50px;
        border: none;
        outline: none;
        background-color: purple;
        font-size: 15px;
        color: white;
      }
      div {
        position: absolute;
        bottom: 50px;
      }
    }
    .profile-image {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
      img {
        width: 550px;
        height: 550px;
        border-radius: 50px 0px 0px 50px;
      }
    }
    @media (max-width: 1023px) {
      width: 100%;
    height: 620px;
    background-color: silver;
    .wrapper-intro {
      width: 100%;
      margin: 0%;
    }
    .greetings {
      h1 {
        font-size: 40px;
      }
    }
    .profile-image {
      img {
        width: 400px;
        height: 400px;
      }
    }
    }
    @media (max-width: 768px) {
    height: 620px;
    .wrapper-intro {
      padding: 30px;
      flex-direction: column-reverse;
    }
    .greetings {
      width: 100%;
      height: 200px;
      flex-direction: column;
      h1 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      div {
        bottom: 0px;
      }
    }
    .profile-image {
      width: 100%;
      height: 350px;
      display: flex;
      justify-content: center;
      img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
      }
    }
    }
`

export default Intro
