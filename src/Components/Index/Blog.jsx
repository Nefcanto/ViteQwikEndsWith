import { component$ } from '@builder.io/qwik'
import {
    Post,
    Supertitle,
    Title,
} from 'Shared'

const Blog = component$(({
    supertitle,
    title,
    latestPosts
}) => {

    return <div class="latestPosts px-4 py-24 bg-slate-50 sm:px-16 md:px-8 lg:px-10 xl:px-20">
        <div class="max-w-screen-xl mx-auto flex flex-col items-center ">
            <Supertitle>{supertitle}</Supertitle>
            <Title>{title}</Title>
            <div class='w-full mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    latestPosts?.map(post => <Post
                        key={post.id}
                        post={post}
                    />)
                }
            </div>
        </div>
    </div>
})

export default Blog
