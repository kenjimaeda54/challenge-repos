import { KeyboardEvent, useState, useRef } from "react";
import { fetchRepos } from "../../utils";
import { Loading } from "../../components/loading";
import api from "../../services/api";
import Search from "../../assets/Search.svg";
import Card from "../../components/cardRepo";
import Header from "../../components/header";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [repo, setRepo] = useState<fetchRepos>({} as fetchRepos);

  async function handleFetchDataKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    try {
      console.log(`/repos/${inputRef.current?.value}`);
      if (e.key === "Enter") {
        setIsLoading(true);
        const response = await api.get(`/repos/${inputRef.current?.value}`);
        const data: fetchRepos = response.data;
        const owner = {
          avatar_url: data.owner.avatar_url,
        };
        setRepo({
          id: data.id,
          owner,
          full_name: data.full_name,
          description: data.description,
          forks_count: data.forks_count,
          stargazers_count: data.stargazers_count,
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleFetchData() {
    try {
      setIsLoading(true);
      const response = await api.get(`/repos/${inputRef.current?.value}`);
      const data: fetchRepos = response.data;
      const owner = {
        avatar_url: data.owner.avatar_url,
      };
      setRepo({
        id: data.id,
        owner,
        full_name: data.full_name,
        description: data.description,
        forks_count: data.forks_count,
        stargazers_count: data.stargazers_count,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  const handleNavigation = () =>
    (window.location.href = `/details/${inputRef.current?.value}`);

  return (
    <Container>
      <Header />
      <Body>
        <WrapTitles>
          <Title>Github</Title>
          <SubTitle>Discover</SubTitle>
        </WrapTitles>
        <WrapInput>
          <Input
            ref={inputRef}
            autoFocus
            onKeyDown={(e) => handleFetchDataKeyPress(e)}
            placeholder="EX: Facebook/React"
            maxLength={30}
          />
          <ButtonInput onClick={handleFetchData}>
            <img src={Search} alt="Img Search" />
          </ButtonInput>
        </WrapInput>
        <WrapCard>
          {isLoading && <Loading />}
          {!isLoading && repo.id && (
            <Card
              onClick={handleNavigation}
              title={repo.full_name}
              description={repo.description}
              imgRepo={repo.owner.avatar_url}
            />
          )}
        </WrapCard>
      </Body>
    </Container>
  );
}
