import {
    component$,
} from '@builder.io/qwik'
import { Image } from 'Base'
import { Cta } from 'Shared'

const Hero = component$(({
    description,
    image,
    primaryCtaLink,
    primaryCtaText,
    secondaryCtaLink,
    secondaryCtaText,
    title,
}) => {

    return <div
        class='hero -mt-20 pt-48 flex flex-col items-center lg:pt-48  '
        style={{ background: 'linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc)' }}
    >
        <div class="w-full px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto ">
            <div>
                <h1 class="mx-6 font-dosis text-4xl text-slate-100 font-bold text-center tracking-wide leading-[3rem] lg:text-start lg:mx-0 lg:text-6xl lg:leading-[6rem]">
                    {title}
                </h1>
                <p class="mt-6 mx-4 text-slate-200 text-md text-center font-catamaran leading-8 lg:text-start lg:mx-0">
                    {description}
                </p>
                <div class="flex gap-2 md:gap-4 lg:gap-6 mt-10 mx-0 justify-center lg:justify-start">
                    <Cta
                        text={primaryCtaText}
                        link={primaryCtaLink}
                    />
                    <Cta
                        text={secondaryCtaText}
                        link={secondaryCtaLink}
                        reverse
                    />
                </div>
            </div>
            <Image
                containerClass="w-full aspect-square mt-16 sm:w-4/5 sm:mx-auto md:w-2/3 lg:w-full xl:w-4/5"
                src={image}
                alt={title}
                priority
            />
        </div>
        <Image
            containerClass="w-full h-20 -mb-1 mt-10 sm:h-36 md:h-44 sm:mt-0 lg:h-56 xl:h-72 2xl:h-96"
            src='/images/hero-bottom.png'
            alt={title}
        />
    </div>
})

export default Hero
