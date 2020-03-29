import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event){
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        
        try {
            const reponse = await  api.post('/ongs', data);
            alert(`Seu ID de acesso: ${reponse.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size="16" color="#E02041"/>
                        Voltar ao menu
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da Ong"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80}}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}