import { GetStaticProps } from 'next'

import Cart from '@/components/Cart'
import { fetchCart } from '@/lib/api'
import { Product } from '@/lib/definitions'

interface CartPageProps {
  products: Product[]
}

export default function CartPage({ products }: CartPageProps) {
  return <Cart products={products} method="ssg" />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: await fetchCart(),
    },
  }
}
