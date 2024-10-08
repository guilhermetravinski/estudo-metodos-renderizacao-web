import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ProductsGrid } from '@/components/ProductsGrid'
import { fetchProducts } from '@/lib/api'
import { Product } from '@/lib/definitions'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchProductsFn() {
      setIsLoading(true)
      setProducts(await fetchProducts())
      setIsLoading(false)
    }
    fetchProductsFn()
  }, [])

  return isLoading ? (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  ) : (
    <ProductsGrid products={products} method="csr" />
  )
}
