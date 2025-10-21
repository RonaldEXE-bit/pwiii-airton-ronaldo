# Checkpoint Capitulo: "7" NextJS
Esta parte é do projeto do capítulo 1 até o 7.

É uma curiosidade interessante ver como começamos com um único ficheiro `index.html` e, nos capítulos seguintes, ele se transforma numa estrutura com vários ficheiros e pastas dentro de `react-foundations`. Vemos na prática como aquele `index.html` inicial é "desmembrado" 😂.

O mais interessante é que o resultado final é o mesmo, mas a segunda versão é muito mais organizada. Como sempre, deixo aqui um botão de "Like" diferente para voce possa usar em seus projeto e modificar a vontade. Tomara que goste!

##### HTML

    <div class="button-container">
      <input hidden="" id="checknumber" type="checkbox" />
      <label for="checknumber" class="button">
        <div id="leftpart">
          <p id="currentnumber">24</p>
          <p id="movenumber">25</p>
        </div>
    
        <div id="rightpart">
          <svg
            id="likeimg"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="3"
            stroke="#00d5ff"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
            ></path>
          </svg>
          <div id="fontlikebutton">Like</div>
        </div>
      </label>
    </div>
##### CSS

    .button-container {
      position: relative;
      display: inline-block;
    }
    
    .button {
      cursor: pointer;
      width: 15em;
      height: 5em;
      display: flex;
      align-items: center;
      background-color: white;
      border: none;
      box-shadow: 0px 5px 0px rgba(45, 45, 45, 0.2);
      overflow: hidden;
      border-radius: 0.5em;
      transition: all 0.2s ease;
    }
    
    #fontlikebutton {
      font-family: "Trebuchet MS", sans-serif;
      font-weight: 600;
      font-size: 2em;
      color: #00d5ff;
      margin-left: 0.2em;
    }
    
    .button:hover {
      background-color: #00d5ff;
    }
    
    .button:hover svg {
      filter: brightness(0) invert(1);
      transform: scale(1.5) translateX(100%);
    }
    
    .button:hover #fontlikebutton {
      transform: translateX(200%);
    }
    
    .button:active {
      transform: scale(0.95) translateY(10%);
      box-shadow: 0px 2px 0px 0px rgb(0, 213, 255, 0.5);
    }
    
    .button:active svg {
      margin-bottom: 0.5em;
      transform: scale(1.5) translateX(85%) rotate(-30deg);
    }
    
    .button:active #fontlikebutton {
      transform: translateX(200%);
    }
    
    #likeimg {
      transition: all 0.2s ease;
    }
    
    #rightpart {
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    #leftpart {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: "Trebuchet MS", sans-serif;
      font-weight: 600;
      font-size: 2em;
      background-color: #00d5ff;
      width: 30%;
      height: 100%;
      transition: all 0.2s ease;
    }
    
    .button:hover #leftpart {
      color: #00d5ff;
      background: white;
    }
    
    #currentnumber {
      transform: translateY(50%);
      transition: all 0.2s ease;
    }
    
    #movenumber {
      transform: translateY(-200%);
      transition: all 0.2s ease;
    }
    
    #checknumber:checked ~ .button #currentnumber {
      transform: translateY(200%);
    }
    
    #checknumber:checked ~ .button #movenumber {
      transform: translateY(-50%);
    }
E nois ate a proxima✌️.