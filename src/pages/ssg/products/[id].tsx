import { GetStaticPaths, GetStaticProps } from 'next'

import { ProductDetails } from '@/components/ProductDetails'
import { fetchProductDetails, fetchProducts } from '@/lib/api'
import { Product } from '@/lib/definitions'

interface ProductDetailsPageProps {
  product: Product
}

export default function ProductDetailsPage({
  product,
}: ProductDetailsPageProps) {
  return <ProductDetails product={product} method="ssg" />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await fetchProducts()).map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      product: await fetchProductDetails(params?.id as string),
    },
  }
}
