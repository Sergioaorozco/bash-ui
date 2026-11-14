import { Phone, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Button from "./Button";

export function AccountTabs() {
  return (
    <Tabs defaultValue="phone
    " className="w-full">
      <TabsList variant="line" className="w-full">
        <TabsTrigger value="phone" className="flex items-center gap-2 w-full">
          <Phone /> <span>Celular</span>
        </TabsTrigger>
        <TabsTrigger value="email" className="flex items-center gap-2">
          <Mail /> <span>Email</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="phone">
        <section className="flex flex-col items-center justify-center gap-2 py-10">
          <h2 className="text-lg font-semibold text-indigo-800">Escribe tu Celular</h2>
          <p className=" text-sm font-light text-neutral-700 text-pretty text-center mb-5">Solo validaremos tus datos por motivos de seguridad</p>
          <div className="relative w-full sm:w-1/2">
            <Phone className="absolute left-3 top-2.5 text-indigo-500" />
            <input className="pl-12 w-full border border-indigo-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white"
              type="number"
              placeholder="Ingresa tu número de celular"
            />
          </div>
          <div className="mt-4 w-full sm:w-1/2 flex">
            <Button>Continuar</Button>
          </div>
        </section>
      </TabsContent>
      <TabsContent value="email">
        <section className="flex flex-col items-center justify-center gap-2 py-10">
          <h2 className="text-lg font-semibold text-indigo-800">Escribe tu Email</h2>
          <p className=" text-sm font-light text-neutral-700 text-pretty text-center mb-5">Solo validaremos tus datos por motivos de seguridad</p>
          {/* Input Group */}
          <div className="relative w-full sm:w-1/2">
            <Mail className="absolute left-3 top-2.5 text-indigo-500" />
            <input className="pl-12 w-full border border-indigo-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white"
              type="email"
              placeholder="Ingresa tu dirección de email"
            />
          </div>
          {/* Buton continuar */}
          <div className="mt-4 w-full sm:w-1/2">
            <Button>Continuar</Button>
          </div>
        </section>
      </TabsContent>
    </Tabs>
  )
}