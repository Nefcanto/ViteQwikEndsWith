import {
    component$,
    Slot,
} from '@builder.io/qwik'

const Title = component$(({ reverse }) => {
    return <h2 class={"font-dosis font-black mt-4 mb-3 lg:leading-[3.5rem] text-3xl sm:text-4xl  xl:text-[38px] " + (reverse ? " text-white drop-shadow " : " text-slate-800")}>
        <Slot />
    </h2>
})

export default Title
