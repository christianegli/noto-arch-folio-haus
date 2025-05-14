
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
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
  }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="w-full h-screen relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
          alt="NOTO Architecture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white content-container">
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Thoughtful Architecture for Modern Living
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              NOTO creates spaces that balance form, function and environmental responsibility
            </p>
            <Link 
              to="/projects" 
              className="inline-block border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Intro Section */}
      <section className="py-24 lg:py-32 bg-noto-white">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8">
              Crafting Spaces That Connect with People and Place
            </h2>
            <p className="text-noto-gray mb-6">
              NOTO is a Berlin-based architecture practice founded in 2010. We approach 
              each project with a commitment to understanding its unique context, 
              creating spaces that respond sensitively to their environment while 
              meeting the needs of those who inhabit them.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center font-medium hover-underline"
            >
              Learn more about our studio
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Project Section */}
      <section className="py-24 lg:py-32">
        <div className="content-container">
          <h2 className="text-2xl md:text-3xl mb-16">Featured Project</h2>
          <FeaturedProject project={projects[0]} />
        </div>
      </section>
      
      {/* Recent Projects Grid */}
      <section className="py-24 lg:py-32 bg-noto-white">
        <div className="content-container">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-2xl md:text-3xl">Recent Projects</h2>
            <Link 
              to="/projects" 
              className="inline-flex items-center font-medium hover-underline"
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {projects.slice(1).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-24 lg:py-32">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden bg-noto-lightgray">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="NOTO Design Process" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl">Our Approach</h2>
              <p className="text-noto-gray">
                We believe architecture should respond to both the physical and cultural context in which it exists. 
                Our designs emerge from a deep engagement with site, careful material selection, and thoughtful 
                consideration of how spaces will be experienced.
              </p>
              <p className="text-noto-gray">
                Sustainability is integral to our practice. We seek to create buildings that minimize environmental 
                impact through passive design strategies, energy efficiency, and responsible material choices.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center font-medium hover-underline mt-4 block"
              >
                Read more about our philosophy
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
     
      <Footer />
    </main>
  );
};

export default Index;
