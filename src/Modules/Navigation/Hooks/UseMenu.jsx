import { getFromCacheOrApi } from 'Base'

const useMenu = async () => {
    const data = await getFromCacheOrApi('/menu/data')
    return data
}

export default useMenu
