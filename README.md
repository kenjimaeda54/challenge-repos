# React Js challenge Repos Git Hub
React changelle 2021
Solução para o desafio[challenge by coodesh](https://github.com/nolifretes/Desafio-WEB-React)


##  Motivação
Consumir api [github](https://docs.github.com/pt/rest/reference/repos), aplicando filtros por repositorios e detalhes dos issues abertos.</br>

##


## Feature
- Hooks
- Styled Component
- TYpe Script

- Styled component excelente lib de estilizacao em react js ambos trabalham com principo de componentes
- Type script facilita muito no desenvolvivmento de sofwtare
- Utilizei a pasagens de parametros por url

``` typescript
//aqui eu recupero eles
export default function Details(): JSX.Element {
  const { repos, owner } = useParams();
  
 } 

// :owner/:repos--> sao parametros dinamicos que vem pela url
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


//para enviar e facil, fiz uma interpolacao com o valor passado no input
  const handleNavigation = () =>
    (window.location.href = `/details/${inputRef.current?.value}`);



```

##

- Recurso interesante e utilizar acesbilidade, usei a tecla enter do teclado para facilitar a pesquisa
- Caso esteja no mobille a pessoa consegue iniciar a pesquisa clicando no botao que tem icone de lupa

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
- Para iniciar apenas digite expo start, apos isto leia qr code.


