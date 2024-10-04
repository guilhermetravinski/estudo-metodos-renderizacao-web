import Image from 'next/image'

import { Product } from '@/lib/definitions'

import { Button } from './ui/button'

interface ProductDetailProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailProps) {
  return (
    <div className="mx-auto max-w-[500px] px-4 py-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="mb-4 text-4xl font-bold">{product.title}</h1>
          <p className="mb-6 text-lg text-gray-600">{product.description}</p>
          <p className="mb-6 text-2xl font-semibold">
            R$ {product.price.toFixed(2)}
          </p>

          <Button className="w-full">Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  )
}
