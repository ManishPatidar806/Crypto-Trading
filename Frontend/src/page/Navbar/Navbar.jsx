import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ButtonIcon,
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {auth} = useSelector(store=>store)
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              className="rounded-full h-11 w-11"
              variant="ghost"
              size="icon"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-r-0 flex flex-col justify-center"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="https://banner2.cleanpng.com/20180903/uzs/kisspng-cryptocurrency-bitcoin-digital-currency-money-vizionary-capricoin-5b8dcc00372907.018449621536019456226.jpg" />
                    <div>
                      <span className="font-bold text-orange-600">Crypto</span>
                      <span>Coins</span>
                    </div>
                  </Avatar>
                </div>

                <Sidebar />
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <p className="text-sm lg:text-base cursor-pointer">Mohit treading</p>

        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>


        <div >

            <Avatar>
                <AvatarFallback>{auth.user?.fullName[0].toUpperCase()}</AvatarFallback>
            </Avatar>
        </div>



    </div>
  );
};

export default Navbar;
