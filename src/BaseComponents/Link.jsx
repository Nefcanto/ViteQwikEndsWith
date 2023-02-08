import { Slot } from '@builder.io/qwik'

const Link = ({
    href,
    ...rest
}) => {
    return <a
        type='link'
        href={href}
        {...rest}
    >
        <Slot />
    </a>
}

export default Link
