const Section = ({ title, children, className = '', ...sectionProps }) => {
  return (
    <section className={`w-full py-8 ${className}`.trim()} {...sectionProps}>
      {title ? (
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#14213D]" style={{ fontFamily: 'Georgia, Charter, serif' }}>
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
