import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Project } from "../components/ProjectCard";
import { AspectRatio } from "../components/ui/aspect-ratio";
import ImageGridItem from "../components/ImageGridItem";

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
    id: "brick-extension",
    title: "Brick Extension",
    location: "Hamburg",
    year: "2022",
    category: "Residential",
    thumbnailUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A minimal brick extension that complements the existing structure while adding contemporary living spaces."
  },
  {
    id: "concrete-pavilion",
    title: "Concrete Pavilion",
    location: "Frankfurt",
    year: "2021",
    category: "Public",
    thumbnailUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A sculptural concrete pavilion that serves as both a shelter and a landmark in a public park."
  },
  {
    id: "glass-house",
    title: "Glass House",
    location: "Black Forest",
    year: "2023",
    category: "Residential",
    thumbnailUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A transparent dwelling that blurs the boundaries between interior and exterior, allowing residents to live immersed in nature."
  }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      // Toggle header transparency at midpoint
      setScrolled(scrollY > heroHeight * 0.5);
      // Hide hero permanently once it has scrolled out of view
      if (scrollY > heroHeight && showHero) {
        setShowHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header isTransparent={!scrolled && showHero} />
      
      <main className="relative">
        {/* Hero Image - Full Screen (hides when scrolled past) */}
        {showHero && (
        <div 
          ref={heroRef}
          className="h-screen w-full relative overflow-hidden bg-noto-lightgray flex items-center justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
            alt="NOTO Architecture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        )}
        
        {/* Irregular Projects Grid - space added above tiles */}
        <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-background">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
              {/* First column */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-6">
                <ImageGridItem project={projects[0]} aspectRatio="portrait" />
                <ImageGridItem project={projects[3]} aspectRatio="square" />
              </div>
              
              {/* Second column */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-6">
                <ImageGridItem project={projects[1]} aspectRatio="landscape" />
                <ImageGridItem project={projects[4]} aspectRatio="portrait" />
              </div>
              
              {/* Third column */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-6">
                <ImageGridItem project={projects[2]} aspectRatio="square" />
                <ImageGridItem project={projects[5]} aspectRatio="landscape" />
              </div>
            </div>
          </div>
        </section>
      </main>
     
      <Footer />
    </div>
  );
};

export default Index;
