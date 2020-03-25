import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroimg from '../../assets/heroes.png';
import "./styles.css";

export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('/sessions', {
        id
      })
      localStorage.setItem('ong_id',id);
      localStorage.setItem('ong_name',response.data.name);
      history.push('profile');
    } catch(err){
      console.log(err);
    }
  }


  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input 
            name={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID" 
          />
          <button className="button" type="submit">Entrar</button>
          <Link to="/register">
            <FiLogIn sice={16} color="#E02141" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroimg} alt="Heroes" />
    </div>
  );
}
