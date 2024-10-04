import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import Cart from '@/components/Cart'
import { fetchCart } from '@/lib/api'
import { Product } from '@/lib/definitions'

export default function CartPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchCartFn() {
      setIsLoading(true)
      setProducts(await fetchCart())
      setIsLoading(false)
    }
    fetchCartFn()
  }, [])

  return isLoading ? (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  ) : (
    <Cart products={products} method="csr" />
  )
}
