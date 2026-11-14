import { Link, type To } from "react-router-dom";

const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    tertiary: "bg-transparent hover:bg-gray-200 text-gray-700",
};

interface ButtonProps {
    variant?: keyof typeof variantClasses;
    children: React.ReactNode;
    to?: To;
}

function Button({ variant = "primary", children, to }: ButtonProps) {
    const className = `${variantClasses[variant]} min-w-lg font-bold py-3 px-6 rounded-4xl`;

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={className}>
            {children}
        </button>
    )
}

export default Button