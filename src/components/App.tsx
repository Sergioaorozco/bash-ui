import Button from "./Button"
import { Link, Route, Routes } from "react-router-dom"
import { ChevronLeft } from "lucide-react";
import { AccountTabs } from "@/components/AccountTabs";



function Home() {
  return (
    <main className="bg-linear-to-b from-white to-[#DFCCFF] h-dvh w-full">
      <section className="dom-wrapper mx-auto px-5 flex items-center flex-col justify-around gap-2 h-full">
        <img src="/public\assets\bask_logo.png" alt="Bask Logo" height="300" width="300" />
        <Button to="/account/link">Crear Reporte</Button>
      </section>
    </main>
  )
}

function LinkAccount() {
  return (
    <main className="bg-linear-to-b from-white to-[#DFCCFF] h-dvh w-full flex items-center flex-col gap-2">
      <section className="dom-wrapper mx-auto w-full px-5">
        <nav className="flex justify-center w-full items-center py-8 relative">
          <Link to="/" className="text-indigo-500 hover:text-indigo-700 font-bold absolute left-0 flex gap-1">
            <ChevronLeft /><span className="hidden sm:block">Atrás</span>
          </Link>
          <h1 className="font-semibold text-center text-2xl text-indigo-800">Valida tu cuenta</h1>
        </nav>
      </section>
      <section className="dom-wrapper mx-auto w-full px-5">
        <AccountTabs />
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account/link" element={<LinkAccount />}></Route>
    </Routes>
  )
}

export default App
