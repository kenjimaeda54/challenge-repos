import React from "react";
import Back from "../../assets/back.svg";
import {
  Container,
  ContainerLeft,
  TitleDescription,
  SubTitleDescription,
  ContainerRight,
} from "./styles";

interface ICardProps {
  title: string;
  description: string;
}

export default function CardDeveloper({
  title,
  description,
}: ICardProps): JSX.Element {
  return (
    <Container>
      <ContainerLeft>
        <TitleDescription>{title}</TitleDescription>
        <SubTitleDescription>{description}</SubTitleDescription>
      </ContainerLeft>
      <ContainerRight>
        <img src={Back} alt="Icon Back" />
      </ContainerRight>
    </Container>
  );
}
