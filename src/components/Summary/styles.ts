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
    }
    header { 
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`;