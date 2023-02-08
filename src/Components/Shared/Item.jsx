const Item = ({ text }) => {
    return <div
        class="relative group shadow-lg shadow-slate-100 p-4 border-l-2 border-l-cta-reverse rounded-md font-bold font-dosis text-lg text-slate-700 flex items-center"
    >
        <span class="relative z-10 group-hover:text-white animation duration-500 ">{text}</span>
        <div class="absolute w-0 bg-cta-reverse h-full top-0 left-0 group-hover:w-full animation duration-500 rounded-md "></div>
    </div>
}

export default Item
