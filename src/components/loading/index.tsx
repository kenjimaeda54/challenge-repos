import React from "react";
import { Container, Spinner } from "./styles";

export function Loading(): JSX.Element {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
