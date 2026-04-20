import { useRouter } from "next/router";

const halamanToko = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>
        {/* Validasi: Jika slug ada, gabungkan dengan "-". Jika tidak, tampilkan pesan default */}
        Toko: {slug ? (Array.isArray(slug) ? slug.join("-") : slug) : "Beranda Utama Toko"}
      </p>
    </div>
  );
};

export default halamanToko;