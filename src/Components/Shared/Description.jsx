const Description = ({
    children,
    reverse,
}) => {
    return <p class={"leading-7 mt-6 text-[15px] font-catamaran lg:text-lg " + (reverse ? " text-white " : " text-slate-500 ")}>{children}</p>
}

export default Description
