
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  thumbnailUrl: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block" 
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="aspect-square overflow-hidden bg-noto-lightgray mb-4">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-playfair text-lg">{project.title}</h3>
        <p className="text-noto-gray text-sm">{project.location}, {project.year}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
