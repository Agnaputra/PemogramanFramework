import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

const ProdukServer = () => {
  const { data, isLoading } = useSWR("/api/product", fetcher); // Sesuaikan dengan nama file API kamu: product.ts

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Halaman Produk Server</h1>
      <TampilanProduk products={isLoading ? [] : (data?.data || [])} />
    </div>
  );
};

export default ProdukServer;