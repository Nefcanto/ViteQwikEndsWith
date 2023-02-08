import Cta from './Cta'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import Hamburger from './Hamburger'
import Branding from './Branding'

const Top = ({
    menuItems
}) => {

    // const [open, setOpen] = useState(false)

    return <>
        <div class="top bg-transparent h-20 flex items-center justify-between p-4 text-gray-100 lg:px-10 max-w-screen-xl xl:px-20 xl:mx-auto">
            <Branding />
            <Hamburger
            // open={open}
            // onToggled={e => setOpen(e)}
            />
            <DesktopMenu menuItems={menuItems} />
            <Cta
                text='Get your site now'
                link='/contact'
                class="hidden lg:block lg:px-8"
                reverse
            />
        </div>
        <MobileMenu
            menuItems={menuItems}
        // open={open}
        // onNavigated={() => setOpen(false)}
        />
    </>
}

export default Top
