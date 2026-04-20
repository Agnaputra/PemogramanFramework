import Link from "next/link"

export default function Produk() {
  return (
    <div>
      <h1>Daftar Produk</h1>

      <ul>
        <li><Link href="/produk/sepatu">Sepatu</Link></li>
        <li><Link href="/produk/baju">Baju</Link></li>
      </ul>
    </div>
  )
}