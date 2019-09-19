import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Api from '../services';

export default function Home() {
  const user = useSelector(state => state.user);
  const [ members, setMembers ] = useState([]);

  useEffect( () => {
    async function loadMembers(){
      const membersList = await Api.loadMembers();
      setMembers(membersList);
    }
    loadMembers();
  }, []);

  return (
    <div className="page">
      <br/>
      <p>Home Page</p>
      <div>
        {user.logged ? JSON.stringify(user) : <p>Usuário não logado</p>}
      </div>
      <br/>
      <strong>Membros</strong>
      <ul>
        {
          members.map(m => <li key={m.id}>{m.login}</li>)
        }
      </ul>
    </div>
  );
}
