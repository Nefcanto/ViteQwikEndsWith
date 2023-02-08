const DesktopMenu = ({ menuItems }) => {

    return <div class="desktopMenu hidden lg:flex gap-6">
        {
            menuItems?.map(item => <div
                key={item.id}
                class="text-white hover:text-cta-reverse transition-colors "
            >
                <a href={item.url}>{item.title}</a>
            </div>)
        }
    </div>
}

export default DesktopMenu
