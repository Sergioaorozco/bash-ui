import Button from "./Button"

function App() {
  return (
    <>
    <section className="bg-linear-to-b from-white to-[#DFCCFF] h-dvh w-full flex items-center flex-col justify-around gap-2">
      <figure className="pt-4 flex flex-col items-center justify-between max-inline-96">
          <img src="/public\assets\bask_logo.png" alt="Bask Logo" height="300" width="300" />
      </figure>
      <Button>Crear Reporte</Button>
    </section>
    </>
  )
}

export default App
