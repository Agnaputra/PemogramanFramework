import Link from "next/link";

const HalamanRegister = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Halaman Register</h1>
      <Link href="/auth/login">Sudah punya akun? Login di sini</Link>
    </div>
  );
};

export default HalamanRegister;