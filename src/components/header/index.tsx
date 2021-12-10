import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/github.svg";

export default function Header(): JSX.Element {
  return (
    <Container>
      <img src={Logo} alt="Logo" width={65} height={65} />
    </Container>
  );
}
