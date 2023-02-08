const MobileMenu = ({
    onNavigated,
    open,
    menuItems,
}) => {

    return <div class="mobileMenu lg:hidden shadow-lg shadow-black absolute right-2 left-2 bg-white z-10 ">

        <div class={"bg-white text-gray-600 transition-all overflow-auto duration-500 " + (open ? 'max-h-72' : 'max-h-0')}>
            {
                menuItems?.map(item => <div
                    key={item.id}
                    class="px-4 py-4 border-b last:border-b-0"
                >
                    <a
                        href={item.url}
                        onClick={() => {
                            if (onNavigated instanceof Function) {
                                onNavigated()
                            }
                        }}
                    >
                        {item.title}
                    </a>
                    {item.children && item.children.length > 0 &&
                        <span on>+</span>}
                    {item.children && item.children.length > 0 &&
                        menuItems?.map(item => <div
                            key={item.id}
                            class="px-4 py-4 border-b last:border-b-0"
                        >
                            {item.title}

                        </div>)
                    }
                </div>)
            }
        </div>

    </div>
}

export default MobileMenu
