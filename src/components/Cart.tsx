import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Product } from '@/lib/definitions'

import { Button } from './ui/button'

interface CartProps {
  products: Product[]
  method: 'csr' | 'ssr' | 'ssg'
}

export default function Cart({ products, method }: CartProps) {
  const [cart, setCart] = useState<Product[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    setCart(products)
    calculateTotal(products)
  }, [products])

  // Atualiza o total do carrinho quando há mudanças
  const calculateTotal = (items: Product[]) => {
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    )
    setTotal(totalPrice)
  }

  // Atualiza a quantidade de um produto
  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item,
    )
    setCart(updatedCart)
    calculateTotal(updatedCart)
  }

  // Remove um produto do carrinho
  const removeProduct = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
    calculateTotal(updatedCart)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-3xl font-bold">Carrinho</h1>

      {/* Verifica se o carrinho está vazio */}
      {cart.length === 0 ? (
        <div className="mx-auto flex max-w-72 flex-col items-center gap-3">
          <p>Seu carrinho está vazio.</p>
          <Link className="w-full" href={`/${method}`} passHref>
            <Button className="w-full" variant="outline">
              Voltar
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Lista de produtos no carrinho */}
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center rounded-lg border border-gray-200 p-4 shadow sm:flex-row"
              >
                <div className="relative mr-4 h-40 w-40 rounded-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="mb-2 text-gray-600">
                    R$ {product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${product.id}`} className="mr-2">
                      Quantidade:
                    </label>
                    <input
                      id={`quantity-${product.id}`}
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) =>
                        updateQuantity(product.id, parseInt(e.target.value))
                      }
                      className="w-16 rounded border border-gray-300 text-center"
                    />
                  </div>
                  <Button
                    className="mt-4 w-full"
                    variant="destructive"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remover
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* Resumo do carrinho */}
          <div className="flex flex-col items-center gap-6">
            <div className="border-t border-gray-300 pt-6">
              <p className="text-2xl font-semibold">
                Total: R$ {total.toFixed(2)}
              </p>
              <Link href={`/${method}`} passHref>
                <Button className="mt-4 w-full">Ver mais produtos</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
