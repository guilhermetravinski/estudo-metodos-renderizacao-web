import { useEffect, useState } from 'react'

import { ProductsGrid } from '@/components/ProductsGrid'
import { Product } from '@/lib/definitions'
import { traduzirProdutos } from '@/lib/utils'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await fetch('https://fakestoreapi.com/products')
      const products = (await response.json()) as Product[]
      const translatedProducts = traduzirProdutos(products)
      setProducts(translatedProducts)
    }
    fetchProducts()
  }, [])

  return <ProductsGrid products={products} method="csr" />
}
