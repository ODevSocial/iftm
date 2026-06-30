import React from 'react';
import styles from './Footer.module.css';
import logoImg from '../../images/Logo.png';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>

          <div className={styles.footerContact}>
            <h3 className={styles.footerHeading}>Fale Comigo!</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <a href="https://wa.me/5534988491004" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.footerIcon}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span>+55 (34) 98849-1004</span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <a href="https://instagram.com/terapeutaangra.duane" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.footerIcon}>
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@terapeutaangra.duane</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerHours}>
            <h3 className={styles.footerHeading}>Horário de Atendimento:</h3>
            <p className={styles.hoursText}>Segunda a Sexta, das 09h às 18h.</p>
          </div>

          <div className={styles.footerLogoFull}>
            <img src={logoImg} alt="Angra Duane Logo" className={styles.footerLogo} />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;