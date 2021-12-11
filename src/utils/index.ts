export interface fetchRepos {
  id: number;
  owner: IOwner;
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
}

interface IOwner {
  avatar_url: string;
}

export interface fetchIssue {
  user: User;
  title: string;
  id: number;
}

interface User {
  login: string;
}
