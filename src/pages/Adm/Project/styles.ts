import styled from "styled-components"
import { colors } from "styles/GlobalStyle"
import fundo01 from "assets/img/fundo.jpg"

export const Main = styled.main`
  background: url(${fundo01});
  height: 100vh;
  div {
    display: block;
    width: 3rem;
    margin: 0.5rem 0;
  }
  table {
    margin-bottom: 1rem;
    width: 100%;
    border-collapse: collapse;
    tr, td, th {
      border: 1px solid ${colors.white};
      padding: 0.5rem;
      color: white 
    }
  }
`