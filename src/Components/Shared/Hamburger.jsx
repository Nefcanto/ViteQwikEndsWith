const Hamburger = ({
    // onToggled,
    // open,
}) => {

    const open = false

    const stickClass = "w-6 h-[2px] bg-white transition duration-300 ease-in-out "

    return <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        // onClick={() => onToggled(!open)}
        class={"lg:hidden grid grid-cols-1 gap-[5px] transition duration-150 ease-in-out  place-items-center "}
    >
        <div class={stickClass + (open ? "rotate-45 translate-y-[6.9px]" : "")}></div>
        <div class={stickClass + (open ? "opacity-0" : "")}></div>
        <div class={stickClass + (open ? "-rotate-45 -translate-y-[6.9px]" : "")}></div>
    </button>
}

export default Hamburger
