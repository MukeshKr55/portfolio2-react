import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { CiBitcoin } from 'react-icons/ci'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mukesh Kumar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="header__socials">
          <a href="https://www.linkedin.com/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="#demo" target="_blank">
            <FaGithub />
          </a>
          <a href="#demo" target="_blank">
            <CiBitcoin />
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}
