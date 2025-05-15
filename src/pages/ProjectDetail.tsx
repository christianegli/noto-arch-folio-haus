import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Project } from "../components/ProjectCard";

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

// Extended project details for the detail page
const projectDetails: { [key: string]: any } = {
  "urban-townhouse": {
    client: "Private Client",
    area: "320 sq.m",
    status: "Completed 2023",
    services: ["Architecture", "Interior Design", "Landscape Design"],
    collaborators: ["Studio Light (Lighting)", "Grün Engineering (Structure)"],
    awards: ["German Design Award 2023 - Special Mention"],
    fullDescription: "Located in a densely populated area of Berlin, this townhouse creates a tranquil urban retreat through careful arrangement of volumes around a central courtyard. The design responds to the challenges of a narrow site by maximizing natural light and creating visual connections between spaces while maintaining privacy. The material palette features exposed concrete, oak, and steel, articulated with precise detailing that celebrates craft and texture. Sustainability was central to the project, incorporating passive solar design, high-performance insulation, and a green roof that helps manage stormwater and reduce the urban heat island effect.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
    ]
  }
};

// Fill in missing project details with placeholder data
projects.forEach(project => {
  if (!projectDetails[project.id]) {
    projectDetails[project.id] = {
      client: "Private Client",
      area: `${Math.floor(Math.random() * 500 + 200)} sq.m`,
      status: `Completed ${project.year}`,
      services: ["Architecture", "Interior Design"],
      collaborators: ["Various Engineering Partners"],
      awards: [],
      fullDescription: project.description + " " + project.description,
      images: [
        project.thumbnailUrl,
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
      ]
    };
  }
});

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [details, setDetails] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
        setDetails(projectDetails[id]);
      }
    }
    
    // Reset scroll position when project changes
    window.scrollTo(0, 0);
    
    // Delay loading state for smoother transitions
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [id]);
  
  if (!project || !details) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="content-container pt-32 pb-24">
          <p>Projekt nicht gefunden.</p>
          <Link to="/projects" className="text-noto-gray hover-underline">
            Zurück zu Projekten
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === details.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? details.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      {/* Image Gallery (now starts below header) */}
      <section className="pt-32 mb-24">
        <div className="content-container">
          <div className="relative aspect-[16/9] overflow-hidden bg-noto-lightgray mb-4">
            <img 
              src={details.images[currentImageIndex]} 
              alt={`${project.title} - Bild ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover animate-fade-in"
            />
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 w-12 h-12 flex items-center justify-center transition-all duration-300"
              aria-label="Vorheriges Bild"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 w-12 h-12 flex items-center justify-center transition-all duration-300"
              aria-label="Nächstes Bild"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="flex space-x-1">
              {details.images.map((_, index: number) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImageIndex === index ? "bg-noto-black" : "bg-noto-lightgray"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Project Info (moved below gallery) */}
      <section className="pb-12">
        <div className="content-container">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm text-noto-gray hover:text-noto-black transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-2 rotate-180">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            ZURÜCK ZU PROJEKTEN
          </Link>

          <h1 className="font-helvetica font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl mb-4">{project.title}</h1>
          <p className="text-noto-gray mb-4">{project.location}, {project.year}</p>
          <p className="text-noto-gray mb-12">{details.fullDescription}</p>
        </div>
      </section>
      
      {/* Project Details section removed */}
      <Footer />
    </main>
  );
};

export default ProjectDetail;
