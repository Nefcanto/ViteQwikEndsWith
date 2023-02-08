const Element = ({
    attributes,
    children,
    text,
    type,
}) => {
    if (text) {
        return <p>{text}</p>
    }

    const childElements = children?.map(child => <Element {...child} />)

    switch (type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        default:
            return <div {...attributes}>{childElements}</div>
    }
}

export default Element
