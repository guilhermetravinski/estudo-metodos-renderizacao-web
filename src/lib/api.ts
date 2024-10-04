import { Product } from './definitions'
import { traduzirProdutos } from './utils'

export async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://fakestoreapi.com/products')
  const products = (await response.json()) as Product[]

  const produtosComQuantidade = products.map((product) => ({
    ...product,
    quantity: 1,
  }))
  return traduzirProdutos(produtosComQuantidade)
}

export async function fetchCart() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://fakestoreapi.com/products')
  const products = (await response.json()) as Product[]
  const primeirosCincoProdutos = products.slice(0, 5)
  const primeirosCincoProdutosQuantidade = primeirosCincoProdutos.map(
    (product) => ({
      ...product,
      quantity: 1,
    }),
  )
  return traduzirProdutos(primeirosCincoProdutosQuantidade)
}

export async function fetchProductDetails(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const product = (await response.json()) as Product
  const produtoComQuantidade = {
    ...product,
    quantity: 1,
  }
  return traduzirProdutos([produtoComQuantidade])[0]
}
