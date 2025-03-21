import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWatchList, getUserWatchlist } from "@/State/Watchlist/Action";
import { existInWatchlist } from "@/utils/existInWatchlist";

const WatchList = () => {
  const dispatch = useDispatch();
  const { watchlist } = useSelector((store) => store);

  const handleRemoveToWatchlist = (value) => {
    dispatch(
      addItemToWatchList({
        coinId: value,
        jwt: localStorage.getItem("jwt"),
      })
    );
    console.log(value);
  };

  useEffect(() => {
    dispatch(getUserWatchlist(localStorage.getItem("jwt")));
  }, []);

  return (
    <div className="p-5 lg:p-20 ">
      <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
      <Table>
        <TableHeader className="border">
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right text-red-600">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50 flex">
                  <AvatarImage
                    height={45}
                    width={45}
                    src={item.image}
                  ></AvatarImage>
                  <span>{item.name}</span>
                </Avatar>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.totalVolume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell>${item.current_price}</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleRemoveToWatchlist(item.id)}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                >
                  <BookmarkFilledIcon className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchList;
