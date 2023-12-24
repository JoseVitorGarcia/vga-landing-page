"use client";

import React, { useState } from "react";

import Image from "next/image";
import styles from "./carrousel.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IImagesList {
  src: string;
  text: string;
}

interface IObjectivesList {
  name: string;
  src: string;
  list: string[];
}

const listObjectives: IObjectivesList[] = [
  {
    name: "Direito do Trabalho",
    src: "/img/carrossel/direitoTrabalhador.jpg",
    list: [
      "Reclamatória Trabalhista",
      "Defesa Trabalhista",
      "Ações De Acidente Do Trabalho",
      "Preventiva Trabalhista",
    ],
  },
  {
    name: "Direito Previdenciário",
    src: "/img/carrossel/direitoPrevidenciario.jpg",
    list: [
      "Análise e projeção de valores de benefícios de aposentadoria",
      "Planejamento previdenciário visando o melhor benefício ao cliente",
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria especial",
      "Aposentadoria por idade",
      "Aposentadoria rural",
      "Aposentadoria por invalidez",
      "Revisões de benefícios",
      "Auxílio-doença",
      "Auxílio acidente",
      "Auxílio maternidade",
      "Pensão por morte",
    ],
  },
  {
    name: "Direito Civil",
    src: "/img/carrossel/direitoCivil.jpg",
    list: [
      "Assessoramento e elaboração de Contratos e pareceres",
      "Elaboração de Contratos e Assessoria Imobiliária",
      "Acidentes de trânsito",
      "Inventários e Doações",
      "Usucapião",
      "Regularização de Imóveis",
      "Mediação e Negociação",
      "Indenizações, Danos Físicos, Materiais, Morais e Estéticos",
      "Registros de marcas e Patentes",
      "Partilha de bens",
      "Divórcio",
      "Guarda dos filhos",
      "Pensão alimentícia",
      "Adoção",
      "Reconhecimento e Dissolução de União Estável",
      "Testamentos",
    ],
  },
  {
    name: "CDC - Direito do Consumidor",
    src: "/img/carrossel/direitoConsumidor.jpg",
    list: [
      "Ações indenizatórias de dano material e moral",
      "Inscrições indevidas nos órgãos de restrição ao crédito",
      "Devolução e/ou cancelamento de compra/venda de produto defeituoso",
      "Falha na prestação de serviços",
      "Defesa de cobranças abusivas",
      "Outras demandas de interesse do Consumidor",
    ],
  },
];

export default function Carrousel() {
  return (
    <div className={styles.carrouselWrapper}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        width={700}
        showStatus={false}
      >
        {listObjectives.map((obj, index) => (
          <div className={styles.carrosselModal} key={index}>
          
            <Image
              src={obj.src}
              alt={obj.name}
              width={120}
              height={160}
              style={{ objectFit: "cover", marginBottom:'30px', borderRadius:'10px', border:'2px solid black' }}
            />
              <h1>{obj.name}</h1>
            <ul>
              {obj.list.map((item: string, index: number) => (
                <li key={index} style={{textAlign:'justify'}}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
