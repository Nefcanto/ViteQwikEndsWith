const Image = ({
    alt,
    imageClass,
    containerClass,
    src,
}) => {

    const getContainerSizeBasedOnTailwindClassesToPreventCls = () => {

    }

    const getImageSizeBasedOnCurrentBreakpoint = () => {

    }

    return <div
        class={containerClass || ""}
    >
        <img
            srcset={
                `${src}?width=360 360w, ` +
                `${src}?width=640 640w, ` +
                `${src}?width=768 768w, ` +
                `${src}?width=1024 1024w, ` +
                `${src}?width=1280 1280w, ` +
                `${src}?width=1536 1536w`
            }
            src={src}
            class={(
                (imageClass?.indexOf('object-') > -1 || imageClass?.indexOf('bg-') > -1)
                    ?
                    ''
                    : ' w-full h-full object-cover ') + (imageClass || "")
            }
            alt={alt || ''}
        />
    </div>
}

export default Image
