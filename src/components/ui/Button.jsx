
// eslint-disable-next-line react/prop-types
const Button = ({ title, className }) => {
    return (
        <>
            <button className={`bg-black/90 px-3 py-2 rounded-lg text-white shadow-md w-fit ${className}`}>
                {title}
            </button>
        </>
    )
}

export default Button