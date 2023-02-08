import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Description,
    Item,
    Supertitle,
    Title,
} from 'Shared'

const WhyChooseUs = component$(({
    description,
    image,
    items,
    supertitle,
    title,
}) => {

    return <div class="chooseUs pt-24 pb-20 sm:mx-16 md:mx-8 lg:mx-10 xl:mx-20 ">
        <div class="mx-4 lg:grid lg:grid-cols-2 lg:place-items-center max-w-screen-xl xl:mx-auto">
            <Image
                src={image}
                containerClass="w-full aspect-square mx-auto mb-8 sm:w-4/5 lg:ml-0 lg:w-full"
                alt={title}
            />
            <div>
                <Supertitle>{supertitle}</Supertitle>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <div class="grid gap-3 mt-10 md:grid-cols-2 md:gap-4 md:gap-x-6">
                    {
                        items?.map(item => <Item
                            key={item.id}
                            text={item.title}
                        />)
                    }
                </div>
            </div>
        </div>
    </div>
})

export default WhyChooseUs
