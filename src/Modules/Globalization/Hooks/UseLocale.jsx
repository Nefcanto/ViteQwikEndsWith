import { getFromCacheOrApi } from 'Base'

const useLocale = async () => {
    const localeData = await getFromCacheOrApi(`/locale/data`)
    return localeData
}

export default useLocale
