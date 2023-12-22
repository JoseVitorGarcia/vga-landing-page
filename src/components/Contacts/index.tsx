"use client"

import React from 'react';
import styles from './contacts.module.scss';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { useMediaQuery } from 'react-responsive';

export default function Contacts() {
  const isMobile = useMediaQuery({ query: '(max-width: 794px)' });

  const mail = 'veroneziegarciaadvogados@gmail.com';
  const instagram = 'veronezigarciaadvogados';
  const defaultMessage = `Olá,%20encontrei%20seu%20contato%20através%20do%20site%20da%20empresa%20Veronezi%20e%20Garcia%20-%20Assessoria%20Jurídica.%20Tenho%20interesse%20nos%20serviços%20da%20empresa,%20pode%20me%20ajudar?`;

  const contacts = [
    { name: 'André Gonçalves Garcia', phone: '51995438244' },
    { name: 'Gilmar Veronezi Junior', phone: '51980307351' },
  ];

  const handleInstagram = () => {
    window.open(`https://www.instagram.com/${instagram}`);
  };

  const handleMail = () => {
    window.open(`mailto:${mail}?subject=Assessoria%20Juridica%20V%&%G%&body=${defaultMessage}`);
  };

  const handleMessage = (phone: string) => {
    window.open(`https://web.whatsapp.com/send?phone=55${phone}&text=${defaultMessage}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Entre em Contato Conosco</h1>
      <div className={`${ isMobile ? styles.containerMobile : styles.container}`}>
        <div className={styles.whatsapp}>
          <div className={styles.mediasContainer}>
            {React.Children.toArray(
              contacts.map((contact) => (
                <button 
                  className={styles.socialMediaButton}
                  onClick={() => handleMessage(contact.phone)}
                >
                  <FaWhatsapp size={40} />
                  <div className={styles.buttonTexts}>
                    <h6 className={styles.contactName}>{contact.name}</h6>
                    <p className={styles.contactDescription}>Fale com {contact.name.split(' ')[0]} via WhatsApp</p>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.mediasContainer}>
            <div className={styles.mediasButtonContainer}>
              <button 
                className={styles.socialMediaButton}
                onClick={handleInstagram}  
              >
                <FaInstagram size={40} />
                <div className={styles.buttonTexts}>
                  <h6 className={styles.contactName}>@{instagram}</h6>
                  <p className={styles.contactDescription}>Visite nosso perfil no Instagram</p>
                </div>
              </button>
            </div>
            <div className={styles.mediasButtonContainer}>
              <button 
                className={styles.socialMediaButton}
                onClick={handleMail}
              >
                <FiMail size={40} />
                <div className={styles.buttonTexts}>
                  <h6 className={styles.contactName}>{mail}</h6>
                  <p className={styles.contactDescription}>Contate-nos através do e-mail</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};