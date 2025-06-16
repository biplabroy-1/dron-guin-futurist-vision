interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  subtitleClassName
}: SectionTitleProps) => {
  return (    <div className={`mb-8 ${centered ? 'text-center' : ''} animate-fade-in-up`}>
      <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className=` text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed {subtitleClassName}`>
          {subtitle}
        </p>
      )}
    </div>
  );
};