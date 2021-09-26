import styled from "styled-components";

export const Container = styled.div`
    display: grid; // três elementos do mesmo tamanho, lado a lado
    grid-template-columns: repeat(3, 1fr); // ou 1fr 1fr 1fr 
    gap: 2rem; // espaçamento entre os elementos do meu grid
    margin-top: -10rem;
    
    // Encadeamento de estilos
    div { 
      background: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-title);
    
    header { 
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong { 
      display: block; // por padrão o strong vem com display: inline e acaba não aplicando margin-top
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;