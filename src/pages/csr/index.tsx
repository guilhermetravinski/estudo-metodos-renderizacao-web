import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/lib/definitions";
import { traduzirProdutos } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  //   const itemsPerPage = 8; // Número de produtos por página

  // Simulação de fetch de produtos e categorias
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = (await response.json()) as Product[];
      const translatedProducts = traduzirProdutos(products);
      setProducts(translatedProducts);
      setFilteredProducts(translatedProducts);
      const uniqueCategories = Array.from(
        new Set(translatedProducts.map((p: Product) => p.category))
      );
      setCategories(uniqueCategories);
    }
    fetchProducts();
  }, []);

  // Filtro por categoria
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (selectedCategory === "all" || product.category === selectedCategory) &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Resetar para primeira página após filtro
  }, [selectedCategory, searchTerm, products]);

  // Paginação
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>

      {/* Barra de busca */}
      <div className="flex flex-col items-center mb-6 md:flex-row gap-6">
        <Input
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filtro de categorias */}
        <Select
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Lista de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
          >
            <div className="w-40 h-40 rounded-full relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">R$ {product.price.toFixed(2)}</p>
            <Button className="w-full">Adicionar ao carrinho</Button>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-5">
        <div className="flex flex-row items-center gap-4">
          <Button
            size="icon"
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span>
            Página {currentPage} de {totalPages}
          </span>

          <Button
            size="icon"
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-6 items-center">
          <span>Itens por página</span>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(parseInt(value, 10));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={itemsPerPage.toString()} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 15, 20].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
