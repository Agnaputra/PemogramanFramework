import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;   // Sesuai field 'name' di database Anda
  price: number;  // Sesuai field 'price' di database Anda
  size: string;   // Sesuai field 'size' di database Anda
  category: string; // Tugas 2: Menambahkan category
};

const ProductPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // Fungsi untuk mengambil data (digunakan untuk initial load & Refresh Data)
  const fetchData = () => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((responseData) => {
        setProducts(responseData.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Produk</h1>
      
      {/* Tugas 3: Tombol Refresh Data tanpa reload halaman */}
      <button 
        onClick={fetchData} 
        style={{ marginBottom: "20px", padding: "10px", cursor: "pointer" }}
      >
        Refresh Data
      </button>

      <div style={{ display: "grid", gap: "15px" }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}
          >
            <h2>{product.name}</h2>
            <p>Harga: Rp {product.price.toLocaleString()}</p>
            <p>Ukuran: {product.size}</p>
            {/* Tugas 2: Menampilkan category di frontend */}
            <p><strong>Kategori: {product.category}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;