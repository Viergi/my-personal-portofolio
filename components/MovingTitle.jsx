// app/components/MovingTitle.jsx
"use client"; // Pastikan komponen ini adalah Client Component

import { useState, useEffect, useRef } from "react";

export default function MovingTitle({
  fullTitle,
  speed = 100,
  trailingSpaces = 20,
}) {
  const [offset, setOffset] = useState(0);
  const originalTitle = useRef(null); // useRef untuk menyimpan judul asli

  useEffect(() => {
    // Simpan judul asli saat komponen pertama kali di-mount
    if (originalTitle.current === null) {
      originalTitle.current = document.title;
    }

    if (!fullTitle) {
      console.warn(
        "Prop 'fullTitle' tidak ditemukan. Title tidak akan bergerak."
      );
      return; // Berhenti jika tidak ada judul
    }

    // Tambahkan spasi di akhir judul untuk efek mulus saat berulang
    const marqueeText = fullTitle + " ".repeat(trailingSpaces);
    const textLength = marqueeText.length;

    // Atur interval untuk menggeser teks
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % textLength);
    }, speed);

    // Bersihkan interval dan kembalikan judul asli saat komponen di-unmount
    return () => {
      clearInterval(intervalId);
      if (originalTitle.current) {
        document.title = originalTitle.current;
      }
    };
  }, [fullTitle, speed, trailingSpaces]); // Dependensi effect

  // Perbarui document.title setiap kali offset berubah
  useEffect(() => {
    if (fullTitle) {
      const marqueeText = fullTitle + " ".repeat(trailingSpaces);
      const textLength = marqueeText.length;

      // Ambil bagian teks yang akan ditampilkan
      // Kita "membungkus" teks menggunakan substring dan concatenasi
      const visiblePart =
        marqueeText.substring(offset) + marqueeText.substring(0, offset);

      document.title = visiblePart;
    }
  }, [offset, fullTitle, trailingSpaces]);

  // Komponen ini tidak merender apa pun ke DOM
  return null;
}
