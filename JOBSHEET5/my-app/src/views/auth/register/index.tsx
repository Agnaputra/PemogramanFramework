import styles from "./register.module.css";
import Link from "next/link";

const RegisterView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Halaman Register</h1>
        <p>Silahkan buat akun baru di sini.</p>
        <Link href="/auth/login">Sudah punya akun? Login</Link>
      </div>
    </div>
  );
};

export default RegisterView;