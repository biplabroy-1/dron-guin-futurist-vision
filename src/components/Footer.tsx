import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, Globe } from 'lucide-react';

const socialLinks = [
  {
    icon: <Instagram size={28} />,
    url: "https://www.instagram.com/dron.guin/",
    label: "Instagram"
  },
  {
    icon: <Facebook size={28} />,
    url: "https://www.facebook.com/dron.guin.1",
    label: "Facebook"
  },
  {
    icon: <Linkedin size={28} />,
    url: "https://www.linkedin.com/in/dron-g-64a706209/",
    label: "LinkedIn"
  },
  {
    icon: <Twitter size={28} />,
    url: "https://twitter.com/dron_guin54527",
    label: "Twitter"
  },
  {
    icon: <Mail size={28} />,
    url: "mailto:founder@globaltfn.tech",
    label: "Email"
  },
  {
    icon: <Phone size={28} />,
    url: "tel:9123793073",
    label: "Phone"
  },
  {
    icon: <Globe size={28} />,
    url: "https://orcid.org/0009-0002-5273-9563",
    label: "Website"
  }
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 border-b border-border pb-8">
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

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          <div>
            <h3 className="text-xl font-space font-bold mb-4 text-white">DRON GUIN</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Futurist, AI Visionary, and Creator on a mission to discover why life was created 
              while building technologies that make the world a better place.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Focus Areas</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              {["Artificial Intelligence", "Futurism Philosophy", "Deep Technology", "Creative Arts"].map((area, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              {["Azmth Technologies AI", "AI Ecosystem Development", "Global Impact Solutions", "Human-Centric Innovation"].map((company, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Dron Guin. Building tomorrow, today.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-sm text-gray-400">
            <span>Made with purpose</span>
            <span className="text-primary">•</span>
            <span>Designed for the future</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
