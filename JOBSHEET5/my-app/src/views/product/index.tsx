const ProductView = () => {
  return (
    <div className="min-h-screen bg-gray-50"> {/* Utility 1: min-h-screen */}
      
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 px-10 text-center"> {/* Utility 2 & 3: bg-blue-700, text-center */}
        <h1 className="text-4xl font-extrabold mb-4">E-Katalog Produk</h1> {/* Utility 4: text-4xl */}
        <p className="text-lg opacity-80">Temukan barang impian Anda dengan kualitas terbaik.</p>
      </section>

      {/* Main Section */}
      <main className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg"> {/* Utility 5: shadow-md */}
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">
          Daftar Produk Terbaru
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded hover:bg-gray-100 transition">
            <h3 className="font-semibold">Laptop Gaming Pro</h3>
            <p className="text-gray-500">Spesifikasi tinggi untuk performa maksimal.</p>
          </div>
          <div className="p-4 border rounded hover:bg-gray-100 transition">
            <h3 className="font-semibold">Smartphone X Gen</h3>
            <p className="text-gray-500">Kamera jernih dengan baterai tahan lama.</p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ProductView;