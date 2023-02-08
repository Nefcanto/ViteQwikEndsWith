import { Element } from 'Base'

const RichText = ({
    content,
    ...rest
}) => {

    const items = JSON.parse(content)

    return <div
        class={"richText" + (rest.class || "")}
    >
        {
            items.map(item => <Element {...item} />)
        }
    </div>
}

export default RichText
