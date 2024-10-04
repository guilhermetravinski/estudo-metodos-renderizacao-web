import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ProductDetails } from '@/components/ProductDetails'
import { fetchProductDetails } from '@/lib/api'
import { Product } from '@/lib/definitions'

export default function ProductDetailsPage() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchProductDetailsFn() {
      setIsLoading(true)
      setProduct(await fetchProductDetails(id as string))
      setIsLoading(false)
    }
    if (id) {
      fetchProductDetailsFn()
    }
  }, [id])

  return isLoading ? (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  ) : product === null ? (
    <div className="flex h-screen items-center justify-center">
      <span>Produto não encontrado!</span>
    </div>
  ) : (
    <ProductDetails product={product} />
  )
}
