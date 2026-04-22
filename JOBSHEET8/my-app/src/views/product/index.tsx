import styles from "../../pages/produk/product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      {/* Judul di luar content flex agar tetap rata tengah secara global */}
      <h1 className={styles.produk_title}>Halaman Produk Server</h1>
      <h2 className={styles.produk_title}>Daftar Produk</h2>

      <div className={styles.produk_content}>
        {products.length > 0 ? (
          products.map((product: ProductType) => (
            <div key={product.id} className={styles.produk_content_item}>
              <div className={styles.produk_content_item_image}>
                <img src={product.image} alt={product.name} />
              </div>
              <h4 className={styles.produk_content_item_name}>{product.name}</h4>
              <p className={styles.produk_content_item_category}>{product.category}</p>
              <p className={styles.produk_content_item_price}>
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))
        ) : (
          /* Render Skeleton Loading saat data masih kosong */
          [1, 2, 3].map((item) => (
            <div key={item} className={styles.produk_content_skeleton}>
              <div className={styles.produk_content_skeleton_image} />
              <div className={styles.produk_content_skeleton_name} />
              <div className={styles.produk_content_skeleton_category} />
              <div className={styles.produk_content_skeleton_price} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;