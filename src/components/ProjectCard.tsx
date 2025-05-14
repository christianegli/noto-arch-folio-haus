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
      <div className="relative aspect-square overflow-hidden bg-noto-lightgray mb-4">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex flex-col justify-end p-6 space-y-1">
          <h3 className="text-white font-helvetica font-light text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.title}
          </h3>
          <p className="text-white font-helvetica text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.location}, {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
