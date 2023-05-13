import React from 'react'
import './About.css'
import { FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container about-wrapper'>
      <h2 className='text-center'>About</h2>

      <p className='text-center'>This project was built for practice purposes using Context API by React.</p>
      <a href="#">
        <button className='btn bg-dark repo text-center text-light ' ><span><FaGithub /></span> Visit Repo</button>

      </a>

    </div>
  )
}

export default About
