import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'

export const Nav = () => {
  const [active, setActive] = useState(['active', null, null, null, null])

  const handleActive = (idx) => {
    setActive(
      active.map((curr, key) => {
        return key === idx ? 'active' : null
      })
    )
    console.log(active)
  }

  return (
    <nav>
      <a
        href="#"
        className={active[0]}
        onClick={() => {
          handleActive(0)
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active[1]}
        onClick={() => {
          handleActive(1)
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active[2]}
        onClick={() => {
          handleActive(2)
        }}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        className={active[4]}
        onClick={() => {
          handleActive(4)
        }}
      >
        <BiMessageDetail />
      </a>
    </nav>
  )
}
