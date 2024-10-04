import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Product } from './definitions'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function traduzirProdutos(produtos: Product[]): Product[] {
  return produtos.map((produto) => ({
    id: produto.id,
    title: traduzirTitulo(produto.title),
    price: produto.price,
    description: traduzirDescricao(produto.description),
    category: traduzirCategoria(produto.category),
    image: produto.image,
    quantity: produto.quantity,
  }))
}

function traduzirTitulo(titulo: string): string {
  // Traduções personalizadas dos títulos dos produtos
  const traducoes: { [key: string]: string } = {
    'DANVOUY Womens T Shirt Casual Cotton Short':
      'Camiseta Casual de Algodão Feminina DANVOUY',
    "Opna Women's Short Sleeve Moisture":
      'Camiseta Feminina de Manga Curta Opna',
    "MBJ Women's Solid Short Sleeve Boat Neck V ":
      'Camiseta Feminina de Gola Barco MBJ',
    'Rain Jacket Women Windbreaker Striped Climbing Raincoats':
      'Jaqueta de Chuva Feminina Corta-Vento Listrada',
    "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket":
      'Jaqueta de Motoqueira Feminina com Capuz Removível de Couro Sintético',
    "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats":
      'Jaqueta Feminina de Neve 3 em 1 BIYLACLESEN',
    'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED':
      'Monitor Gamer Curvo Samsung 49 Polegadas CHG90 144Hz',
    'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin':
      'Monitor Acer SB220Q bi 21.5 polegadas Full HD IPS',
    'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive':
      'Disco Rígido Externo Portátil WD 4TB para Playstation 4',
    'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5':
      'SSD Silicon Power 256GB 3D NAND A55 SLC Cache SATA III',
    'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s':
      'SSD Interno SanDisk PLUS 1TB - SATA III 6 Gb/s',
    'WD 2TB Elements Portable External Hard Drive - USB 3.0':
      'Disco Rígido Externo WD 2TB Elements - USB 3.0',
    'Pierced Owl Rose Gold Plated Stainless Steel Double':
      'Brincos Túnel Plug de Aço Inoxidável com Banho de Ouro Rosé',
    'White Gold Plated Princess':
      'Anel de Noivado Prateado com Pedra Solitária',
    'Solid Gold Petite Micropave': 'Anel de Ouro Maciço com Micropavé',
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet":
      'Pulseira Feminina de Ouro e Prata John Hardy com Dragão',
    'Mens Casual Slim Fit': 'Camiseta Slim Fit Casual Masculina',
    'Mens Cotton Jacket': 'Jaqueta de Algodão Masculina',
    'Mens Casual Premium Slim Fit T-Shirts':
      'Camisetas Slim Fit Masculinas Premium',
    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops':
      'Mochila Fjallraven Foldsack No. 1 para Laptops de 15 polegadas',
  }
  // Retorna a tradução do título se existir, caso contrário, retorna o título original
  return traducoes[titulo] || titulo
}

function traduzirDescricao(descricao: string): string {
  // Traduções personalizadas das descrições
  const traducoes: { [key: string]: string } = {
    '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.':
      '95% Algodão, 5% Spandex, Características: Casual, Manga Curta, Estampa de Letras, Decote em V, Camisetas da Moda. O tecido é macio e tem elasticidade. Ocasião: Casual/Escritório/Praia/Escola/Casa/Rua. Estações: Primavera, Verão, Outono, Inverno.',
    '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort':
      '100% Poliéster, Lavável à máquina, Poliéster interlock catiônico 100%, Lavável à máquina e pré-encolhido para um ótimo ajuste, Leve, espaçoso e altamente respirável com tecido que ajuda a afastar a umidade. Tecido leve e macio com gola V confortável e ajuste mais fino, oferecendo uma silhueta elegante e mais feminina e conforto adicional.',
    '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem':
      '95% Rayon, 5% Spandex, Feito nos EUA ou Importado, Não usar alvejante, Tecido leve com grande elasticidade para conforto, Acabamento canelado nas mangas e gola / Costura dupla na bainha inferior.',
    "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.":
      'Leve, perfeita para viagens ou uso casual — Manga longa com capuz, design de cintura ajustável com cordão. Fecho frontal com botões e zíper, forro listrado completo. A jaqueta de chuva tem 2 bolsos laterais de bom tamanho para segurar todos os tipos de coisas, cobre os quadris, e o capuz é generoso sem exagerar. Capuz forrado em algodão com cordões ajustáveis, proporcionando um visual estilizado.',
    '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON':
      '100% POLIURETANO (exterior) 100% POLIÉSTER (forro) 75% POLIÉSTER 25% ALGODÃO (moleton), Material de couro sintético para estilo e conforto / 2 bolsos frontais, Jaqueta de couro sintético com capuz estilo jeans 2-em-1, Detalhe de botões na cintura / Costura detalhada nas laterais, Lavar à mão / Não usar alvejante / Secar ao ar livre / Não passar ferro.',
    'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates':
      'Nota: O casaco é de tamanho padrão dos EUA, escolha seu tamanho habitual. Material: 100% Poliéster; Forro removível de lã quente. Forro funcional removível: Amigável à pele, leve e quente. Jaqueta com gola alta, mantém você aquecido no frio. Bolsos com zíper: 2 bolsos com zíper para as mãos, 2 bolsos com zíper no peito (espaço suficiente para cartões ou chaves) e 1 bolso oculto interno. Design humanizado: Capuz ajustável e removível e punhos ajustáveis para prevenir o vento e a água, proporcionando um ajuste confortável. Design 3 em 1 destacável oferece mais conveniência, você pode separar o casaco e o forro conforme necessário, ou usá-los juntos. Adequado para diferentes estações e ajuda a se adaptar a diferentes climas.',
    '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag':
      'MONITOR GAMER CURVO SUPER ULTRAWIDE DE 49 POLEGADAS, com duas telas de 27 polegadas lado a lado. TECNOLOGIA QUANTUM DOT (QLED), suporte HDR e calibração de fábrica oferecem cores e contraste incrivelmente realistas e precisos. TAXA DE ATUALIZAÇÃO DE 144HZ e tempo de resposta ultrarrápido de 1ms eliminam borrões de movimento, ghosting e reduzem o lag de entrada.',
    // Continue adicionando traduções conforme necessário
  }
  return traducoes[descricao] || descricao
}

function traduzirCategoria(categoria: string): string {
  const traducoes: { [key: string]: string } = {
    "women's clothing": 'Roupas femininas',
    "men's clothing": 'Roupas masculinas',
    electronics: 'Eletrônicos',
    jewelery: 'Joias',
  }
  return traducoes[categoria] || categoria
}
