import React,{ useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

export default function Profile() {
  const [incidents, setIncidents] = useState([])
  const ongName = localStorage.getItem('ong_name');
  const ongId = localStorage.getItem('ong_id');
  const history = useHistory();
  
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId])

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`,{
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(incidents.filter(incident => incident.id != id));
    } catch(err){
      console.log(err);
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Bem vindo, {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
    <h1>Casos cadastrados</h1>
    <ul>
      {incidents.map(incident => (
        <li key={incident.id}>
        <strong>CASO: </strong>
        <p>{incident.title}</p>
        <strong>DESCRIÇÃO: </strong>
        <p>{incident.description}</p>
        <strong>VALOR: </strong>
        <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
          <FiTrash2 size={20} color="#a8a8b3" />
        </button>
      </li>
      ))}
    </ul>
    </div>
  );
}