import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5; 
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
      @media (max-width: 1080px) {
        font-size: 93.75%; // 15px = 16 x 0.9375 - acessibilidade
      }
      @media (max-width: 720px) {
          font-size: 87.5%; // 14px
      }
  }

  // REM = 1 rem = tamanho do font-size da nossa página => 16px

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; // deixa o background mais nítido
  } 

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  // tags de negrito
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed; // isso vai ajudar quando a tela ficar scroll
    top: 0; // vai ocupar tudo na tela
    bottom: 0; // vai ocupar tudo na tela
    right: 0; // vai ocupar tudo na tela
    left: 0; // vai ocupar tudo na tela

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
`