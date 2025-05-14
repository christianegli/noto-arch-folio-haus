
import { Link } from "react-router-dom";
import { Project } from "./ProjectCard";

interface ImageGridItemProps {
  project: Project;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

const ImageGridItem = ({ project, aspectRatio = 'square' }: ImageGridItemProps) => {
  // Generate aspect ratio class based on the prop
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'portrait':
        return 'aspect-[2/3]';
      case 'landscape':
        return 'aspect-[4/3]';
      case 'square':
      default:
        return 'aspect-square';
    }
  };
  
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block"
    >
      <div className={`relative ${getAspectRatioClass()} overflow-hidden bg-noto-lightgray`}>
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end p-6">
          <h3 className="text-white font-helvetica font-light text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ImageGridItem;
