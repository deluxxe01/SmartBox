import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../../Context/Globalcontext';

function AdminLogin() {
  const [input, setInput] = useState({ email: '', senha: '' });
  const { setUsuarioAtual } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/loginAdmin', input);
      setUsuarioAtual(res.data.user);
      navigate('/admin/dashboard'); // rota protegida do admin
    } catch (err) {
      alert(err.response?.data.error || "Erro ao logar administrador");
    }
  };

  return (
    <div>
      <h1>Login Administrador</h1>
      <input
        type="email"
        placeholder="Email"
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        value={input.senha}
        onChange={(e) => setInput({ ...input, senha: e.target.value })}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default AdminLogin;
