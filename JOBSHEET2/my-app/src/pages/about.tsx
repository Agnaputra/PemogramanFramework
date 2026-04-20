import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>
        <div style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <h1 style={{ marginBottom: "20px" }}>About Me</h1>

          <p><strong>Nama:</strong> Agna Putra Prawira</p>
          <p><strong>NIM:</strong> 2341720065</p>
          <p><strong>Program Studi:</strong> D4 Teknik Informatika</p>

          <br />

          <Link href="/" style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            ← Kembali ke Home
          </Link>
        </div>
      </main>
    </>
  )
}