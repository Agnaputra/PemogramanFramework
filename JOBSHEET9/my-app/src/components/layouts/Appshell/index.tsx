import { useRouter } from "next/router";
// Pilihan 1: Menggunakan path relatif dari posisi Appshell ke navbar
import Navbar from "../navbar"; 

// Pilihan 2: Menggunakan alias @ (lebih direkomendasikan agar tidak bingung jumlah titik)
// import Navbar from "@/components/layouts/navbar";

const disableNavbar = ["/auth/login", "/auth/register", "/404"]; 

type AppShellProps = {
  children: React.ReactNode; 
};

const AppShell = (props: AppShellProps) => { 
  const { children } = props; 
  const { pathname } = useRouter(); 

  return (
    <main>
      {/* Jika halaman saat ini bukan 404 atau login/register, tampilkan Navbar */}
      {!disableNavbar.includes(pathname) && <Navbar />} 
      {children} 
    </main>
  );
};

export default AppShell; 