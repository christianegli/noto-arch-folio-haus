import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getTeam, getStrapiMedia } from "../lib/strapiClient";

// Define a client-side TeamMember type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string | null;
  photoUrl: string | null;
};

// Fallback static team members with names and photos for overlay
const staticTeamMembers: { id: number; name: string; url: string }[] = [
  { id: 1, name: 'Anna Schmidt', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Thomas Weber', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Maria Krause', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Daniel Fischer', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    getTeam()
      .then(data => {
        const mapped = data.map(m => ({
          id: m.id,
          name: m.attributes.name,
          role: m.attributes.role,
          bio: m.attributes.bio,
          photoUrl: getStrapiMedia(m.attributes.photo),
        }));
        setTeamMembers(mapped);
      })
      .catch(console.error);
  }, []);

  // Prepare items to display: dynamic team or fallback static
  const displayItems =
    teamMembers.length > 0
      ? teamMembers.map(m => ({ id: m.id, name: m.name, url: m.photoUrl || '' }))
      : staticTeamMembers;
  // Limit grid to first four items for a 2x2 layout
  const gridItems = displayItems.slice(0, 4);

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      {/* Title section removed for a streamlined, single-column layout */}
      
      {/* Studio Philosophy */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            <h2 className="uppercase tracking-wide text-xl md:text-2xl">Our Approach</h2>
            <p className="text-noto-gray">
              NOTO was established in Berlin in 2010 with a commitment to creating architecture that responds 
              meaningfully to its context, serves those who inhabit it, and contributes positively to the 
              broader environment.
            </p>
            <p className="text-noto-gray">
              We approach each project through careful research and dialogue, seeking to understand the unique 
              conditions of site, program, and client aspirations. Our design process is collaborative and 
              iterative, exploring ideas through drawing, modeling, and material investigation.
            </p>
            <p className="text-noto-gray">
              We believe architecture should be both pragmatic and poetic—addressing functional needs while 
              creating spaces that engage the senses and emotions. Our work aims to achieve clarity and 
              coherence through thoughtful composition, material expression, and attention to detail.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-noto-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="uppercase tracking-wide text-xl md:text-2xl mb-12">Our Values</h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-helvetica font-light text-lg">Context & Identity</h3>
              <p className="text-noto-gray">
                We create architecture that responds sensitively to its physical, cultural, and historical context 
                while establishing its own clear identity. We believe buildings should belong to their place 
                while contributing something new to it.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-helvetica font-light text-lg">Materiality & Craft</h3>
              <p className="text-noto-gray">
                We value the tangible qualities of architecture—the materials, textures, and details that we 
                experience directly. We work closely with craftspeople and builders to achieve construction of 
                the highest quality.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-helvetica font-light text-lg">Sustainability</h3>
              <p className="text-noto-gray">
                Environmental responsibility is fundamental to our practice. We design buildings that minimize 
                resource consumption through careful orientation, efficient envelopes, and appropriate systems, 
                while creating healthy, comfortable environments for occupants.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-helvetica font-light text-lg">Functionality</h3>
              <p className="text-noto-gray">
                We believe good architecture serves its purpose well. We work to understand the needs and 
                patterns of those who will use our buildings, designing spaces that function efficiently 
                while allowing for adaptation over time.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-helvetica font-light text-lg">Collaboration</h3>
              <p className="text-noto-gray">
                Architecture is inherently collaborative. We value the input of clients, consultants, builders, 
                and users, recognizing that the best solutions emerge through open dialogue and the integration 
                of diverse perspectives.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-helvetica font-light text-lg">Thoughtful Innovation</h3>
              <p className="text-noto-gray">
                We embrace innovation that serves a purpose, whether in construction methods, spatial organization, 
                or environmental systems. Our approach balances proven solutions with thoughtful exploration of 
                new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="uppercase tracking-wide text-xl md:text-2xl mb-12">Our Team</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {gridItems.map(item => (
              <div key={item.id} className="group block">
                <div className="relative aspect-square overflow-hidden bg-noto-lightgray">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end p-6">
                    <h3 className="text-white font-helvetica font-light text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Studio Space */}
      <section className="py-16 bg-noto-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="uppercase tracking-wide text-xl md:text-2xl mb-8">Our Studio</h2>
          <p className="text-noto-gray max-w-3xl mb-12">
            Our studio is located in a converted warehouse in Berlin's Mitte district. The open-plan space 
            reflects our collaborative working process and houses our design team, model workshop, and 
            material library.
          </p>
          
          <div className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden bg-noto-lightgray">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="NOTO Studio Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-noto-lightgray">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="NOTO Team at Work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default About;
