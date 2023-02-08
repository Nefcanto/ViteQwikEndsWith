import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
// import CountUp from 'react-countup'

const Stats = component$(({
    image,
    items,
}) => {

    return <div class="stats relative font-dosis py-28"
        style={{
            position: 'relative',
            height: 'auto',
            width: '100%',
            clipPath: 'inset(0 0 0 0)',
        }}
    >
        <div
            style={{
                position: 'fixed',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
            }}
        >
            <Image
                src={image}
                imageClass="brightness-50"
                alt="Our stats"
            />
        </div>
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:mx-16 relative z-10 font-dosis text-white max-w-screen-xl xl:mx-auto ">
            {
                items?.map(item => <div
                    key={item.id}
                    class="flex flex-col items-center justify-center gap-3"
                >
                    <div class="text-5xl font-bold ">
                        {/* <CountUp end={item.title * 1} duration={1} enableScrollSpy /> */}
                        <span>{item.number}{item.unit}</span>
                    </div>
                    <div class="text-xl font-semibold text-center">{item.title}</div>
                </div>)
            }
        </div>
    </div>
})

export default Stats
