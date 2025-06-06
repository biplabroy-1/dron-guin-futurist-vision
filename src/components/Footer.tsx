const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-space font-bold text-gradient mb-4">DRON GUIN</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Futurist, AI Visionary, and Creator on a mission to discover why life was created 
              while building technologies that make the world a better place.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Focus Areas</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                Artificial Intelligence
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                Futurism Philosophy
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                Deep Technology
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                Creative Arts
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                Azmth Technologies AI
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                AI Ecosystem Development
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                Global Impact Solutions
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                Human-Centric Innovation
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Dron Guin. Building tomorrow, today.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
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
