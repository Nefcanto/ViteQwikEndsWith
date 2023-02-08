import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Supertitle,
    Title,
} from 'Shared'

const Brands = component$(({
    items,
    supertitle,
    title,
}) => {

    return <div class='brands py-20 mx-4 md:mx-16 lg:mx-10 xl:mx-20'>
        <div class="max-w-screen-xl mx-auto flex flex-col items-center ">
            <Supertitle>{supertitle}</Supertitle>
            <Title>{title}</Title>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 sm:gap-x-16 flex-wrap mt-8 place-items-center lg:flex lg:mx-auto lg:justify-center xl:mt-16 ">
                {
                    items?.map(item => <div
                        key={item.id}
                        class=""
                    >
                        <Image
                            src={item.image}
                            containerClass="w-36 sm:w-48 md:w-36 aspect-video lg:w-32 xl:w-36"
                            alt={item.title}
                        />
                    </div>)
                }
            </div>
        </div>
    </div>
})

export default Brands
