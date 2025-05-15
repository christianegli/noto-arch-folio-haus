import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard, { Project } from "../components/ProjectCard";
import ImageGridItem from "../components/ImageGridItem";
import { getProjects, getStrapiMedia } from "../lib/strapiClient";

type Category = "All" | "Residential" | "Commercial" | "Public";

// Mapping for filter label translations
const categoryLabels: Record<Category, string> = {
  All: 'Alle',
  Residential: 'Wohnen',
  Commercial: 'Gewerbe',
  Public: 'Öffentlich'
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<Category>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const categories: Category[] = ["All", "Residential", "Commercial", "Public"];

  useEffect(() => {
    getProjects()
      .then(data => {
        const mapped = data.map(p => ({
          id: p.attributes.slug,
          title: p.attributes.title,
          location: p.attributes.location ?? "",
          year: p.attributes.year ?? "",
          category: p.attributes.category ?? "",
          description: p.attributes.description ?? "",
          thumbnailUrl: getStrapiMedia(p.attributes.thumbnail),
        }));
        setProjects(mapped);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(proj => proj.category === filter));
    }
  }, [filter, projects]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Map projects to include aspect ratios as per homepage pattern
  const ratioMap: Record<number, 'square' | 'portrait' | 'landscape'> = {
    0: 'portrait',
    1: 'landscape',
    2: 'square',
    3: 'square',
    4: 'portrait',
    5: 'landscape'
  };
  type ProjectItem = { project: Project; index: number; aspectRatio: 'square' | 'portrait' | 'landscape' };
  const items: ProjectItem[] = filteredProjects.map((project, index) => ({ project, index, aspectRatio: ratioMap[index] ?? 'square' }));
  // Distribute into three columns
  const columns: ProjectItem[][] = [[], [], []];
  items.forEach((item, i) => {
    columns[i % 3].push(item);
  });

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="content-container">
          <h1 className="uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl mb-12">Projekte</h1>
          
          {/* Filter */}
          <div className="mb-16 border-b border-noto-lightgray">
            <div className="flex flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  className={`
                    px-4 py-3 text-sm mr-4 relative
                    ${filter === category ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black" : "text-noto-gray hover:text-black transition-colors"}
                  `}
                  onClick={() => setFilter(category)}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid (irregular layout matching homepage) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 md:gap-6 lg:gap-6">
                {column.map(({ project, aspectRatio }) => (
                  <ImageGridItem
                    key={project.id}
                    project={project}
                    aspectRatio={aspectRatio}
                  />
                ))}
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-noto-gray">Keine Projekte in dieser Kategorie gefunden.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Projects;
