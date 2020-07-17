import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="main-page">
        <h1>Parabéns, meu amor!!!</h1>
      </div>
      <div className="text">
        <p>MAIS UM ANIVERSÁRIOZINHO JUNTINHOS!!!</p>
        <p>
          Decidi listar umas verdades pra você, que eu sei que você gosta. Vamos
          lá:
        </p>
        <ul>
          <li>
            Eu adoro seus jeitos. O seu jeito de tentar me fazer feliz, seu
            jeito besta e até seu jeito quando está triste
          </li>
          <li>Eu quero passar minha vida inteira do seu lado</li>
          <li>Você é a pessoa mais importante da minha vida.</li>
          <li>
            Passar um aniversário em casa sem poder sair não deve ser fácil,
            então eu vou tentar fazer você feliz mesmo assim.
          </li>
          <li>Vai começar com um red velvetzinho pro meu amor.</li>
          <li>
            Eu não pude sair pra comprar um cartãozinho, então resolvi fazer um.
          </li>
          <li>Vamos fazer um call com alguns amigos nossos as 18h</li>
        </ul>
      </div>
      <div className="gifs-wrapper">
        <p>
          E agora, uns gifs que achei bons demais pra só eu apreciar! hahaha
        </p>
        <div className="gifs">
          <div className="gif-wrapper">
            <img
              src="https://media.giphy.com/media/W0rfEyF1UeEda/giphy.gif"
              alt=""
            />
          </div>
          <div className="gif-wrapper">
            <img
              src="https://media.giphy.com/media/5tlq0pRndGu8U/giphy.gif"
              alt=""
            />
          </div>

          <div className="gif-wrapper">
            <img
              src="https://media.giphy.com/media/cROwFEvVvhNG8/giphy.gif"
              alt=""
            />
          </div>

          <div className="gif-wrapper">
            <img
              src="https://media.giphy.com/media/MS3XuWjQV1FiU/giphy.gif"
              alt=""
            />
          </div>

          <div className="gif-wrapper">
            <img
              src="https://media.giphy.com/media/KiZ6kV683kPaU/giphy.gif"
              alt=""
            />
          </div>

          <div className="gif-wrapper">
            <img
              src="https://media.giphy.com/media/RLn7rKwFoWK1YCDly9/giphy.gif"
              alt=""
            />
          </div>

          <div className="gif-wrapper">
            <img
              src="https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="gift">
        <p>Parece que eu estou esquecendo alguma coisa...</p>
        <p>Aaaa é... Seu presentinho né...</p>
        <p>Clica no botão aqui embaixo então</p>
        <a href="https://drive.google.com/drive/folders/1BbueySRnmP_s1sK6RhfiIZY7zr-exbUW?usp=sharing">
          Ver meus presentes!
        </a>
      </div>
    </div>
  );
}

export default App;
