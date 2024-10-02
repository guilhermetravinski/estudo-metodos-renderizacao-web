// pages/products/[id].tsx
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

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

  if (loading) {
    return <p>Loading product details...</p>
  }

  if (!product) {
    return <p>Product not found!</p>
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
          <p className="mb-6 text-lg text-gray-600">{product.description}</p>
          <p className="mb-6 text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </p>

          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
