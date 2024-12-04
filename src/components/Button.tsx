type ButtonProps = {
  ButtonText: string;
  ButtonLink?: string;
  className?: string;
};

const Button = ({ ButtonText, className, ButtonLink }: ButtonProps) => {
  return (
    <div className={`flex ${className}`}>
      <a
        href={ButtonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
      >
        {ButtonText}
      </a>
    </div>
  );
};

export default Button;
