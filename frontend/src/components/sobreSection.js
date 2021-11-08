import React from 'react';
import {Sobre, Descricao, Imagem} from '../styles';
import foto from '../imagens/perfil.jpg';


const SobreSection = () =>{
    return(
        <Sobre>
            <Descricao> 
            <h2>Fábio Marcelo Apóstolo</h2>
            <h2>Analista de Sistemas</h2>
            <p>
                Graduação:
                UNIRP – Processamento de Dados <br /><br />

                Graduação:
                CENTRO UNIVERSITÁRIO CLARETIANO – Análise e Desenvolvimento de Sistemas <br /><br />

                Pós-Graduação:
                Senac São Paulo – Mídias Interativas <br /><br />

                Especialização:
                Senac São Paulo – Especialização em Docência para o Ensino Técnico
            </p>

            <button>Contato</button>
            </Descricao>

            <Imagem> 
            <img src={foto} width="350" height="350" />
            </Imagem> 


        </Sobre>
    )
}

export default SobreSection;