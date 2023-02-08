import usePage from './UsePage'
import useSections from './UseSections'

const usePageSections = async (key) => {
    const page = await usePage(key)
    const sections = useSections(page)
    return sections
}

export default usePageSections
