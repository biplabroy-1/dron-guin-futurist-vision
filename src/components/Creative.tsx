import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, Globe } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { SectionContainer } from './ui/section-container';
import { SectionTitle } from './ui/section-title';

interface CreativeSkill {
  title: string;
  description: string;
}

const creativeSkills: CreativeSkill[] = [
  {
    title: "Music Production",
    description: "A decade of creating music as art and recreation, exploring sound as a medium for expression and emotion."
  },
  {
    title: "Film Making",
    description: "Passionate about storytelling through visual media, with expertise in camera work and lighting techniques."
  },
  {
    title: "Camera & Lighting",
    description: "Technical expertise in visual composition, understanding how light and perspective shape reality."
  },
  {
    title: "Culinary Arts",
    description: "Cooking as a personal hobby, finding joy and creativity in the art of preparing and sharing food."
  }
];

const socialLinks = [
  {
    icon: <Instagram size={32} />,
    url: "https://www.instagram.com/dron.guin/",
    label: "Instagram"
  },
  {
    icon: <Facebook size={32} />,
    url: "https://www.facebook.com/dron.guin.1",
    label: "Facebook"
  },
  {
    icon: <Linkedin size={32} />,
    url: "https://www.linkedin.com/in/dron-g-64a706209/",
    label: "LinkedIn"
  },
  {
    icon: <Twitter size={32} />,
    url: "https://twitter.com/dron_guin54527",
    label: "Twitter"
  },
  {
    icon: <Mail size={32} />,
    url: "mailto:founder@globaltfn.tech",
    label: "Email"
  },
  {
    icon: <Phone size={32} />,
    url: "tel:9123793073",
    label: "Phone"
  },
  {
    icon: <Globe size={32} />,
    url: "https://orcid.org/0009-0002-5273-9563",
    label: "Website"
  }
];

const Creative = () => {
  useParallax('creative-bg', { speed: 0.3 });

  return (
    <SectionContainer
      id="creative"
      backgroundImage="/src/images/milky-way-8149815.jpg"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="Creative Vision"
          subtitle="Beyond technology and business, I find inspiration and balance through various creative outlets that fuel my imagination and perspective."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {creativeSkills.map((skill, index) => (
            <div 
              key={index}
              className="glass-effect neon-border p-6 transition-all duration-300 hover:border-primary/50"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Creative;
