import { component$ } from '@builder.io/qwik'
import {
    Supertitle,
    Title,
} from 'Shared'

const Services = component$(({
    items,
    supertitle,
    title,
}) => {

    return <div class="services flex flex-col items-center mt-24 max-w-screen-xl xl:mx-auto">
        <Supertitle>{supertitle}</Supertitle>
        <Title>{title}</Title>
        <div class=" grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mx-4 sm:mx-16 md:mx-8 mt-10 lg:mx-10 xl:mx-20 ">
            {
                items?.map(item => <div
                    key={item.id}
                    class="service shadow-lg shadow-slate-300 p-8 rounded-md group hover:-translate-y-2 transition-all duration-500 "
                >
                    <div
                        class="text-icon w-[55px] aspect-square group-hover:-scale-x-100 transition-all duration-500 "
                        dangerouslySetInnerHTML={item.svg}
                    />
                    <h3 class="mt-8 font-dosis font-bold mb-6 text-xl text-slate-700 ">{item.title}</h3>
                    <p class="font-catamaran text-[15px] text-slate-500 font-medium leading-7 ">{item.description}</p>
                    <a
                        href={item.link}
                        class="text-icon underline mt-6 block font-dosis font-bold "
                    >
                        Read more
                    </a>
                </div>)
            }
        </div>
    </div>

})

export default Services
