const Cta = ({
    link,
    reverse,
    text,
    ...rest
}) => {

    return <a
        href={link}
        class={
            "inline-block text-center min-w-[9rem] py-3 rounded-sm transition duration-300 hover:shadow-md overflow-hidden " +
            (reverse
                ?
                " bg-cta-reverse text-white hover:bg-cta-hover "
                :
                " bg-white hover:bg-cta-hover hover:text-slate-100 "
            ) +
            (rest.class || "")
        }
        aria-label={text}
    >
        {text}
    </a>
}

export default Cta
