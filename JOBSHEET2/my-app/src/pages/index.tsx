import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Selamat Datang di Next.js</h1>
        <p>Ini adalah halaman utama</p>

        <br />

        <Link href="/about" style={{ color: "blue", fontSize: "18px" }}>
          Ke Halaman About
        </Link>
      </div>
    </>
  )
}