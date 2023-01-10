import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>
          <h3>Project: Program calculate physics</h3>
        <div className="portfolio__item-cta">
        <a href='https://github.com/PokmonZTH/Project-' className='btn' target='_blank' >Github</a>

          
        </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt='' />
          </div>
          <h3>Project: Builed website portfolio by reactjs</h3>
        <div className="portfolio__item-cta">
        <a href='https://github.com/PokmonZTH/Project-Builed-website-portfolio-by-reactjs' className='btn' target='_blank' >Github</a>
          
        </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt='' />
          </div>
          <h3>Project: Program Face Recognition by JavaScript</h3>
        <div className="portfolio__item-cta">
        <a href='https://github.com/PokmonZTH/Program-Face-Recognition-by-JavaScript' className='btn' target='_blank' >Github</a>
          
        </div>
        </article>



      </div>
    </section>
  )
}

export default Portfolio
