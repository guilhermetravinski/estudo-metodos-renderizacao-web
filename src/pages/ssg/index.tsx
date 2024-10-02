import { GetStaticProps } from 'next'

import { ProductsGrid } from '@/components/ProductsGrid'
import { Product } from '@/lib/definitions'
import { traduzirProdutos } from '@/lib/utils'

interface ProductsPageProps {
  products: Product[]
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return <ProductsGrid products={products} method="ssg" />
}

export const getStaticProps: GetStaticProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://fakestoreapi.com/products')
  const products = (await response.json()) as Product[]
  const translatedProducts = traduzirProdutos(products)

  return {
    props: {
      products: translatedProducts,
    },
  }
}
