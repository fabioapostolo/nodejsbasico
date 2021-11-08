import styled from 'styled-components';

export const Sobre = styled.div `
   min-height: 90vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
`;

export const Descricao = styled.div `
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
      font-weight: lighter;
      color: yellow;
  }
`;

export const Imagem = styled.div `
   z-index: 2;
   flex: 1;
   overflow: hidden;
   img{
       margin-top: 4rem; 
       width: 100%;
       height: 75;
       object-fit: cover;
       border-radius: 50%;
   }
`;

export const Cards = styled.div `  
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;   
`;

export const Card = styled.div `  
  padding: 0.5rem;
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    margin-left: 0.4rem;
  }
  h3{
    margin-left: 1.5rem;
    background: white;
    color: black;
    padding: 1rem;     
  }  
`;

export const Servicos = styled.div `
  h2{
    padding-top: 1rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const DescServico = styled.div `
  
`;

export const ImgCard = styled.div `   
   display: flex;   
   justify-content: center;  
   img{
     width: 30rem;
     heigth: 30rem;
   }   
`;

export const StyledNav = styled.nav `   
   min-heigth: 10vh;
   display: flex;
   z-index:3;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 10rem;
   background: #282828;
   position: sticky;
   top:0;
   color: white;
   ul{
     display: flex;
     list-style: none;     
   }
   li{
     padding-left: 4rem;     
   }
   a{
     text-decoration: none;
     color: white;
   }
`;

export const ContactSocial = styled.div `
   padding: 1rem 10rem;
   color: white;  
   min-height: 90vh;
`;

export const Title = styled.div `
   margin-bottom: 4rem;
   h2{
     color: white;     
   }    
`;

export const Areas = styled.div `
  display: flex;
  align-items: center;
`;

export const Network = styled.div `
  padding: 1rem 5rem;
`;

export const Social = styled.a `
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: 15px 50px;
  padding-left: 2rem;
  text-decoration: none;
  &:hover{
    background: gold;
    cursor: pointer;
  }
  h3{
    color: grey;
    margin: 2rem;    
  }
  color: inherit;
`;

export const Input = styled.div `
   display:flex;
   flex-direction: column;
   min-width: 80vh;
   label {
     color: white;
     padding-top: 1rem;
   }
   input {     
    padding: 12px 20px;    
    width: 100%;
    height: 100%;     
   } 
   input:focus {
     background-color: lightgray; 
   }  
   textarea {
     width: 100%;
     heigth: 150%;
     padding: 12px 20px;
     box-align: border-box;    
     resize: none; 
   }  
   textarea:focus {
    background-color: lightgray; 
   }  
   
`;

export const Form = styled.form `   
   button {     
    margin-top: 1rem;    
     
   }    
`;