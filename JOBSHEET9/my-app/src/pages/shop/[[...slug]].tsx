import { useRouter } from "next/router";

const halamanToko = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Toko</h1>
      {/* Implementasi Langkah 5: Validasi agar tidak error saat slug kosong */}
      <p>
        Kategori: {slug ? (slug as string[])[0] : "Semua Kategori"} 
      </p>
    </div>
  );
};

export default halamanToko;