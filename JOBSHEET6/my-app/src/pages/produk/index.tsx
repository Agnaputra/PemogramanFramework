import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProdukPage = () => {
  // Simulasi status login (false = belum login)
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Jika tidak login, arahkan paksa ke halaman login
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  // Jika belum login, tampilkan pesan loading sebelum redirect
  if (!isLogin) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produk User Page</h1>
      <p>Selamat datang! Anda dapat melihat daftar produk di sini.</p>
    </div>
  );
};

export default ProdukPage;