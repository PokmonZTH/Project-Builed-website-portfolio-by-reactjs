import React from 'react'
import "./education.css"
import {BiCheck} from 'react-icons/bi'

const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>

      <div className="container services__container">

      <article className='service'>
          <div className="service__head">
            <h3>Middle School</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Phramaemareephrakanong school </p>
            </li>
            <p>Secondary grade 1 to  3 with GPA 3.56</p>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>High Shcool</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sirirattanathorn school</p>
            </li>
            <p> High school grade  4 to  6 with GPA 3.58</p>
          </ul>
        </article>



      </div>

    </section>
  )
}

export default Education
