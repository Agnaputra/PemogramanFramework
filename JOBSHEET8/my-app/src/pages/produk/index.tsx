import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";
import TampilanProduk from "../../views/product";

const ProdukPage = () => {
  // Refactor: Mengganti useEffect manual dengan SWR
  const { data, isLoading } = useSWR("/api/product", fetcher);

  return (
    <div>
      {/* Jika isLoading true, kirim array kosong [] agar Skeleton muncul */}
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default ProdukPage;