# React Js challenge Repos Git Hub
React JS changelle 2021
Solução para o desafio [desafio-web-react](https://github.com/nolifretes/Desafio-WEB-React)


##  Motivação
Consumir api [github](https://docs.github.com/pt/rest/reference/repos), aplicando filtros por repositorios e detalhes dos issues abertos.</br>

##


## Feature
- Hooks
- Styled Component
- TYpe Script

- Styled component excelente lib de estilização principalmente em react js ambos trabalham com princípio de  tudo ser componentes
- Type script facilita muito no desenvolvimento de software
- Utilizei a passagens de parâmetros por url

``` typescript
//aqui eu recupero eles
export default function Details(): JSX.Element {
  const { repos, owner } = useParams();
  
 } 

// :owner/:repos--> são parâmetros dinâmicos que vem pela url
export default function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:owner/:repos" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

//para enviar e fácil, fiz uma interpolação com o valor passado no input
  const handleNavigation = () =>
    (window.location.href = `/details/${inputRef.current?.value}`);



```

##

- Recurso interessante e utilizar acessibilidade, usei a tecla enter do teclado para facilitar a pesquisa
- Caso esteja no móbile a pessoa consegue iniciar a pesquisa clicando no botão com ícone de lupa
- Inclusive o recurso do botão de pesquisa está disponível também na versão desktop

```  typescript

 async function handleFetchDataKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    try {
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


// onKeyDown e acionado a cada tecla precionado no teclado
    <Input
            ref={inputRef}
            autoFocus
            onKeyDown={(e) => handleFetchDataKeyPress(e)}
            placeholder="EX: Facebook/React"
            maxLength={35}
   />



```

## Como iniciar?
- Clone o repositório.
- Faz as instalações das dependências.yarn( yarn install) ou npm (npm install).
- Para iniciar apos instalar as dependências apenas npm start ou yarn start


