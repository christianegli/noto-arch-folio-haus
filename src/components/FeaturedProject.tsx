
import { Link } from "react-router-dom";
import { Project } from "./ProjectCard";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <Link to={`/project/${project.id}`} className="block group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden bg-noto-lightgray">
          <img 
            src={project.thumbnailUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 flex flex-col justify-center">
          <h2 className="font-playfair text-2xl">{project.title}</h2>
          <p className="text-noto-gray">{project.location}, {project.year}</p>
          <p className="text-noto-gray">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
