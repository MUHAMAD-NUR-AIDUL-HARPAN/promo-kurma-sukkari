// File: src/data.js

export const kurmaData = {
  header: "🌙 SPESIAL PERSIAPAN RAMADAN",
  video: {
    // Masukkan link video langsung dari server Shopee di sini
    src: "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/id-11110105-6ko29-mbw4vmikxftwbd.16000081751875236.mp4",
    // Poster adalah gambar yang tampil sebelum video diputar
    poster:
      "https://down-id.img.susercontent.com/file/sg-11134201-82612-mkc23cmukgsg05.webp",
  },
  gallery: [
    // Masukkan link gambar (Copy Image Address) langsung dari Shopee
    "https://down-id.img.susercontent.com/file/sg-11134201-82612-mkc23cmukgsg05.webp",
    "https://down-id.img.susercontent.com/file/sg-11134201-8262v-mkc23d1swm4l97.webp",
    "https://down-id.img.susercontent.com/file/sg-11134201-8261a-mkc23dkqk3d10d.webp", // Contoh gambar ke-3 dari tokonya
    "https://down-id.img.susercontent.com/file/sg-11134201-8261q-mkc23e2gjpj8d6.webp", // Contoh gambar ke-4 dari tokonya
    "https://down-id.img.susercontent.com/file/sg-11134201-7rau9-maun5qnbvm8h97.webp", // Contoh gambar ke-4 dari tokonya
  ],
  productInfo: {
    titleTop: "Kurma Sukkari Original",
    titleBottom: "Cahaya Mekah Premium",
    description:
      'Dikenal sebagai "Ratu Kurma" karena teksturnya yang sangat lembut, basah, dan lumer. Manisnya pas, kaya antioksidan, dan sangat cocok untuk mengembalikan energi instan saat berbuka puasa.',
  },
  variants: [
    {
      id: "1kg",
      isPrimary: true,
      badge: "👑 Paling Laris (Paket Keluarga)",
      title: "Box 1 Kg",
      subtitle: "Hemat untuk sebulan",
      originalPrice: "Rp 150.000",
      discountPrice: "Rp 85.100",
      buttonText: "👉 BELI UKURAN 1 KG",
      link: "https://s.shopee.co.id/4AuUZiCk7W",
    },
    {
      id: "300gr",
      isPrimary: false,
      title: "Box 300 gr",
      subtitle: "⭐ Bintang 5.0 (6 Terjual)",
      originalPrice: "Rp 75.000",
      discountPrice: "Rp 36.800",
      buttonText: "👉 BELI UKURAN 300 GR",
      link: "https://s.shopee.co.id/8fMtwa6iiV",
    },
    {
      id: "150gr",
      isPrimary: false,
      title: "Box 150 gr",
      subtitle: "Cocok untuk tester",
      originalPrice: "Rp 139.000",
      discountPrice: "Rp 28.888",
      buttonText: "👉 BELI UKURAN 150 GR",
      link: "https://s.shopee.co.id/gKcPgKMtW",
    },
  ],
};
