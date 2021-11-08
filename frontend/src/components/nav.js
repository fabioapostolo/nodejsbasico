import React from 'react';
import {StyledNav} from '../styles';
import {Link} from 'react-router-dom';

const Nav = () => {    
    return(
        <StyledNav>
            <h1>Fábio Marcelo Apóstolo</h1>
            <ul>
                <li><Link to='/'>Sobre</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
            </ul>
        </StyledNav>
    )
}

export default Nav;