import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { paymentHandler } from "@/State/Wallet/Action";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";
import { useDispatch } from "react-redux";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = () => {
    dispatch(paymentHandler({jwt:localStorage.getItem("jwt"),paymentMethod,amount}))
    console.log(amount, paymentMethod);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          className="py-7 text-lg "
          placeholder="$44444"
          onChange={handleChange}
          value={amount}
        />
      </div>

      <div>
        <h1 className="pb-1">Select payment method</h1>
        <RadioGroup
          className="flex"
          defaultValue="STRIPE"
          onValueChange={(value) => handlePaymentMethodChange(value)}
        >
         

          <div className="flex items-center border space-x-2 p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r2"
            />
            <Label htmlFor="r2">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                {/* Image of Stripe pay Pay */}
                <img src="" alt="Razorpayimage" />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">
        Submit
      </Button>
    </div>
  );
};

export default TopupForm;
