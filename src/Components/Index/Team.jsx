import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Supertitle,
    Title,
} from 'Shared'

const Team = component$(({
    items,
    supertitle,
    title,
}) => {

    const socialIconStyle = "scale-0 group-hover:scale-100 transition duration-500 text-5xl text-white font-black "

    return <div class='team py-20 mx-4 sm:mx-16 md:mx-8 lg:mx-10 xl:mx-20'>
        <div class="max-w-screen-xl flex flex-col items-center mx-auto">
            <Supertitle>{supertitle}</Supertitle>
            <Title>{title}</Title>
            <div class="mt-16 w-full grid md:grid-cols-2 gap-6 lg:grid-cols-4">
                {
                    items?.map(item => <div
                        key={item.id}
                        class="w-full font-dosis text-center group"
                    >
                        <div class="relative w-full aspect-square md:aspect-auto md:h-96 lg:aspect-square lg:h-auto rounded overflow-hidden">
                            <Image
                                src={item.image}
                                containerClass="w-full aspect-square md:aspect-auto md:h-96 lg:aspect-square lg:h-auto rounded group-hover:scale-110 group-hover:brightness-[0.2] transition duration-500"
                                alt={item.name}
                            />
                            <div class="absolute top-0 right-0 bottom-0 left-0 flex gap-4 justify-between m-auto w-48 h-10 items-center">
                                <div class={socialIconStyle}>F</div>
                                <div class={socialIconStyle}>T</div>
                                <div class={socialIconStyle}>I</div>
                            </div>
                        </div>
                        <div class="mt-5 font-bold text-lg text-slate-900  ">{item.name}</div>
                        <div class="text-cta-reverse font-semibold ">{item.job}</div>
                    </div>)
                }
            </div>
        </div>
    </div>
})

export default Team
