import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import { format } from "date-fns";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Heriberto!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="p-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="mb-3 uppercase font-bold text-gray-400 text-xs">
          agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6 px-5">
        <h2 className="mb-3 uppercase font-bold text-gray-400 text-xs">
          recomendados
        </h2>
        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mt-6 px-5">
        <h2 className="mb-3 uppercase font-bold text-gray-400 text-xs">
          populares
        </h2>
        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
