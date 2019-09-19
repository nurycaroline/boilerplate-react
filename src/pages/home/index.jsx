import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Api from '../../services';

import { Container, StatusUser, List } from './styles';

export default function Home() {
  const user = useSelector(state => state.user);
  const [ members, setMembers ] = useState([]);

  useEffect( () => {
    async function loadMembers(){
      const membersList = await Api.Usuario.loadMembers();
      setMembers(membersList);
    }
    loadMembers();
  }, []);

  return (
    <Container>
      <h1>Página Inicial</h1>
      <br/>

      <StatusUser logged={user.logged}>
        <p>{user.logged ? JSON.stringify(user) : 'Usuário não logado'}</p>
      </StatusUser>
      
      <br/>
      
      <h2>Membros</h2>
      <List>
        {
          members.map(m => <li key={m.id}>{m.login}</li>)
        }
      </List>
    </Container>
  );
}
