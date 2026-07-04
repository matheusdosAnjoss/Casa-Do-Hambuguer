type ButtonType = {
  title: string;
  variant: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  // const default = "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-[#C92A0E] p-1 text-sm font-bold text-white"

  // const outline = "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-white p-1 text-sm font-bold text-[#C92A0E]"

  const buttonVariant = () => {
    if (variant == "default") {
      return "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-[#C92A0E] p-1 text-sm font-bold text-white";
    } else if (variant == "outline") {
      return "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-white p-1 text-sm font-bold text-[#C92A0E]";
    }
  };

  return <button {...props} className={buttonVariant()}>{title}</button>;
};

export default Button;
