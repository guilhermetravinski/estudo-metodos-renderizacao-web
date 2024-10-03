import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ProductDetails } from '@/components/ProductDetails'
import { Product } from '@/lib/definitions'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Fetch product details based on the ID from the URL
  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`/api/products/${id}`)
      const data = await response.json()
      setProduct(data)
      setLoading(false)
    }
    if (id) {
      fetchProduct()
    }
  }, [id])

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span>Produto não encontrado!</span>
      </div>
    )
  }

  return isLoading ? (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  ) : (
    <ProductDetails product={product} />
  )
}
