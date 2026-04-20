import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>
        <h1>About Me</h1>
        <p>Nama Mahasiswa: Agna Putra Prawira</p>
        <p>NIM: 2341720065</p>
        <p>Program Studi: D4 Teknik Informatika</p>
      </main>
    </>
  )
}