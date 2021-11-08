import React from 'react';
import {Input, Form} from '../styles';

const ContatoForm = () => {
    return(        
              <form className="contato" method="post">
                  <Input>
                    <label>Nome: </label>
                    <input type="text" />
                  </Input>
                  <Input>
                    <label>E-mail: </label> 
                    <input type="email" />
                  </Input>
                  <Input>
                    <label>Mensagem: </label>
                    <textarea rows="5" />
                  </Input>
                  <Form>
                    <button type="submit">Enviar</button> 
                  </Form>               
              </form>                     
    )
}

export default ContatoForm;







