import React, { HtmlHTMLAttributes } from "react";
import Back from "../../assets/back.svg";
import {
  Container,
  ContainerLeft,
  ContainerImg,
  Description,
  TitleDescription,
  SubTitleDescription,
  ContainerRight,
} from "./styles";

interface ICardProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  imgRepo: string;
}

export default function Card({
  title,
  description,
  imgRepo,
  ...rest
}: ICardProps): JSX.Element {
  return (
    <Container {...rest}>
      <ContainerLeft>
        <ContainerImg>
          <img src={imgRepo} width={174} height={185} />
        </ContainerImg>
        <Description>
          <TitleDescription>{title}</TitleDescription>
          <SubTitleDescription>{description}</SubTitleDescription>
        </Description>
      </ContainerLeft>
      <ContainerRight>
        <img src={Back} alt="Icon Back" />
      </ContainerRight>
    </Container>
  );
}
