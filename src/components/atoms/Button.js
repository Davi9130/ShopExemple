import styled from "styled-components";

const Button = styled.button`
  background: black;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    background: palevioletred;
  }
`;

export default Button;
