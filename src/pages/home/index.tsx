import React from "react";
import Search from "../../assets/Search.svg";
import Card from "../../components/cardRepo";
import Header from "../../components/header";
import Back from "../../assets/back.svg";
import {
  Container,
  Body,
  WrapTitles,
  Title,
  SubTitle,
  WrapInput,
  Input,
  ButtonInput,
  WrapCard,
} from "./styles";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Body>
        <WrapTitles>
          <Title>Github</Title>
          <SubTitle>Discover</SubTitle>
        </WrapTitles>
        <WrapInput>
          <Input placeholder="EX: Facebook/React" />
          <ButtonInput>
            <img src={Search} alt="Img Search" />
          </ButtonInput>
        </WrapInput>
        <WrapCard>
          <Card title="Repo" description="reposao" imgRepo={Back} />
        </WrapCard>
      </Body>
    </Container>
  );
}
