"use client";

import React, { useState } from "react";

import Carrousel from "@/components/Carrousel";
import Contacts from "@/components/Contacts";
import styles from "./page.module.scss";
import Image from "next/image";

import { useMediaQuery } from "react-responsive";

interface IObjectivesList {
  name: string;
  message?: string;
  list: string[];
}

interface IOwnersList {
  name: string;
  about: string;
  oab: string;
  url: string;
}

export default function Home() {

  const isMobile = useMediaQuery({maxWidth: 794  });

 
  const ownersList: IOwnersList[] = [
    {
      name: "André Gonçalves Garcia",
      about: "Graduado em direito pelo Centro Universitário Cesuca.",
      oab: "133459",
      url: "[],",
    },
    {
      name: "Gilmar Veronezi Junior",
      about: "Graduado em direito pelo Centro Universitário Cesuca.",
      oab: "52e272",
      url: "",
    },
  ];

  const listObjectives: IObjectivesList[] = [
    {
      name: "Missão",
      message:
        "Buscamos oportunizar serviços jurídicos aos clientes, com segurança, dedicação e comprometimento na defesa de seus direitos",
      list: [],
    },
    {
      name: "Visão",
      message:
        "Ser um escritório jurídico referência na prestação de serviços jurídicos, que busca a evolução e a sustentabilidade, consolidando a confiança e reconhecimento dos clientes.",
      list: [],
    },
    {
      name: "Valores",
      message: "",
      list: [
        "Integridade e Ética",
        "Atendimento personalizado ao clientes",
        "Comprometimento",
        "Respeito",
        " Profissionalismo",
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <nav className={`${styles.wrapperHeaderAndFooter} ${styles.header}`}>
        <div
          className={
            isMobile ? styles.headerContainerMobile : styles.headerContainer
          }
        >
          <Image
            src="/img/logo-branco.png"
            alt="logo-vga"
            width={80}
            height={80}
            style={{ objectFit: "cover" }}
          />
          {!isMobile && (
            <div className={styles.navButtonsDiv}>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <a href="#start">Início</a>
                </li>
                <li className={styles.dropdown}>
                  <a href="#">A empresa</a>
                  <div className={styles.dropdown_content}>
                    <a href="#objectives">Sobre nós</a>
                    <a href="#aboutUs">A equipe</a>
                  </div>
                </li>

                <li className={styles.li}>
                  <a href="#gallery">Áreas de atuação</a>
                </li>
                <li className={styles.li}>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className={styles.content}>
        <section
          id="start"
          className={`${isMobile ? styles.startMobile : styles.start}`}
        >
          <div className={styles.initialContainer}>
            <div className={styles.startTextContainer}>
              <h1> Veronezi & Garcia </h1>
              <p>Assessoria Jurídica</p>
            </div>
          </div>
        </section>
        <section id="objectives" className={styles.objectives}>
          <div className={styles.historyContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Sobre nós</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  width: "100vw",
                  height: "100vh",
                  gap: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className={styles.startTextContainer}>
                  <h1>{listObjectives[0].name}</h1>
                  <ul>
                    <li>{listObjectives[0].message}</li>
                  </ul>
                </div>
                <div className={styles.startTextContainer}>
                  <h1>{listObjectives[1].name}</h1>
                  <ul>
                    <li>{listObjectives[1].message}</li>
                  </ul>
                </div>
                <div className={styles.startTextContainer}>
                  <h1>{listObjectives[2].name}</h1>
                  <ul>
                    {listObjectives[2].list.map(
                      (item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="aboutUs" className={styles.aboutUs}>
          <div className={styles.aboutUsContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>A equipe</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "100%",
                    gap: "50px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.aboutUsTextContainer}>
                    <Image
                      src="/img/Andre.jpeg"
                      alt="image"
                      width={200}
                      height={200}
                      style={{ borderRadius: "10px" }}
                    />

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h2>{ownersList[0].name}</h2>
                      <ul>
                        <p>{ownersList[0].about}</p>
                        <p>{`OAB/RS: ${ownersList[0].oab}`}</p>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.aboutUsTextContainer}>
                    <Image
                      src="/img/Gilmar.jpeg"
                      alt="image"
                      width={200}
                      height={200}
                      style={{ borderRadius: "10px" }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h2>{ownersList[1].name}</h2>
                      <ul>
                        <p>{ownersList[1].about}</p>
                        <p>{`OAB/RS: ${ownersList[1].oab}`}</p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className={styles.gallery}>
          <Carrousel />
        </section>
        <section id="contact" className={styles.contact}>
          <Contacts />
        </section>
      </div>
      <footer className={`${styles.wrapperHeaderAndFooter} ${styles.footer}`}>
        <p>Copyright © VGA 2023</p>
      </footer>
    </div>
  );
}
