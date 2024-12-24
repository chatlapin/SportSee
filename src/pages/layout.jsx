import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen bg-[#FFFFFF]">
        <Navbar />
        <Sidebar />
        <main className="pl-[120px] p-8">
          <Outlet />
        </main>
      </div>
    </>
  )
}
