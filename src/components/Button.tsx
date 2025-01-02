type ButtonProps = {
  ButtonText: string;
  ButtonLink?: string;
  className?: string;
};

const Button = ({ ButtonText, className, ButtonLink }: ButtonProps) => {
  return (
    <a
      href={ButtonLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full rounded-lg bg-blue-500 px-7 py-3 text-base text-center font-medium text-white hover:bg-opacity-90 ${className}`}
    >
      {ButtonText}
    </a>
  );
};

export default Button;
