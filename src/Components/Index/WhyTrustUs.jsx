import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Description,
    Item,
    Supertitle,
    Title,
} from 'Shared'

const WhyTrustUs = component$(({
    description,
    image,
    items,
    supertitle,
    title,
}) => {

    return <div class="trustUs pt-24 pb-28 mx-4 sm:mx-16 md:mx-8 lg:mx-10 xl:mx-20">
        <div class="max-w-screen-xl mx-auto lg:grid lg:gap-8 lg:grid-cols-2  lg:place-items-center ">
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
            <Image
                src={image}
                containerClass="w-full aspect-square mx-auto mt-8 sm:w-4/5 xl:w-full lg:mr-0 lg:w-full"
                alt={title}
            />
        </div>
    </div>
})

export default WhyTrustUs
