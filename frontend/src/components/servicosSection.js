import React from 'react';
import styled from 'styled-components';
import ImgServico from '../imagens/servicos.png';
import {Imagem, ImgCard, Cards, Card, Servicos, DescServico} from '../styles';

//importando icons
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faLaptopCode, faTasks} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ServicosSection = () => {
    return(
       <Servicos>
           <ImgCard>
               <img src={ImgServico} />              
           </ImgCard>
           <DescServico>                       
               <Cards>
                 <Card>
                     <div className="icon">
                     <FontAwesomeIcon icon={faLaptopCode} color="white" size='4x' />
                       <h3>Portfolio</h3>
                     </div>                      
                  </Card>                  
                  <Card>
                     <div className="icon">
                     <FontAwesomeIcon icon={faTasks} color="white" size='4x' />
                       <h3>Gerenciamento: Sites/Marketplace</h3>
                     </div>                      
                  </Card>
                  <Card>
                     <div className="icon">
                     <FontAwesomeIcon icon={faGithubSquare} color="white" size='4x' />
                       <h3>GitHub</h3>
                     </div>                     
                  </Card>                  
               </Cards>
           </DescServico>
       </Servicos>
    )
}

export default ServicosSection;