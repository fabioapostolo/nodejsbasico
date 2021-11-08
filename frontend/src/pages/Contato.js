import React from 'react';
import {ContactSocial, Title, Areas} from '../styles';
import SocialNetworkSection from '../components/socialNetworkSection';
import ContatoForm from '../components/contatoForm';

const Contato = () => {
    return(
        <ContactSocial>
          <Title>
             <h2> Entre em contato comigo :) </h2>
          </Title>
         <Areas>
           <ContatoForm />
           <SocialNetworkSection />  
         </Areas>             
        </ContactSocial>
    )
}

export default Contato;