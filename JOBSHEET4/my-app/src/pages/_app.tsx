import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/layouts/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />

      <Component {...pageProps} />

      <div style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#eee",
        textAlign: "center"
      }}>
         Praktikum Next.js
      </div>
    </main>
  );
}