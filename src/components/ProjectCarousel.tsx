import React from 'react';
import { Carousel } from 'react-bootstrap';
import GitHubProjectsProvider, { useGitHubProjectsContext } from '../components/GitHubProjectsProvider';

const ProjectCarousel = () => {
  const { data } = useGitHubProjectsContext();

  return (
    <div>
      <h2>Proyectos</h2>
      {Array.isArray(data) && data.length > 0 && (
        <Carousel>
          {data.map((project) => (
            <Carousel.Item key={project.id}>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.firstImage ? (
                  <img
                    className="d-block w-100"
                    src={project.firstImage}
                    width="500"
                    height="400"
                    alt={project.name}
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src="/black-frame.jpg"  // Ruta de la imagen de muestra
                    width="500"
                    height="400"
                    alt={project.name}
                  />
                )}
                <Carousel.Caption className="text-light text-center bg-secondary bg-opacity-75 p-3 rounded">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </Carousel.Caption>




              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProjectCarousel;
