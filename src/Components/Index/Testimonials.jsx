import {
    component$,
    useClientEffect$,
} from '@builder.io/qwik'
import Swiper from 'swiper'
import 'swiper/css'
import {
    Image,
    lg,
    md,
} from 'Base'
import {
    Supertitle,
    Title,
} from 'Shared'

export const star = (i, filled) => <svg
    key={i}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    class="w-5 h-5"
>
    <path
        class={'text-[#ffce39] ' + (filled && 'fill-[#ffce39]')}
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
</svg>

export const Slide = ({ item }) => {

    console.log(lg)

    return <div class="swiper-slide">
        <div
            class="pb-10 rounded text-center bg-gray-50 pt-6"
        >
            <div class="flex gap-0.5 justify-center">
                {
                    [...Array(5).keys()].map(i => star(i, (i + 1) < (item.rating * 1)))
                }
            </div>
            <p class="p-4 pt-2 leading-7 pb-16 italic font-catamaran font-light tracking-wide">{item.quote}</p>
            <Image
                imageClass='w-24 h-24 rounded-full m-auto -mt-8 border-[5px] border-white border-b-cta-hover border-l-cta-hover'
                src={item.image}
                alt={item.name + ' ' + item.job}
            />
            <div class="font-black text-lg mt-6 text-slate-800">{item.name}</div>
            <div class="text-sm mt-2 text-slate-600 ">{item.job}</div>
        </div>
    </div>
}

const Testimonials = component$(({
    items,
    supertitle,
    title,
}) => {

    useClientEffect$(() => {
        console.log('hi')
        const swiper = new Swiper('.swiper', {
            loop: true,
            breakpoints: {
                [md]: {
                    slidesPerView: 2
                },
                [lg]: {
                    slidesPerView: 3
                }
            },
            pagination: {
                el: '.swiper-pagination',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    })

    return <div class="testimonials py-20 mx-4 sm:mx-16 md:mx-8 lg:mx-10 xl:mx-20 ">
        <div class="flex flex-col items-center mb-10">
            <Supertitle>{supertitle}</Supertitle>
            <Title>{title}</Title>
        </div>
        <div
            class="max-w-screen-xl select-none cursor-grab mx-auto "
        >
            <div class="swiper">
                <div class="swiper-wrapper">
                    {
                        items?.map(item => <Slide key={item.id} item={item} />)
                    }
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <div class="swiper-scrollbar"></div>
            </div>
        </div>
    </div>
})

export default Testimonials
