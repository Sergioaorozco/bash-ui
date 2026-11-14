import Button from "./Button"
import { Link, Route, Routes } from "react-router-dom"

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
     <main className="bg-linear-to-b from-white to-[#DFCCFF] h-dvh w-full flex items-center flex-col justify-around gap-2">
      <Link to="/account/link">Vincula tu cuenta</Link>
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
