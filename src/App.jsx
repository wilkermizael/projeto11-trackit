
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Pages/Tela Login/Login.jsx"
import Cadastro from './Pages/Tela Cadastro/Cadastro.jsx';
import Habitos from './Pages/Habitos/Habitos.jsx';
import { useState } from 'react';
import { TokenContext } from './Context/TokenContext.jsx';
import { PercentageContext } from './Context/PercentageContext.jsx';

function App() {
  const [email, setEmail]=useState('');
  const [senha, setSenha]= useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [usuario, setUsuario] = useState('');
  const [dados, setDados] = useState('');
  const [token, setToken] = useState('')
  const [percentage, setPercentage] = useState(0)
  return (
    <TokenContext.Provider value={{token, setToken}}>
    <PercentageContext.Provider value={{percentage,setPercentage}}>
      <BrowserRouter>
        
        
        <Routes>
          
          <Route path="/" element={<Login/>}></Route>
          <Route path="/cadastro" element={<Cadastro 
          setEmail={setEmail} 
          setSenha={setSenha} 
          setUrlFoto={setUrlFoto} 
          setUsuario={setUsuario}
          setDados={setDados}
          dados={dados}
          email={email}
          senha={senha} 
          urlFoto={urlFoto}
          usuario={usuario}
          />}></Route>
          <Route path="/habitos" element={<Habitos />}></Route>
        </Routes>
      </BrowserRouter>
      </PercentageContext.Provider>  
    </TokenContext.Provider>
  )
}

export default App
