import React from 'react';
import { useSelector } from 'react-redux';

function Contact() {
  const user = useSelector(state => state.user);
  return (
    
    <div className="page">
      <p>Contact Page</p>
      <div>
        {user.logged ? JSON.stringify(user) : <p>Usuário não logado</p>}
      </div>
    </div>
  );
}

export default Contact;
