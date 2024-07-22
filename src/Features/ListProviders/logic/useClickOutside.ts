// hooks/useClickOutside.ts
import { useEffect } from "react";
import { ClickOutsideRef, ClickOutsideCallback } from "@/utils/ListProviders";

// Custom Hook untuk mendeteksi klik di luar elemen tertentu
const useClickOutside = (
  ref: ClickOutsideRef,
  callback: ClickOutsideCallback,
) => {
  useEffect(() => {
    // Fungsi untuk menangani klik di luar elemen
    const handleClickOutside = (event: MouseEvent) => {
      // Jika elemen yang direferensikan ada dan klik terjadi di luar elemen tersebut
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Panggil fungsi callback
        callback();
      }
    };

    // Tambahkan event listener untuk mendeteksi klik di luar elemen
    document.addEventListener("mousedown", handleClickOutside);

    // Hapus event listener saat komponen dibersihkan untuk mencegah kebocoran memori
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};

export default useClickOutside;


