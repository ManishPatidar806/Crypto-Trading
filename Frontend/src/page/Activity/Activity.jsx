
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
import { getAllOrderForUser } from "@/State/Order/Action";

const Activity = ()=>{
  const dispatch = useDispatch()
  const {order} = useSelector(store=>store)
  useEffect(()=>{
    dispatch(getAllOrderForUser({jwt:localStorage.getItem('jwt')}))
  },[])
    return( 
    <div className="p-5 lg:p-20 ">
        <h1 className="font-bold text-3xl pb-5">Activity</h1>
        <Table>
          <TableHeader className="border">
            <TableRow>
              <TableHead className="py-5">Date & Time</TableHead>
              <TableHead>Treading pair</TableHead>
              <TableHead>Buy Price</TableHead>
              <TableHead>Selling Price</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead>Profit&Lose</TableHead>
              <TableHead className="text-right ">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.orders.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                <p>2024/05/31</p>
                <p className="text-gray-400">12:39:32</p>
                </TableCell>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50 flex">
                    <AvatarImage
                      height={45}
                      width={45}
                      src={item.orderItem.coin.image}
                    ></AvatarImage>
                    <span>{item.orderItem.coin.name}</span>
                  </Avatar>
                </TableCell>
                
                <TableCell>{item.orderItem.coin.buyPrice}</TableCell>
                <TableCell>{item.orderItem.coin.sellPrice}</TableCell>
                <TableCell>{item.orderType}</TableCell>
                <TableCell>${calculateProfit(item)}</TableCell>
                <TableCell className="text-right">
                    ${item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
    )
}

export default Activity;