import { Mail, MessageCircle, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on building the future? Whether you're interested in AI, 
            futurism, or just want to connect with a fellow creator, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-space font-bold mb-8 text-foreground">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</h4>
                  <p className="text-muted-foreground text-sm">Professional inquiries & collaborations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <MessageCircle className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Direct Message</h4>
                  <p className="text-muted-foreground text-sm">Quick questions & networking</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <Globe className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Azmth Technologies AI</h4>
                  <p className="text-muted-foreground text-sm">Business partnerships & AI projects</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <h4 className="font-space font-bold text-primary mb-3">What interests you?</h4>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• AI ecosystem development</li>
                <li>• Futurism philosophy discussions</li>
                <li>• Creative collaborations</li>
                <li>• Technology partnerships</li>
                <li>• Understanding life's purpose</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-card p-8 border border-border">
              <h4 className="text-2xl font-space font-bold text-foreground mb-6">
                Ready to Build the Future?
              </h4>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                If you're someone who believes in the power of technology to make the world 
                a better place, if you're curious about the deeper questions of existence, 
                or if you simply want to connect with good humans who are working toward 
                positive change - let's talk.
              </p>

              <div className="space-y-4">
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span>Start a Conversation</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                
                <button className="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-4 font-medium transition-all duration-300">
                  Learn About Azmth Technologies AI
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground text-sm mb-2">
                  "When people connect with me, they can be assured of one thing - 
                  they are good humans."
                </p>
                <p className="text-primary font-medium text-sm">- Dron Guin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
