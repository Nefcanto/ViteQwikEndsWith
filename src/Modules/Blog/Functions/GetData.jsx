import { loader$ } from '@builder.io/qwik-city'
import { getFromCacheOrApi } from 'Base'

const validPaths = [
    '/blog',
    '/blog/',
    '/blog/2',
    '/blog/2/',
    '/blog/tag/slug',
    '/blog/tag/slug/',
    '/blog/tag/slug/2',
    '/blog/tag/slug/2/'
]

const getData = loader$(async ({
    abort,
    cookie,
    next,
    params,
    platform,
    request,
    response,
    url,
}) => {

    const { slug, pageNumber } = params || {}

    const { pathname } = url

    var url = '/blog/data?'

    let matches = /\/blog(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            url += `&pageNumber=${pageNumber.replace('/', '')}`
        }
    }
    else {

        const secondSegments = ['category', 'tag', 'author', 'search']

        if (pathname.split('/').length >= 2 && !secondSegments.includes(pathname.split('/')[2])) {
            response.status = 404
            return
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/blog/${segment}`)) {
                matches = new RegExp(`(?<=\\/blog\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
                if (matches == null) {
                    response.status = 404
                    return
                }
                else {
                    url += `&${segment}=${encodeURI(matches[0].split('/')[0])}`
                    const pageNumber = matches[1]
                    if (pageNumber !== undefined) {
                        url += `&pageNumber=${pageNumber}`
                    }
                    break
                }
            }
        }
    }

    url = url.replace('?&', '?')

    const data = await getFromCacheOrApi(url)

    // console.log(params, response.status)
    // if (pageNumber && isNaN(pageNumber)) {
    //     console.log(pageNumber, isNaN(pageNumber))
    //     response.status = 400
    //     return
    // }

    const { seoParameters } = data

    return data
})

export { getData }
