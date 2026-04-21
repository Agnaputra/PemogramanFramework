import { useRouter } from 'next/router'

export default function DetailProduk() {
  const router = useRouter()
  const { no } = router.query

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>Produk: {no}</p>
    </div>
  )
}