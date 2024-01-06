import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import SectionSalas from '../SectionSalas/SectionSalas';
import './Membros.css'


const Membros = () => {
  
  <div className='Equipe'>
        <Pessoa
          nome="João"
          cargo="Desenvolvedor Frontend"
          idade={28}
          descricao="João é apaixonado por criar interfaces incríveis e experiências de usuário intuitivas."
        />
        <Pessoa
          nome="Vitor"
          cargo="Desenvolvedor Backend"
          idade={32}
          descricao="Vitor é especialista em construir APIs robustas e escaláveis para suportar os serviços do backend."
        />
        <Pessoa
          nome="Thaif"
          cargo="Designer UX/UI"
          idade={25}
          descricao="Thaif combina sua habilidade artística com uma abordagem centrada no usuário para criar designs visualmente atraentes e funcionais."
        />
        <Pessoa
          nome="Jane"
          cargo="Analista de Dados"
          idade={30}
          descricao="Jane possui expertise em analisar dados complexos e extrair insights valiosos para a tomada de decisões."
        />
        <Pessoa
          nome="Duda"
          cargo="Engenheira de Software"
          idade={29}
          descricao="Duda é uma engenheira de software dedicada, focada em desenvolver soluções inovadoras e eficientes."
        />
        <Pessoa
          nome="Saulo"
          cargo="Analista de QA"
          idade={31}
          descricao="Saulo é responsável por garantir a qualidade do software, realizando testes rigorosos para identificar e corrigir possíveis problemas."
        />
      </div>
  


  return (
    <div className='Home'>
      <Navbar />
      <SectionSalas />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Membros