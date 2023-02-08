import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Cta,
    Description,
    Supertitle,
    Title,
} from 'Shared'

const Skills = component$(({
    boastNumber,
    boastText,
    ctaLink,
    ctaText,
    description,
    image,
    items,
    supertitle,
    title,
}) => {

    return <div class='skills bg-slate-50'>
        <div class="max-w-screen-xl mt-28 pt-36 px-4 pb-28 sm:px-16 md:px-8 lg:grid lg:grid-cols-2 lg:gap-20 lg:mt-16 xl:px-20 xl:mx-auto ">
            <div>
                <Supertitle>{supertitle}</Supertitle>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <div class="scroll-once">
                    {
                        items?.map(item => <div
                            key={item.id}
                            class="mt-6 font-dosis relative"
                        >
                            <div class="text-cta-reverse font-semibold">{item.title}</div>
                            <div class="relative w-full h-1.5 mt-2 overflow-hidden  bg-slate-200">
                                <div
                                    class="absolute left-0 h-1.5 bg-cta-reverse blur-[0.5px] transition-all duration-1000 -translate-x-full"
                                    style={{ width: `${item.subtitle * 1}%` }}
                                    in="translate-x-0"
                                    out="-translate-x-full"
                                >
                                </div>
                            </div>
                            <div class="absolute top-0 text-sm text-cta-reverse right-0 ">{item.subtitle}%</div>
                        </div>)
                    }
                </div>
                <Cta
                    text={ctaText}
                    link={ctaLink}
                    reverse
                    class="mt-10 "
                />
            </div>
            <div class="relative">
                <Image
                    src={image}
                    containerClass="w-full aspect-square mt-10 "
                    alt={title}
                />
                <div class="bg-white border-b-4 border-b-blue-400 p-6 aspect-video absolute bottom-8 left-8 lg:-left-20 lg:bottom-16 ">
                    <div class="text-5xl font-bold text-red-400">{boastNumber}</div>
                    <div class="uppercase text-md font-semibold mt-4">{boastText}</div>
                </div>
            </div>
        </div>
    </div>
})

export default Skills
