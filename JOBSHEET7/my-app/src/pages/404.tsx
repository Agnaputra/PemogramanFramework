/* src/pages/404.tsx */
import styles from "@/styles/404.module.scss";
import Link from "next/link"; // Navigasi Next.js [cite: 288]
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Halaman Tidak Ditemukan | Praktikum</title>
      </Head>
      
      <div className={styles.error}>
        {/* Tugas 1: Gambar Ilustrasi [cite: 280] */}
        <img 
          src="/page-not-found.png" 
          alt="404 Illustration" 
          className={styles.error_image} 
        />

        {/* Tugas 1: Judul Halaman [cite: 276] */}
        <h1 className={styles.error_title}>Ups! Alamat Tidak Ditemukan</h1>

        {/* Tugas 1: Deskripsi Singkat [cite: 278] */}
        <p className={styles.error_description}>
          Maaf, sepertinya halaman yang Anda cari telah dipindahkan atau tidak pernah ada.
        </p>

        {/* Tugas 3: Tombol Kembali ke Home menggunakan Link [cite: 287, 288] */}
        <Link href="/">
          <button className={styles.error_button}>
            Kembali ke Beranda
          </button>
        </Link>
      </div>
    </>
  );
};

export default Custom404;