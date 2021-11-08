import React from 'react';
import {faGithubSquare, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Network, Social} from '../styles';

const SocialNetworkSection = () => {
    return(
        <Network>
           <Social href="https://github.com/fabioapostolo" target="_blank">
           <FontAwesomeIcon icon={faGithubSquare} size="3x"/>
           <h3>GitHub</h3>
           </Social>
           <Social href="https://www.linkedin.com/in/fabio-marcelo-apostolo-0311a073/" target="_blank">
           <FontAwesomeIcon icon={faLinkedin} size="3x" />
           <h3>Linkedin</h3>
           </Social>
           <Social href="https://www.instagram.com/fabiomarceloap/" target="_blank">
           <FontAwesomeIcon icon={faInstagram} size="3x" />
           <h3>Instragram</h3>
           </Social>
           </Network>   
    )
}

export default SocialNetworkSection;