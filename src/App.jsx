// File: src/App.jsx
import React, { useState } from "react";
import { kurmaData } from "./data";

export default function App() {
  const [activeMedia, setActiveMedia] = useState({
    type: "video",
    src: kurmaData.video.src,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans text-gray-800 selection:bg-amber-200">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative overflow-x-hidden">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white text-center py-2.5 px-4 text-xs font-bold tracking-widest shadow-md sticky top-0 z-50 flex justify-center items-center gap-2">
          {kurmaData.header}
        </div>

        {/* HERO SECTION (MEDIA INTERAKTIF) */}
        <div className="bg-white pb-2">
          {/* --- BAGIAN INI YANG DIUBAH SUPAYA TIDAK TERPOTONG --- */}
          {/* Ubah background jadi putih (bg-white) dan tambah padding (p-4) biar elegan */}
          <div className="w-full aspect-square bg-white relative flex items-center justify-center overflow-hidden p-4 shadow-sm">
            {activeMedia.type === "video" ? (
              // Ubah object-cover jadi object-contain
              <video
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                muted
                loop
                poster={kurmaData.video.poster}
              >
                <source src={activeMedia.src} type="video/mp4" />
                Browser Anda tidak mendukung video.
              </video>
            ) : (
              // Ubah object-cover jadi object-contain
              <img
                src={activeMedia.src}
                alt="Gambar Utama"
                className="w-full h-full object-contain rounded-lg animate-fade-in"
              />
            )}

            <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide border-2 border-white">
              🔥 Best Seller
            </div>
          </div>
          {/* ---------------------------------------------------- */}

          {/* GALERI THUMBNAIL */}
          <div className="flex overflow-x-auto gap-3 px-4 pt-4 pb-2 snap-x custom-scrollbar">
            {/* THUMBNAIL 1: VIDEO */}
            <div
              onClick={() =>
                setActiveMedia({ type: "video", src: kurmaData.video.src })
              }
              className={`cursor-pointer snap-center shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-sm border-2 transition-all duration-300 relative bg-gray-100 ${activeMedia.type === "video" ? "border-amber-500 scale-105" : "border-gray-200 hover:border-amber-300"}`}
            >
              <img
                src={kurmaData.video.poster}
                className="w-full h-full object-cover opacity-90"
                alt="Video Thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 text-white rounded-full p-2 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4l12 6-12 6z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* THUMBNAIL 2+: GAMBAR */}
            {kurmaData.gallery.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setActiveMedia({ type: "image", src: imgUrl })}
                className={`cursor-pointer snap-center shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-sm border-2 transition-all duration-300 bg-white ${activeMedia.src === imgUrl ? "border-amber-500 scale-105" : "border-gray-200 hover:border-amber-300"}`}
              >
                {/* Thumbnail biarkan object-cover agar rapi dalam kotak kecil */}
                <img
                  src={imgUrl}
                  className="w-full h-full object-cover"
                  alt={`Gambar ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="px-5 pb-5 mt-2">
            <h1 className="text-2xl font-extrabold text-gray-900 leading-snug mb-2 mt-2">
              {kurmaData.productInfo.titleTop} <br />
              <span className="text-amber-600">
                {kurmaData.productInfo.titleBottom}
              </span>
            </h1>
            <p
              className="text-gray-600 text-sm mb-5 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: kurmaData.productInfo.description,
              }}
            />
          </div>
        </div>

        <div className="w-full h-2 bg-gray-100"></div>

        {/* PILIHAN VARIAN */}
        <div className="p-5 bg-amber-50" id="pesan-sekarang">
          <h2 className="text-lg font-extrabold text-gray-800 mb-1 text-center">
            Pilih Ukuran Sesuai Kebutuhan👇
          </h2>
          <p className="text-xs text-gray-500 text-center mb-6">
            Pilih paket di bawah ini untuk melihat ketersediaan stok di Shopee.
          </p>

          <div className="space-y-4">
            {kurmaData.variants.map((variant) =>
              variant.isPrimary ? (
                <div
                  key={variant.id}
                  className="bg-white border-2 border-amber-400 rounded-2xl p-4 shadow-md relative transform transition hover:scale-[1.02]"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                    {variant.badge}
                  </div>
                  <div className="flex justify-between items-center mb-3 mt-2">
                    <div>
                      <h3 className="font-extrabold text-gray-800 text-lg">
                        {variant.title}
                      </h3>
                      <p className="text-[11px] text-gray-500">
                        {variant.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 line-through text-xs mb-0.5">
                        {variant.originalPrice}
                      </p>
                      <p className="text-red-600 font-black text-2xl">
                        {variant.discountPrice}
                      </p>
                    </div>
                  </div>
                  <a
                    href={variant.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-[#f53d2d] to-[#ff6633] text-white text-center font-bold text-sm py-3 rounded-xl shadow-md active:scale-95 transition-transform animate-pulse"
                  >
                    {variant.buttonText}
                  </a>
                </div>
              ) : (
                <div
                  key={variant.id}
                  className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm relative transform transition hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-extrabold text-gray-800 text-lg">
                        {variant.title}
                      </h3>
                      <p className="text-[11px] text-gray-500">
                        {variant.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 line-through text-xs mb-0.5">
                        {variant.originalPrice}
                      </p>
                      <p className="text-red-600 font-black text-xl">
                        {variant.discountPrice}
                      </p>
                    </div>
                  </div>
                  <a
                    href={variant.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-100 text-orange-600 border border-orange-200 text-center font-bold text-sm py-3 rounded-xl active:scale-95 transition-transform"
                  >
                    {variant.buttonText}
                  </a>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="w-full h-2 bg-gray-100"></div>

        {/* KEUNGGULAN TOKO */}
        <div className="px-5 py-6 bg-white">
          <h2 className="text-base font-extrabold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-3">
            Keunggulan Toko Kami
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-emerald-50 p-3 rounded-xl flex items-center gap-3 border border-emerald-100">
              <span className="text-2xl">⚡</span>
              <p className="text-[11px] font-bold text-emerald-800 leading-tight">
                Kirim Cepat
                <br />
                <span className="font-normal text-emerald-600">
                  Sblm Pukul 12:00
                </span>
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-xl flex items-center gap-3 border border-blue-100">
              <span className="text-2xl">🛡️</span>
              <p className="text-[11px] font-bold text-blue-800 leading-tight">
                Izin Resmi
                <br />
                <span className="font-normal text-blue-600">BPOM / PIRT</span>
              </p>
            </div>
            <div className="bg-orange-50 p-3 rounded-xl flex items-center gap-3 border border-orange-100">
              <span className="text-2xl">🤝</span>
              <p className="text-[11px] font-bold text-orange-800 leading-tight">
                15 Hari Retur
                <br />
                <span className="font-normal text-orange-600">
                  Garansi Video Unboxing
                </span>
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-xl flex items-center gap-3 border border-purple-100">
              <span className="text-2xl">💯</span>
              <p className="text-[11px] font-bold text-purple-800 leading-tight">
                100% Original
                <br />
                <span className="font-normal text-purple-600">
                  Petani Kebun
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-gray-900 text-gray-400 text-xs text-center p-6">
          <p className="mb-2">© 2026 Promo Ramadan Terpercaya.</p>
          <p className="text-[10px] text-gray-500 max-w-xs mx-auto">
            Situs ini bukan bagian dari Facebook atau Meta Inc. Situs ini
            dikelola secara independen.
          </p>
        </div>
      </div>
    </div>
  );
}
