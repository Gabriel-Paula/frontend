import { CurtirProps } from "interface/style.interface"
import styled, { css } from "styled-components"
import { colors } from "styles/GlobalStyle"
import fundo01 from "assets/img/fundo.jpg"

export const Main = styled.main`
  background: url(${fundo01});
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: auto;
  }
  div {
    display: flex;
    margin-top: 0.8rem;
  }
`

const colorVariations = {
  default: css`
    color: ${colors.white};
  `,
  curtir: css`
    color: ${colors.red};
  `
}


export const Button = styled.button<CurtirProps>`
  cursor: pointer;
  margin: 0 0.2rem;
  display: flex;
  background-color: transparent;
  border: 0;
  
  ${(props) => colorVariations[props.color || "default"]}
`