"use client";

import SideMenu from "@/app/_components/side-menu";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();
  const handleBackClick = () => {
    router.replace('/');
  };
  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          onClick={handleBackClick}
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 left-4"
        >
          <ChevronLeftIcon />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="z-50 absolute top-4 right-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{ objectFit: "cover" }}
          className="opacity-75"
        />
      </div>

      <div className="px-3 py-5 pb-6 border-b border-solide border-secondary">
        <h1 className="text-sl font-bold">{barbershop.name}</h1>
        <div className="flex item-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex item-center gap-1 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (890 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
