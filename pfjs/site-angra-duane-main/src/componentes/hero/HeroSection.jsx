import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { FaWhatsapp } from 'react-icons/fa';

import logoImg from '../../images/Logo.png';
import videoBg from '../../images/VideoHero.mp4'; 

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Serviços', href: '#oque-e'},
  { name: 'Benefícios', href: '#benefícios'},
  { name: 'Quem sou', href: '#autoridade'},
  { name: 'Depoimentos', href: '#depoimentos'},
  { name: 'Dúvidas', href: '#duvidas'},
  { name: 'Formulário', href: '#formulario'},
];

function HeroSection() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const monitorarRolagem = () => {
      if (window.scrollY > 50) {
        setRolou(true);
      } else {
        setRolou(false);
      }
    };

    window.addEventListener('scroll', monitorarRolagem);
    return () => window.removeEventListener('scroll', monitorarRolagem);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMenuAberto(false);
    const targetId = href.replace('#', '');
    const elemento = document.getElementById(targetId);
    if (elemento) {
      const targetPosition = elemento.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTimestamp = null;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animationStep = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const timeElapsed = timestamp - startTimestamp;
        window.scrollTo(0, easeInOutQuad(timeElapsed, startPosition, distance, duration));
        if (timeElapsed < duration) {
          window.requestAnimationFrame(animationStep);
        } else {
          window.scrollTo(0, targetPosition);
          window.history.pushState(null, null, href);
        }
      };
      window.requestAnimationFrame(animationStep);
    }
  };

  return (
    <div className={styles.divSecHero} id="home">
      
      <video autoPlay loop muted playsInline src={videoBg} className={styles.videoBg} />

      <header className={`${styles.headerHero} ${rolou ? styles.rolou : ''}`}>
        <div className={styles.logoHero}>
          <img src={logoImg} alt="Logotipo" />
        </div>
        
        <div className={styles.navContainerDireita}>
          <nav className={styles.navMenuHero}>
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
                className={styles.navLinkHero}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className={styles.wrapperBotaoMenu}>
            <button 
              className={styles.btnGradeMenu} 
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label="Abrir menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
          </div>

          <div className={`${styles.menuSuspenso} ${menuAberto ? styles.aberto : ''}`}>
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
                className={styles.itemMenuSuspenso}
              >
                <span className={styles.iconeItemMenu}>{item.icone}</span>
                <span className={styles.nomeItemMenu}>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className={styles.corpoHero}>
        <h1>
          <strong>TRANSFORME</strong> a sua energia.<br />
          <strong>EQUILIBRE</strong> o seu corpo.<br />
          <strong>ACALME</strong> a sua mente.
        </h1>
      </main>

      <footer className={styles.footerHero}>
        <a 
          href="#formulario" 
          onClick={(e) => handleScroll(e, '#formulario')}
          className={styles.btnHero} 
          translate="no"
        >
          Agendar Sessão
        </a>
      </footer>
    </div>
  );
}

export default HeroSection;