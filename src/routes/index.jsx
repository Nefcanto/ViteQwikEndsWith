import {
    component$,
    Resource,
} from '@builder.io/qwik'
import { loader$ } from '@builder.io/qwik-city'
import { usePageSections } from 'Contents'
import { useLatestPosts } from 'Blog'

import {
    Blog,
    Brands,
    CtaSection,
    Hero,
    Newsletter,
    Services,
    Skills,
    Stats,
    Team,
    Testimonials,
    WhyChooseUs,
    WhyTrustUs,
} from 'Index'

export const getData = loader$(async () => {

    const pageSections = await usePageSections('home')
    const latestPosts = await useLatestPosts(3)

    var totalData = {
        ...pageSections,
        latestPosts,
    }
    return totalData
})

export default component$(() => {

    const data = getData.use().value
    const {
        blog,
        customers,
        cta,
        hero,
        latestPosts,
        newsletter,
        services,
        skills,
        stats,
        team,
        testimonials,
        trustUs,
        whyUs,
    } = data

    return (
        <>
            <Hero {...hero} />
            <Services {...services} />
            <Skills {...skills} />
            <WhyChooseUs {...whyUs} />
            <WhyTrustUs {...trustUs} />
            <Stats {...stats} />
            <Testimonials {...testimonials} />
            <Team {...team} />
            <Blog {...blog} {...latestPosts} />
            <CtaSection {...cta} />
            <Brands {...customers} />
            <Newsletter {...newsletter} />
        </>
    )
})

export const head = {
    title: 'Welcome to Qwik',
}
