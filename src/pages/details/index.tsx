import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIssue, fetchRepos } from "../../utils";
import api from "../../services/api";
import Header from "../../components/header";
import Card from "../../components/cardDeveloper";
import {
  Container,
  ContainerTop,
  ContainerLoading,
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
import { Loading } from "../../components/loading";

export default function Details(): JSX.Element {
  const { repos, owner } = useParams();
  const [languageIssue, setLanguageIssue] = useState("");
  const [repoIssue, setRepoIssue] = useState<fetchIssue[]>([]);
  const [repo, setRepo] = useState<fetchRepos>({} as fetchRepos);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseIssues = await api.get(
          `/repos/${owner}/${repos}/issues?per_page=7`
        );
        const responseLanguage = await api.get(
          `/repos/${owner}/${repos}/languages`
        );
        const responseRepo = await api.get(`/repos/${owner}/${repos}`);
        const order = Object.keys(responseLanguage.data).sort((a, b) => {
          return responseLanguage.data[b] - responseLanguage.data[a];
        });
        setRepo(responseRepo.data);
        setRepoIssue(responseIssues.data);
        setLanguageIssue(order[0]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading) {
      fetchData();
    }
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Container>
          <Header />
          <Body>
            <ContainerTop>
              <WrapTitles>
                <Title>{repo.full_name}</Title>
                <SubTitle>{repo.description}</SubTitle>
              </WrapTitles>
              <Img src={repo.owner.avatar_url} />
            </ContainerTop>
            <ContainerSection>
              <div>
                <Section>
                  <SectionTitle>{repo.forks_count}</SectionTitle>
                  <SectionSubTitle>Forks</SectionSubTitle>
                </Section>
                <Section>
                  <SectionTitle>{repo.stargazers_count}</SectionTitle>
                  <SectionSubTitle>Start</SectionSubTitle>
                </Section>
                <SectionLanguage>
                  <SectionTitle>{languageIssue}</SectionTitle>
                  <SectionSubTitle>Issues</SectionSubTitle>
                </SectionLanguage>
              </div>
              <SectionRight>
                <TitleSectionRight>Issue</TitleSectionRight>
                <ContainerCard>
                  {repoIssue.map((item) => (
                    <Card
                      key={item.id}
                      title={item.title}
                      userName={item.user.login}
                    />
                  ))}
                </ContainerCard>
              </SectionRight>
            </ContainerSection>
          </Body>
        </Container>
      )}
    </Fragment>
  );
}
