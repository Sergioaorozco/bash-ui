import Button from "./Button"
import { Link, Route, Routes } from "react-router-dom"
import { ChevronLeft } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";


function Home() {
  return (
    <main className="bg-linear-to-b from-white to-[#DFCCFF] h-dvh w-full flex items-center flex-col justify-around gap-2">
      <figure className="pt-4 flex flex-col items-center justify-between max-inline-96">
          <img src="/public\assets\bask_logo.png" alt="Bask Logo" height="300" width="300" />
      </figure>
      <Button to="/account/link">Crear Reporte</Button>
    </main>
  )
}

function LinkAccount() {
  return (
     <main className="bg-linear-to-b from-white to-[#DFCCFF] h-dvh w-full flex items-center flex-col gap-2">
      <section className="dom-wrapper mx-auto w-full px-5">
        <nav className="flex justify-center w-full items-center py-8 relative">
          <Link to="/" className="text-indigo-500 hover:text-indigo-700 font-bold absolute left-0 flex gap-1">
            <ChevronLeft /><span>Atrás</span>
          </Link>
          <p className="font-semibold text-center text-2xl text-indigo-800">Valida tu cuenta</p>
        </nav>
      </section>
      <section>
        <ButtonGroup>
          <Button variant="primary">Email</Button>
          <Button variant="secondary">Celular</Button>
        </ButtonGroup>
      </section>
      <input type="text" placeholder="Ingresa tu código de verificación" />
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
