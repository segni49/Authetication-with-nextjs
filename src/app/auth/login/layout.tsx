const AuthLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <div className="flex items-center justify-center bg-radial text-amber-100 drop-shadow-amber-100 from-sky-400 to-blue-800 h-full">
            {children}
        </div>
    )
}

export default AuthLayout