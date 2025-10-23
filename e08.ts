type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

function getAvailableProducts(products: Product[]): string[] {
  return products
    .filter(p => p.inStock)                 // 在庫ありだけ残す
    .map(p => `${p.name} - ￥${p.price}`);  // 表示用に整形
}

// テスト
const products: Product[] = [
  { name: "Keyboard", price: 3000, inStock: true },
  { name: "Mouse",    price: 1500, inStock: false },
  { name: "Monitor",  price: 18000, inStock: true }
];

console.log(getAvailableProducts(products));
// 期待: ["Keyboard - ￥3000", "Monitor - ￥18000"]
