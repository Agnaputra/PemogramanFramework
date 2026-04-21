import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react"; 

const HalamanLogin = () => {
  const router = useRouter(); 
  const [pesan, setPesan] = useState(""); // State untuk menyimpan pesan notifikasi

  const handleLogin = () => {
    // Simulasi logika login [cite: 372]
    setPesan("Login Berhasil! Mengalihkan ke halaman produk...");

    // Memberikan jeda 1.5 detik agar user bisa membaca notifikasi sebelum pindah halaman
    setTimeout(() => {
      router.push("/produk"); 
    }, 1500);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Halaman Login</h1>

      {/* Menampilkan Notifikasi jika pesan tidak kosong */}
      {pesan && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          padding: '10px', 
          marginBottom: '15px',
          borderRadius: '5px',
          display: 'inline-block'
        }}>
          {pesan}
        </div>
      )}

      <br />
      <button 
        onClick={handleLogin} 
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Login
      </button>      
      <br /><br />
      <Link href="/auth/register">Ke Halaman Register</Link> 
    </div>
  );
};

export default HalamanLogin; 