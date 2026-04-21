import { useRouter } from "next/router";

const HalamanKategori = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Kategori</h1>
      <p>Parameter URL yang ditangkap:</p>
      <ul>
        {/* Memastikan slug ada dan berupa array sebelum melakukan mapping */}
        {Array.isArray(slug) ? (
          slug.map((item, index) => (
            <li key={index}>Segmen ke-{index + 1}: {item}</li>
          ))
        ) : (
          <li>{slug}</li>
        )}
      </ul>
    </div>
  );
};

export default HalamanKategori;