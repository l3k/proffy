import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css'

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    async function loadInitial() {
      await api.get('connections').then(response => {
        const { total } = response.data

        setTotalConnections(total)
      })
    }
    
    loadInitial()    
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt=""/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt="" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={study} alt=""/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClasses} alt=""/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de { totalConnections } conexões já realizadas <img src={purpleHeart} alt=""/>
        </span>
      </div>
    </div>
  )
}
