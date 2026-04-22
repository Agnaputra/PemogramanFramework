import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/Appshell' // Pastikan path benar

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />

      <div style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#eee",
        textAlign: "center",
        color: "#000" // Agar teks terlihat jika background gelap
      }}>
         Praktikum Next.js
      </div>
    </AppShell>
  );
}