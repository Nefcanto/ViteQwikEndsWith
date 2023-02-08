import useLayout from './UseLayout'
import useSections from './UseSections'

const useLayoutSections = async (key) => {
    const layout = await useLayout(key)
    const sections = useSections(layout)
    return sections
}

export default useLayoutSections
