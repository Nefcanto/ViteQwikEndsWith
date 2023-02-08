const Footer = (props) => {

    const {
        footerAbout,
        footerContact,
        copyright,
        footerServices,
        footerLinks,
    } = props

    const titleClass = "font-dosis font-bold text-xl pb-2 border-b border-b-gray-500 "
    const linkClass = "hover:text-cta-reverse transition-all duration-500"
    // const linkClass = "hover:text-"

    return <div class="footer bg-darker text-light pt-32 ">
        <div class="pb-48 md:pb-32 px-6 sm:px-14 sm:gap-8 xl:px-20 ">
            <div class="max-w-screen-xl mx-auto grid gap-8 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-6 xl:gap-10">
                <div class="lg:col-span-2">
                    <h3 class={titleClass}>{footerAbout?.title}</h3>
                    <p class="font-catamaran mt-4 leading-7 ">{footerAbout?.description}</p>
                    <div class="mt-6 flex gap-4 ">
                        {
                            footerAbout?.items.map(item => <div
                                key={item.id}
                                class=""
                            >
                                <div class="w-9 h-9 bg-white text-cta-reverse fill-cta-reverse rounded-full grid place-items-center hover:bg-cta-reverse hover:fill-white transition duration-500 ">
                                    <div
                                        class="w-4 h-4"
                                        dangerouslySetInnerHTML={item.svg}
                                    />
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <h3 class={titleClass}>{footerServices?.title}</h3>
                    <div class="flex flex-col gap-4 mt-4 ">
                        {
                            footerServices?.items?.map(link => <div
                                key={link.id}
                                class="font-catamaran "
                            >
                                <a
                                    href={link.link}
                                    className={linkClass}
                                >
                                    {link.title}
                                </a>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <h3 class={titleClass}>{footerLinks?.title}</h3>
                    <div class="flex flex-col gap-4 mt-4 ">
                        {
                            footerLinks?.items.map(link => <div
                                key={link.id}
                                class="font-catamaran "
                            >
                                <a
                                    href={link.link}
                                    className={linkClass}
                                >
                                    {link.title}
                                </a>
                            </div>)
                        }
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <h3 class={titleClass}>{footerContact?.title}</h3>
                    <div class="flex flex-col gap-4 mt-4 ">
                        {
                            footerContact?.items.map(item => <div
                                key={item.id}
                                class="font-catamaran flex gap-4 "
                            >
                                <div
                                    class="w-6 h-6 fill-white "
                                    dangerouslySetInnerHTML={item.svg}
                                />
                                <div class="flex flex-col gap-1">
                                    <span class="font-dosis font-bold">{item.title}</span>
                                    {
                                        item.link
                                            ?
                                            <a
                                                href={item.link}
                                                class={linkClass}
                                            >
                                                {item.value}
                                            </a>
                                            :
                                            <span>{item.value}</span>
                                    }
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom bg-dark p-12 text-gray-300 font-catamaran md:py-8 xl:px-20">
            <div class="max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between ">
                <div
                    class="text-sm"
                    dangerouslySetInnerHTML={copyright?.message}
                />
                <div class="flex mt-1 ">
                    {
                        copyright?.items.map((item, index) => <a
                            href={item.link}
                            key={item.id}
                            class={"flex items-center " + linkClass + (index != copyright.items.length - 1 && "after:content-[''] after:w-[0.1px] after:h-4 after:inline-block after:bg-gray-300 after:mx-2.5")}
                        >
                            {item.text}
                        </a>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Footer
