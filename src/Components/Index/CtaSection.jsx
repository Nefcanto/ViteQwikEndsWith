import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Cta,
    Description,
    Supertitle,
    Title,
} from 'Shared'

const CtaSection = component$(({
    description,
    image,
    primaryCtaLink,
    primaryCtaText,
    secondaryCtaLink,
    secondaryCtaText,
    supertitle,
    title,
}) => {

    return <div class="cta relative py-20 sm:px-16 md:px-8">
        <Image
            src={image}
            containerClass="absolute top-0 right-0 bottom-0 left-0 brightness-[0.45] h-48"
            alt={title}
        />
        <div class="relative z-10 flex flex-col items-center mx-6 text-center lg:max-w-screen-sm lg:mx-auto xl:max-w-screen-md">
            <Supertitle>{supertitle}</Supertitle>
            <Title reverse>{title}</Title>
            <Description reverse>{description}</Description>
            <div class="flex gap-4 mt-8">
                <Cta
                    reverse
                    text={primaryCtaText}
                    link={primaryCtaLink}
                />
                <Cta
                    text={secondaryCtaText}
                    link={secondaryCtaLink}
                />
            </div>
        </div>
    </div>
})

export default CtaSection
