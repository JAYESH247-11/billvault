const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    primary: 'border-transparent bg-[#9B1C2E] text-white hover:bg-[#7d1525]',
    secondary: 'border-[#D5DCE5] bg-white text-[#14213D] hover:bg-[#F3F6F8]',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
