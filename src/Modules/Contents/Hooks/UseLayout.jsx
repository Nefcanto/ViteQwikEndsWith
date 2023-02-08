import { useLocation } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'

const useLayout = async (key) => {

    const layout = await getFromCacheOrApi(`/layout/data?key=${key}&locale=null`)

    return layout
}

export default useLayout
