import React from 'react'
import { data } from '../Data'
import { styled } from 'styled-components'

function Education() {
  return (
    <Wrapper id='education'>
      <h1>Education</h1>
      {/* <h2 className="credentals">My Certifications</h2> */}
      {
        data?.map((item, i) =>
          <div key={i} className='edu'>
            <p className='education'>School: <span className='edu-span'>{item.school}</span></p>
            <p className='education'>Degree: <span className='edu-span'>{item.degree}</span></p>
            <p className='education'>Graduation: <span className='edu-span'>{item.year}</span></p>
          </div>
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
    padding: 80px;
    margin: 0% auto;
    background: black;
    color: rgb(128, 29, 221);

h1 {
    margin: 0%;
    font-size: 40px;
    font-weight: 700;
}

.credentals {
    color: whitesmoke;
    font-size: 40px;
    font-weight: bold;
}

.edu {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5%;
}

.education {
    color: whitesmoke;
    font-size: 20px;
    font-weight: bold;
}
.edu-span {
    color: silver;
    font-size: 17px;
    font-weight: bold;
}

.portfolio-cert {
    background: rgb(128, 29, 221);
    margin-top: 30px;
    width: 160px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
}
.portfolio-cert a {
    text-decoration: none;
    font-weight: bold;
    color: whitesmoke;
}

@media screen and (max-width: 540px) {
        padding: 20px;
        margin: 0%;
    
    .credentals {
        font-size: 25px;
    }
    
    .edu {
        margin-top: 4%;
    }
    
    .portfolio-cert {
        margin-top: 20px;
        width: 100%;
    }
}
`

export default Education
