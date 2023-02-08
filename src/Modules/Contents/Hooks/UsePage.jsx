import { useLocation } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'

const usePage = async (key) => {

    const page = await getFromCacheOrApi(`/page/data?key=${key}&locale=null`)

    return page
}

export default usePage
