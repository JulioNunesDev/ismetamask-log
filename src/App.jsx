import { useEffect } from "react";
import { useState } from "react";
import {Navigate} from 'react-router-dom'


import "./App.css";


function App() {

  const [isConnected, setIsconnected] = useState(false);
  const [wallet, setWallet] = useState("");
  

  async function connectWallet() {
    let MetaMask = window.ethereum;
    if (MetaMask) {
      try {
        const address = await MetaMask.request({
        method: "eth_requestAccounts" });
        const accounts = address[0]
        
        const obj = {
          isConnectedStatus: true,
          status: "Conectado com Sucesso",
          accounts
        };

        return obj;

      } catch (error) {
        return {
          isConnectedStatus: false,
          status: "Erro ao conectar carteira!",
          
          
        };
      }
    }else{
      return{
        isConnectedStatus: false,
          status: "Metamask não foi instalada no navegador",
        
      }
    }
  }
  
  useEffect(()=>{
    if(!isConnected){
      <Navigate to="/login"/>
    }
  },[])



  async function pressButton() {
    console.log(isConnected)
    if(isConnected) return alert("Conta já Conectada", + wallet)

    const WalletResponse = await connectWallet()
    
    setIsconnected(WalletResponse.isConnectedStatus);
    setWallet(WalletResponse.accounts)

  }



  return (
    <div className="App" >
    <header>
      <div>
        <img 
        
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"  />
      </div>
      <nav>
        <div>
          <button disabled={isConnected} onClick={pressButton}>
            {isConnected ? "Conectado" : "Não Conectado"}
          </button>
        </div>
      </nav>
    </header>
        <main>
        
          <h1>BLOCKCHAIN</h1>
          <p>{wallet}</p>
          <div>
            
            
            <iframe  width="65%" height="500" src="https://www.youtube.com/embed/7avdgcSATXw" title="YouTube video player"  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>
          <h1>PORTFÓLIO</h1>
         
          <div className="meta">
          <iframe src="https://www.julionunes.tk" 
            width="90%"
            height={600}
            ></iframe>
          </div>
        </main>
          <footer>
          <h2>Para Estudos</h2>
        </footer>
      
    </div>
  
  );
}

export default App;
