interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({
  title,
  subtitle,
  centered = true
}: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} animate-fade-in-up`}>
      <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};