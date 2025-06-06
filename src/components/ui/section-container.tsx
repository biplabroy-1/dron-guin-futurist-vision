import { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  enableParallax?: boolean;
}

export const SectionContainer = ({
  id,
  children,
  className = '',
  backgroundImage,
  enableParallax = true,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <div
          id={`${id}-bg`}
          className="absolute inset-0 w-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: enableParallax ? 'fixed' : 'scroll',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transform: 'translateZ(0)',
            willChange: 'transform',
            height: '100%',
          }}
        />
      )}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};