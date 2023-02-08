import {
    Image,
} from 'Base'
import { Text } from 'Forms'
import { TopColor } from 'Shared'

export default () => {

    const style = "px-4 py-3 border border-slate-400 rounded-sm "

    return (
        <>
            <TopColor />
            <Image
                src="https://picsum.photos/300/200"
            />
            <Text />
            <form class="my-10 mx-6 ">
                <div></div>
                <input
                    type='text'
                    class={style}
                />
            </form>
        </>
    )
}

export const head = {
    title: 'Contact',
}
