
import { Link } from "react-router-dom";
import { Project } from "./ProjectCard";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <Link to={`/project/${project.id}`} className="block group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[4/3] overflow-hidden bg-noto-lightgray">
          <img 
            src={project.thumbnailUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-noto-gray">{project.category}</p>
          <h2 className="font-playfair text-2xl md:text-3xl">{project.title}</h2>
          <p className="text-noto-gray">{project.location}, {project.year}</p>
          <p className="text-noto-gray max-w-md">{project.description}</p>
          <div className="inline-block pt-4">
            <span className="hover-underline after:scale-x-100 group-hover:after:origin-bottom-left group-hover:after:scale-x-0 inline-flex items-center">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
