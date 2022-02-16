import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
  display: flex;
  background-color: gray;
  border: 0.5rem solid ${colors.gray};
  align-items: center;
  picture {
    img {
      height: 100px;
      border: 0;
      margin: 5px;
    }
  }
  h1 {
    width: 100%;
    text-align: center;
  }
`