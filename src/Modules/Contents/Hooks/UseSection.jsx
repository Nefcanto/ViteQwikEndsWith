import { getFromCacheOrApi } from 'Base'

const useSection = async (key) => {

    const section = await getFromCacheOrApi(`/section/getByKey?key=${key}`)

    return section
}

export default useSection
