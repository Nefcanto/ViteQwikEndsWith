import { component$ } from '@builder.io/qwik'
// import {
//     getData,
//     Layout,
// } from 'Blog'

const Blog = component$(async () => {

    console.log('blog route')

    // const data = getData.use().value

    // let RunnableLayout = null
    // try {
    //     const { Layout: TempLayout } = await import('BlogParts').catch(reason => console.error(reason)) || {}
    //     RunnableLayout = TempLayout
    // } catch (error) {
    //     console.error(error)
    // }

    // const {
    //     categories,
    //     latest,
    //     mostViewed,
    //     popular,
    //     posts,
    //     seo,
    //     tags,
    // } = data || {}

    // return RunnableLayout
    //     ?
    //     <RunnableLayout {...data} />
    //     :
    //     <Layout {...data} />
    return <h1>hi</h1>
})

export default Blog
