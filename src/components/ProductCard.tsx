import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Product } from '@/lib/definitions'

import { Button } from './ui/button'

interface ProductCardProps {
  product: Product
  method: 'csr' | 'ssr' | 'ssg'
}

export function ProductCard({ product, method }: ProductCardProps) {
  return (
    <Link href={`/${method}/products/${product.id}`} passHref>
      <Card>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="relative h-40 w-40 rounded-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </CardContent>
        <CardFooter className="items-center justify-between">
          <span className="text-gray-700">R$ {product.price.toFixed(2)}</span>

          <Link href={`/${method}/cart`} passHref>
            <Button>Adicionar ao carrinho</Button>
          </Link>
        </CardFooter>
      </Card>
    </Link>
  )
}
