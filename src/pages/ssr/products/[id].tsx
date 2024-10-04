import { GetServerSideProps } from 'next'

import { ProductDetails } from '@/components/ProductDetails'
import { fetchProductDetails } from '@/lib/api'
import { Product } from '@/lib/definitions'

interface ProductDetailsPageProps {
  product: Product
}

export default function ProductDetailsPage({
  product,
}: ProductDetailsPageProps) {
  return <ProductDetails product={product} method="ssr" />
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      product: await fetchProductDetails(params?.id as string),
    },
  }
}
