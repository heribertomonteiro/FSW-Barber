"use client";


import { LogOutIcon, UserIcon, LogInIcon, HomeIcon, CalendarIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";

const SideMenu = () => {
    const { data, status } = useSession();
    const handleLogoutClick = () => signOut();
    const handleLoginClick = () => signIn("google");
    return ( 
        <>
        <SheetHeader className="text-left border-b border-solid border-secondary p-5">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {status === "authenticated" && (
              <div className="flex justify-between px-5 py-6 items-center">
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src={data.user?.image ?? ""} />
                  </Avatar>
                  <h2 className="font-bold">{data.user?.name}</h2>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleLogoutClick}
                >
                  <LogOutIcon />
                </Button>
              </div>
            )}

            {status === "unauthenticated" && (
              <div className="flex flex-col gap-3 px-5 py-6">
                <div className="flex items-center gap-2">
                  <UserIcon size={32} />
                  <h2 className="font-bold">Olá, faça seu login!</h2>
                </div>
                <Button
                  variant="secondary"
                  className="w-full justify-start"
                  onClick={handleLoginClick}
                >
                  <LogInIcon className="mr-2" size={18} />
                  Fazer Login
                </Button>
              </div>
            )}
            <div className="flex flex-col gap-3 px-5">
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/">
                    <HomeIcon size={18} className="mr-2" />
                    Inicio
                  </Link>
                </Button>
              </div>

              {data?.user && (
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/bookings">
                      <CalendarIcon size={18} className="mr-2" />
                      Agendamentos
                    </Link>
                  </Button>
                </div>
              )}
            </div>
        </>
     );
}
 
export default SideMenu;