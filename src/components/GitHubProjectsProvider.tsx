import { createContext, useContext } from 'react';
import { useQuery } from 'react-query';



const GitHubProjectsContext = createContext<any>({});

// Agrega esto al principio de tu archivo
interface GitHubProject {
  id: number;
  name: string;
  description: string; // Agrega cualquier otra propiedad que tengas en tus proyectos
  // ...
}

// ...

const useGitHubProjects = (user: string) => {
  return useQuery('githubProjects', async () => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();

    // Para cada proyecto, obtener el contenido del README y analizar la primera imagen
    const projectsWithReadme = await Promise.all(
      data.map(async (project: GitHubProject) => {  // Añade el tipo GitHubProject
        const readmeResponse = await fetch(`https://api.github.com/repos/${user}/${project.name}/readme`);
        const readmeData = await readmeResponse.json();
        
        if (readmeData.content) {
          const readmeContent = atob(readmeData.content);
          const match = readmeContent.match(/!\[.*\]\((.*?)\)/); // Expresión regular para encontrar la primera imagen
          const firstImage = match ? match[1] : null;

          return { ...project, firstImage };
        }

        return project;
      })
    );

    return projectsWithReadme;
  });
};


const GitHubProjectsProvider = ({ children }: any) => {
  const { data } = useGitHubProjects('Marlon042');

  return (
    <GitHubProjectsContext.Provider value={{ data }}>
      {children}
    </GitHubProjectsContext.Provider>
  );
};

export const useGitHubProjectsContext = () => useContext(GitHubProjectsContext);

export default GitHubProjectsProvider;
