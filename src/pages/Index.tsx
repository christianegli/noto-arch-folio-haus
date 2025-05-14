
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import NewsItem from "../components/NewsItem";
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
  }
];

const newsItems = [
  {
    title: "Freiham, \"Making planning visible\" exhibition",
    description: "The model of Freiham Nord, the new sustainable residential quarter to the north of Munich which has been taking shape over the last several years, will be on display at the Department of Urban Planning and Building Regulations.",
    location: "Department of Urban Planning and Building Regulations, Blumenstrasse 28b, Exhibition rooms 17 and 18",
    dates: "Open Monday to Friday, 7 am to 6 pm, until January 17, 2025",
    link: "/news/freiham-exhibition"
  },
  {
    title: "Sharing Lectures: Contemporary Architecture Practice",
    description: "NOTO's principal architect will be presenting at the Sharing Lectures series, discussing our approach to sustainable urban development.",
    location: "Berlin University of the Arts",
    dates: "March 15, 2025, 7 pm",
    link: "/news/sharing-lectures"
  }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      <main>
        {/* Main Content Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen">
          {/* Left Column - Featured Project */}
          <div className="lg:col-span-2 h-screen relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="NOTO Architecture" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right Column - News/Updates */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto max-h-screen">
            <div className="mb-12">
              <h2 className="text-2xl font-playfair mb-6">News</h2>
              
              <div className="space-y-0">
                {newsItems.map((item, index) => (
                  <NewsItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    location={item.location}
                    dates={item.dates}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <section className="py-16 lg:py-24">
          <div className="px-8 md:px-12 lg:px-16">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-2xl font-playfair">Projects</h2>
              <Link 
                to="/projects" 
                className="inline-flex items-center hover-underline"
              >
                All projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
     
      <Footer />
    </div>
  );
};

export default Index;
