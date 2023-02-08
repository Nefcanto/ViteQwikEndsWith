import { component$ } from '@builder.io/qwik'
import { Cart } from 'Orders'

const CartPage = component$(async () => {

    const { Cart: RunnableCart } = await import('OrdersParts').catch(reason => console.error(reason)) || {}

    return RunnableCart
        ?
        <RunnableCart />
        :
        <Cart />
})

export default CartPage
