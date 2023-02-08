import {
    component$,
    Slot,
} from '@builder.io/qwik'

const Supertitle = component$((props) => {
    return <div class={"font-dosis text-supertitle uppercase tracking-tight font-semibold sm:text-lg " + (props.class || "")}>
        <Slot />
    </div>
})

export default Supertitle
