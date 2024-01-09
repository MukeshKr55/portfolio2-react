import React from 'react'
import '../portfolio/portfolio.css'
import { data } from './data.js'

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Personal Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, img, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={img} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
