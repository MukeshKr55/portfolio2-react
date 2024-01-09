import React from 'react'
import '../experience/experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>FrontEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__backend">
          <h3>BackEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
