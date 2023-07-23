import React from 'react'
import { styled } from 'styled-components'

function About() {
  const resume = './cv/Lucky Izekor cv.pdf'
  const img = './images/IMG-20230722-WA0020.jpg'
  const about = `I am a professional in Safety, Electrical designs and installation, process automation, instrumentation, and mechanical works. With over ten years (vocational & postgraduate) of verifiable & provable experience as a contractor, process engineer, process technician and maintenance specialist. Committed to improving quality and performance at individual and social levels.`
  return (
    <Wrapper>
          <div id='about'>
      <h1>About Me</h1>
      <div className='about-box'>
        <img src={img} alt="my profile image" className='profile-image' />
        <div className='profile-details'>
          <p>{about}</p>
          <div className="profile-buttons">
            {/* <button class="hire-button">
              <a href="#contact">HIRE ME</a>
            </button> */}
            <button className="cv-button">
              <a href={resume}>DOWNLOAD CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
width: 100%;
height: 650px;
background-color: #222121;
#about {
    color: rgb(128, 29, 221);
    max-width: 1440px;
    height: 100%;
    margin: 0% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
}

#about h1 {
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 700;
}

.about-box {
    width: 90%;
    height: 500px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: whitesmoke;
    // background: rgb(34, 33, 33);
    img {
        width: 400px;
        height: 85%;
        // object-fit: contain;
        border-radius: 15px;
    }
}

.profile-details {
    width: 55%;
    p {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
    }
}
.profile-buttons {
    width: 70%;
    display: flex;
    margin-top: 5%;
    justify-content: space-between;
}
.hire-button,
.cv-button {
    width: 150px;
    height: 50px;
    font-size: 15px;
    background: whitesmoke;
    border: 2px solid rgb(128, 29, 221);
    border-radius: 5px;
    transition: 1s all ease;
}
.hire-button:hover {
    background: rgb(128, 29, 221);
    color: whitesmoke;
    transition: 1s all ease;
}
.hire-button a,
.cv-button a {
    text-decoration: none;
    color: black;
}
.cv-button {
    background: rgb(128, 29, 221);
    border: 2px solid silver;
}
.cv-button a {
    color: whitesmoke;
}

@media (max-width: 1023px) {
#about {
    width: 100%;
    margin: 0%;
    display: flex;
    padding: 30px;
}

#about h1 {
    margin-bottom: 30px;
}

.about-box {
    width: 100%;
}

.profile-details {
    width: 55%;
}
}

@media (max-width: 768px) {
    height: auto;
    
    .about-box {
        height: auto;
        flex-direction: column;
        img {
            width: 80%;
        }
    }
    
    .profile-details {
        width: 100%;
        margin-top: 30px;
    }
}

@media screen and (max-width: 560px) {
    .about-box {
        text-align: center;
    }

    .profile-buttons {
        width: 100%;
        flex-direction: column;
        margin-top: 5%;
    }

    .hire-button,
    .cv-button {
        width: 100%;
        height: 40px;
        font-size: 12px;
    }

    .cv-button {
        margin-top: 20px;
    }
}

@media screen and (max-width: 400px) {
    .profile-image {
        border-radius: 15px;
    }
}
`

export default About
