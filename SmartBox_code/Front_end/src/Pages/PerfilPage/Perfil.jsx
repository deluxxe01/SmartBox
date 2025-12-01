import React, { useContext, useEffect, useState } from 'react';
import './Perfil.css';
import { GlobalContext } from '../../Context/Globalcontext.jsx';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import axios from 'axios';


function Perfil() {
  const { usuarioAtual, setUsuarioAtual } = useContext(GlobalContext);
  const [ editMode,setEditMode ] = useState(true)
  const [formUpdateUser,setFormUpdateUser] = useState({
    id:usuarioAtual.id_cliente,
    nome:usuarioAtual.nome,
    sobrenome:usuarioAtual.sobrenome,
    email:usuarioAtual.email,
    cep:usuarioAtual.cep,
    senha:usuarioAtual.senha
  })

  
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioAtual) {
      navigate('/login');
    }
  }, [usuarioAtual, navigate]);

  if (!usuarioAtual) return <p>Carregando...</p>;

  const [lixeiraAtual, setLixeiraAtual] = useState('/icon/deleteblack.png');

  // Função para deletar a conta do usuário
  const handleDeleteAccount = async () => {
    const confirmar = window.confirm(
      'Tem certeza que deseja apagar sua conta? Esta ação é irreversível.'
    );
    if (!confirmar) return;

    try {
      console.log('Deletando usuário com ID:', usuarioAtual.id);

      const response = await fetch(`http://localhost:3000/clients/${usuarioAtual.id_cliente}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Resposta do servidor:', data);

      if (response.ok) {

        alert('Conta excluída com sucesso.');
        setUsuarioAtual(null);
        navigate('/login');

      } else {
        alert(`Erro ao excluir conta: ${data.error || 'Erro desconhecido'}`);
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
      console.error('Erro no fetch DELETE:', error);
    }
  };

  // Função para deslogar
  const handleLogout = () => {
    setUsuarioAtual(null);
    navigate('/login');
  };


  const updateUser = async () => {
    alert("atualiza")
    setEditMode(true)

    const result = await axios.put("/api/clients",formUpdateUser)


    console.log("resultado da rota de atualizar clientes: ",result.data.dados)
    setUsuarioAtual(result.data.dados)

  }

  const trocarEstado = ()=>{
    alert("estado diferente")
    setEditMode(false)

  }

  return (
    <div className="Container-Perfil">
      <NavBar />
      <div className="Perfil-Usuario">
        <div className="Primeira-diva">
          <h1 className="Titulo-Perfil">Perfil de Usuário</h1>
         
        </div>
        <div className="Segunda-diva">
          <img
            className="icon"
            src="/icon/garota1.png"
            alt="Foto de perfil"
          />
          <p className="Add-Foto">+ Adicionar uma foto de perfil</p>
          <button className="Encerrar-button" onClick={handleLogout}>
            Encerrar Sessão
          </button>
          <button className="Deletar"
            src={lixeiraAtual}
            alt="Botão para excluir conta"
            onClick={handleDeleteAccount}
            >Deletar Conta</button>
        </div>
        <div className="Terceira-diva">
          <div className="InptUm">
            <label className="LabelForPerfil">Nome</label>
            <input className={editMode ?"Inpt-Perfil":"Inpt-Perfil edit"} type="text" value={formUpdateUser.nome} readOnly = {editMode}
            onChange={(e)=>{setFormUpdateUser(
              {...formUpdateUser,nome: e.target.value })}}
            />

          </div>
          <div className="InptDois">
            <label className="LabelForPerfil">Sobrenome</label>
            <input className={editMode ?"Inpt-Perfil":"Inpt-Perfil edit"} type="text" value={formUpdateUser.sobrenome} readOnly ={editMode}
            onChange={(e)=>{
              setFormUpdateUser({...formUpdateUser,sobrenome:e.target.value})
            }}
            />
          </div>
          <div className="InptTres">
            <label className="LabelForPerfil">Email</label>
            <input className={editMode ?"Inpt-Perfil":"Inpt-Perfil edit"} type="text" value={formUpdateUser.email} readOnly ={editMode}
            onChange={(e) =>{
              setFormUpdateUser({...formUpdateUser,email:e.target.value})
            }}

            />
          </div>
          <div className="InptQuatro">
            <label className="LabelForPerfil">Senha</label>
            <input className={editMode ?"Inpt-Perfil":"Inpt-Perfil edit"} type="text" value={formUpdateUser.senha} readOnly={editMode}
            onChange={(e)=>{
              setFormUpdateUser({...formUpdateUser,senha:e.target.value})
            }}
            />
          </div>

          <div className='ButtonDelete'>
              <button onClick={editMode ? trocarEstado : updateUser}  className={editMode ? "Editar-button":"Editar-button yes"}>{editMode ? "Editar":"Salvar"}</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
