const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    tertiary: "bg-transparent hover:bg-gray-200 text-gray-700",
};

interface ButtonProps {
    variant?: keyof typeof variantClasses;
    children: React.ReactNode;
}

function Button({ variant = "primary", children}: ButtonProps) {
    return (
        <button className={`${variantClasses[variant]} min-w-lg font-bold py-3 px-6 rounded-4xl`}>
            {children}
        </button>
    )
}

export default Button