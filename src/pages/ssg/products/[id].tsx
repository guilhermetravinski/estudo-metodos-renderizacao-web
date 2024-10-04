import { Loader2 } from 'lucide-react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { ProductDetails } from '@/components/ProductDetails'
import { fetchProductDetails, fetchProducts } from '@/lib/api'
import { Product } from '@/lib/definitions'

interface ProductDetailsPageProps {
  product: Product
}

export default function ProductDetailsPage({
  product,
}: ProductDetailsPageProps) {
  const router = useRouter()

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span>Produto não encontrado!</span>
      </div>
    )
  }
  if (router.isFallback) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return <ProductDetails product={product} method="ssg" />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts()

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id as string

  const product = await fetchProductDetails(productId)

  if (product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
    },
  }
}
