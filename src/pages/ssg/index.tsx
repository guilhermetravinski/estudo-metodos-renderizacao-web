import { GetStaticProps } from 'next'

import { ProductsGrid } from '@/components/ProductsGrid'
import { fetchProducts } from '@/lib/api'
import { Product } from '@/lib/definitions'

interface ProductsPageProps {
  products: Product[]
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return <ProductsGrid products={products} method="ssg" />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: await fetchProducts(),
    },
  }
}
