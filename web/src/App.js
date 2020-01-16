import React, { useState, useEffect } from 'react';

// Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
import './global.css'
import './App.css'
import './Sidebar.css'
import './main.css'

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    );
  }, [])
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required value={latitude}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required value={longitude}/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18393836?s=400&v=4" alt="Sandro Torres"></img>
              <div className="user-info">
                <strong>Sandro Torres</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Desenvolvedor Front-End: Node.JS, ReactJS e React Native.</p>
            <a href="https://github.com/sjtorres">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18393836?s=400&v=4" alt="Sandro Torres"></img>
              <div className="user-info">
                <strong>Sandro Torres</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Desenvolvedor Front-End: Node.JS, ReactJS e React Native.</p>
            <a href="https://github.com/sjtorres">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18393836?s=400&v=4" alt="Sandro Torres"></img>
              <div className="user-info">
                <strong>Sandro Torres</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Desenvolvedor Front-End: Node.JS, ReactJS e React Native.</p>
            <a href="https://github.com/sjtorres">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18393836?s=400&v=4" alt="Sandro Torres"></img>
              <div className="user-info">
                <strong>Sandro Torres</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>Desenvolvedor Front-End: Node.JS, ReactJS e React Native.</p>
            <a href="https://github.com/sjtorres">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;
