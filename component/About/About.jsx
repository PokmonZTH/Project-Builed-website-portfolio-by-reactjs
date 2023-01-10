import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FaSchool } from 'react-icons/fa'
import { AiFillFolder } from 'react-icons/ai'


const About = () => {
  return (

    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
            <article className='about__card'>
            <a href="#experience"><BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Skill</small></a>
            </article>

            <article className='about__card'>
            <a href="#education"><FaSchool className='about__icon' />
              <h5>Education</h5>
              <small>School</small></a>
            </article>

            <article className='about__card'>
            <a href="#portfolio"><AiFillFolder className='about__icon' />
              <h5>Portfolio</h5>
              <small>Traning</small></a>
            </article>
          </div>

          <p>
            Hello! My name is Thonchai Pornchaikit and I enjoy creating everything is new about language computer.I enjoy creating everything is new about language computer.
            I'm interested software engineer, I want training for become software engineer at good, I training building web for portfolio and learn by yourself javascript html css.

          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>

  )
}

export default About
