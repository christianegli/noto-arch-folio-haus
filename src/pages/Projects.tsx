
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard, { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    id: "urban-townhouse",
    title: "Urban Townhouse",
    location: "Berlin",
    year: "2023",
    category: "Residential",
    thumbnailUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A contemporary townhouse that balances urban living with private spaces, featuring sustainable materials and innovative use of natural light."
  },
  {
    id: "cultural-pavilion",
    title: "Cultural Pavilion",
    location: "Munich",
    year: "2022",
    category: "Public",
    thumbnailUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A public cultural space designed to accommodate exhibitions, performances and community events with flexible interior arrangements."
  },
  {
    id: "alpine-retreat",
    title: "Alpine Retreat",
    location: "Bavaria",
    year: "2021",
    category: "Residential",
    thumbnailUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A mountain home that responds to its dramatic landscape with locally sourced materials and expansive glazing to frame spectacular views."
  },
  {
    id: "office-complex",
    title: "Office Complex",
    location: "Frankfurt",
    year: "2023",
    category: "Commercial",
    thumbnailUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A sustainable office building that prioritizes employee wellbeing with generous green spaces, natural ventilation and adaptable workspaces."
  },
  {
    id: "riverside-apartments",
    title: "Riverside Apartments",
    location: "Hamburg",
    year: "2022",
    category: "Residential",
    thumbnailUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A residential complex that embraces its waterfront setting with terraced apartments, communal gardens and a focus on social interaction."
  },
  {
    id: "community-library",
    title: "Community Library",
    location: "Dresden",
    year: "2021",
    category: "Public",
    thumbnailUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A contemporary library that serves as a learning hub and community gathering space with flexible interiors that can be reconfigured for diverse events."
  },
  {
    id: "waterfront-restaurant",
    title: "Waterfront Restaurant",
    location: "Kiel",
    year: "2022",
    category: "Commercial",
    thumbnailUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A dining experience that connects patrons with coastal views through floor-to-ceiling windows and outdoor terraces that extend over the water."
  },
  {
    id: "forest-cabin",
    title: "Forest Cabin",
    location: "Black Forest",
    year: "2020",
    category: "Residential",
    thumbnailUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A minimal retreat nestled among trees, utilizing sustainable timber construction and careful orientation to maximize natural light while minimizing disturbance to the surrounding forest."
  }
];

type Category = "All" | "Residential" | "Commercial" | "Public";

const Projects = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isLoaded, setIsLoaded] = useState(false);

  const categories: Category[] = ["All", "Residential", "Commercial", "Public"];

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="content-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-12">Projects</h1>
          
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
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-noto-gray">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Projects;
