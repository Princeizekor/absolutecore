import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

function Footer() {
const ContactData = [
  {
    id: 1,
    name: 'WHATSAPP ME',
    detail: 'Click to send me a Whatsapp message',
    link: '',
    img: '/images/whatsapp-logo-png-hd-2.png'
  },
  {
    id: 2,
    name: 'EMAIL ME AT',
    detail: 'Click to Email me',
    link: 'mailto:osascore@gmail.com, izekor.lo@gmail.com',
    img: '/images/carbon_email.png'
  },
  {
    id: 3,
    name: 'CALL ME AT',
    detail: 'Phone: +2347038623591',
    link: 'Tel:+2347038623591',
    img: '/images/ic_round-call.png'
  }
]
const icons = [
  {
    id: 1,
    image: '/images/bx_bxl-facebook.png',
    link: ''
  },
  {
    id: 2,
    image: '/images/cib_codesandbox.png',
    link: ''
  },
  {
    id: 3,
    image: '/images/ant-design_github-outlined.png',
    link: ''
  },
  {
    id: 4,
    image: '/images/ant-design_twitter-outlined.png',
    link: ''
  },
  {
    id: 5,
    image: '/images/ant-design_behance-outlined.png',
    link: ''
  }
]
const discuss = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam neque ipsum corrupti dolores, facere numquam voluptate aspernatur sit perferendis qui nisi modi! Recusandae deserunt consequatur voluptatibus alias repellendus nobis eligendi.`
return (
  <Wrapper>
    <h1>Contact</h1>
    <h2 className="contact-title">I'd Love To Hear From You</h2>
    <p className="discuss">I'm always open to discussing web development and programming in general.</p>
    <div className="hire">
      {
        ContactData.map((item, i) =>
          <div className="contact-detail" key={i}>
            <a href={item.link} target="_blank">
              <img src={item.img} alt="whatsapp image" />
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </a>
          </div>
        )
      }
    </div>
    <div className="links">
      <div className="icons-footer">
        <div className="name">
        Absolutecore &copy; 2023 All rights reserved
        </div>
        <div className="handles">
        {
          icons.map((item) =>
            <Link to={item.link} target="_blank">
              <img src={item.image} alt="Facebook icon" />
            </Link>
          )
        }
        </div>
      </div>
    </div>
    
  </Wrapper>
)
}

const Wrapper = styled.div `
color: rgb(128, 29, 221);
text-align: center;
padding: 40px 0px 0px 0px;
max-width: 1440px;
margin: 0% auto;
height: auto;
background-color: black;
h1 {
margin: 0%;
font-size: 40px;
font-weight: 700;
}

.contact-title {
font-size: 40px;
font-weight: 400;
color: whitesmoke;
}
.discuss {
color: silver;
}
.hire {
width: 100%;
display: flex;
align-items: center;
padding: 70px;
justify-content: space-between;
}

.contact-detail a {
text-decoration: none;
color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.contact-detail p {
margin-top: 2%;
}

.contact-detail img {
margin-bottom: 2%;
width: 50px;
height: 50px;
}

.links {
width: 100%;
justify-content: space-between;
display: flex;
padding: 70px;
}

.name {
  color: rgb(133, 132, 132);
}

.handles {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.icons-footer {
display: flex;
justify-content: space-between;
width: 100%;
}

@media (max-width: 1023px) {
    width: 100%;
    margin: 0%;

.hire {
    width: 100%;
    padding: 50px;
}

.links {
    padding: 50px;
}
}

@media (max-width: 767px) {
    padding: 20px 0px 0px 0px;

.contact-title {
    font-size: 20px;
}

.hire {
    width: 100%;
    padding: 30px;
    flex-direction: column;
}

.contact-detail {
    margin-top: 35px;
}
.icons-footer {
  flex-direction: column;
  }
  .handles {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;
  }
}
`

export default Footer
