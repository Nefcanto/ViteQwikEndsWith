import {
    component$,
    Resource,
    Slot,
} from '@builder.io/qwik'
import { loader$ } from '@builder.io/qwik-city'
import { useLayoutSections } from 'Contents'
import { useMenu } from 'Navigation'
import { useLocale } from 'Globalization'
import {
    Footer,
    Top,
} from 'Shared'

export const getData = loader$(async () => {

    const localeData = await useLocale()
    const menuItems = await useMenu()
    const layoutSections = await useLayoutSections('main')

    var totalData = {
        ...localeData,
        ...layoutSections,
        ...menuItems
    }
    return totalData
})

export default component$(() => {

    const data = getData.use().value

    return <>
        <Top
            menuItems={data?.menuItems}
        />
        {/* <div>{data?.locale?.localKey}</div> */}
        <main>
            <section>
                <Slot />
            </section>
        </main>
        <footer>
            <Footer {...data} />
        </footer>
        <script src="/scripts/scroll.js"></script>
    </>
})
