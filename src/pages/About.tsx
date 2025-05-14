
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    name: "Anna Schmidt",
    role: "Founding Partner",
    bio: "Anna founded NOTO Architecture in 2010 after working with leading firms in Berlin and London. She holds a Master's degree from TU Berlin and has lectured at various architecture schools across Europe. Her work focuses on creating spaces that respond sensitively to context while pushing boundaries of material expression.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Thomas Weber",
    role: "Partner",
    bio: "Thomas joined NOTO in 2012 and became partner in 2016. His background in both architecture and engineering brings technical expertise to the practice's design process. He has led many of the firm's most complex projects and has a particular interest in sustainable building technologies.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Maria Krause",
    role: "Design Director",
    bio: "Maria has been with NOTO since 2014. With a background in both architecture and interior design, she brings a holistic approach to spatial design. Her work is characterized by attention to detail and a deep understanding of the relationship between buildings and their users.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Daniel Fischer",
    role: "Project Architect",
    bio: "Daniel joined NOTO in 2018 after working in Vienna and Copenhagen. He has extensive experience in cultural and public buildings, with a focus on creating inclusive spaces that foster community engagement. His approach combines rigorous technical resolution with poetic spatial qualities.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      <section className="pt-32 pb-12">
        <div className="content-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">About NOTO</h1>
        </div>
      </section>
      
      {/* Studio Philosophy */}
      <section className="pb-24">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[4/3] overflow-hidden bg-noto-lightgray">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="NOTO Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl">Our Approach</h2>
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
        </div>
      </section>
      
      {/* Values */}
      <section className="py-24 bg-noto-white">
        <div className="content-container">
          <h2 className="text-xl md:text-2xl mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <div className="space-y-4">
              <h3 className="font-playfair text-lg">Context & Identity</h3>
              <p className="text-noto-gray">
                We create architecture that responds sensitively to its physical, cultural, and historical context 
                while establishing its own clear identity. We believe buildings should belong to their place 
                while contributing something new to it.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-playfair text-lg">Materiality & Craft</h3>
              <p className="text-noto-gray">
                We value the tangible qualities of architecture—the materials, textures, and details that we 
                experience directly. We work closely with craftspeople and builders to achieve construction of 
                the highest quality.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-playfair text-lg">Sustainability</h3>
              <p className="text-noto-gray">
                Environmental responsibility is fundamental to our practice. We design buildings that minimize 
                resource consumption through careful orientation, efficient envelopes, and appropriate systems, 
                while creating healthy, comfortable environments for occupants.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-playfair text-lg">Functionality</h3>
              <p className="text-noto-gray">
                We believe good architecture serves its purpose well. We work to understand the needs and 
                patterns of those who will use our buildings, designing spaces that function efficiently 
                while allowing for adaptation over time.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-playfair text-lg">Collaboration</h3>
              <p className="text-noto-gray">
                Architecture is inherently collaborative. We value the input of clients, consultants, builders, 
                and users, recognizing that the best solutions emerge through open dialogue and the integration 
                of diverse perspectives.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-playfair text-lg">Thoughtful Innovation</h3>
              <p className="text-noto-gray">
                We embrace innovation that serves a purpose, whether in construction methods, spatial organization, 
                or environmental systems. Our approach balances proven solutions with thoughtful exploration of 
                new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-24">
        <div className="content-container">
          <h2 className="text-xl md:text-2xl mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-noto-lightgray">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <h3 className="font-playfair text-lg">{member.name}</h3>
                  <p className="text-sm text-noto-gray mb-2">{member.role}</p>
                  <p className="text-noto-gray">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Studio Space */}
      <section className="py-24 bg-noto-white">
        <div className="content-container">
          <h2 className="text-xl md:text-2xl mb-8">Our Studio</h2>
          <p className="text-noto-gray max-w-3xl mb-12">
            Our studio is located in a converted warehouse in Berlin's Mitte district. The open-plan space 
            reflects our collaborative working process and houses our design team, model workshop, and 
            material library.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
