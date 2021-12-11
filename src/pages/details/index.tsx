import Header from "../../components/header";
import {
  Container,
  ContainerTop,
  Body,
  WrapTitles,
  Title,
  SubTitle,
  Img,
  ContainerCard,
  ContainerSection,
  SectionRight,
  TitleSectionRight,
  Section,
  SectionTitle,
  SectionSubTitle,
  SectionLanguage,
} from "./styles";
import Back from "../../assets/back.svg";

export default function Details(): JSX.Element {
  return (
    <Container>
      <Header />
      <Body>
        <ContainerTop>
          <WrapTitles>
            <Title>facebook/react</Title>
            <SubTitle>
              A declarative, efficient, and flexible JavaScript library for
              building user interfaces.
            </SubTitle>
          </WrapTitles>
          <Img src={Back} />
        </ContainerTop>
        <ContainerSection>
          <div>
            <Section>
              <SectionTitle>88</SectionTitle>
              <SectionSubTitle>Forks</SectionSubTitle>
            </Section>
            <Section>
              <SectionTitle>88</SectionTitle>
              <SectionSubTitle>Start</SectionSubTitle>
            </Section>
            <SectionLanguage>
              <SectionTitle>Javascript</SectionTitle>
              <SectionSubTitle>Issues</SectionSubTitle>
            </SectionLanguage>
          </div>
          <SectionRight>
            <TitleSectionRight>Issue</TitleSectionRight>
            <ContainerCard></ContainerCard>
          </SectionRight>
        </ContainerSection>
      </Body>
    </Container>
  );
}
