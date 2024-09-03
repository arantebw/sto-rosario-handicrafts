"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import ComboBox from "../province-combobox";

interface AddressFormProps {
  provincesList: {
    code: string;
    name: string;
  }[];
}

export default function AddressForm({ provincesList }: AddressFormProps) {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="grid grid-cols-2 gap-4 px-4">
        <FormField
          control={form.control}
          name="contact-person"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Contact Person`}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name of person to receive the item"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact-number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Contact Number`}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Phone number of the contact person"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address-line-1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Address Line 1`}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Apartment no., street no., street name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address-line-2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Address Line 2`}</FormLabel>
              <FormControl>
                <Input placeholder="Floor, building, P.O. Box" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Zip (Postal) Code`}</FormLabel>
              <FormControl>
                <Input placeholder="12345" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="province"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1.5">
              <FormLabel>{`Province`}</FormLabel>
              <FormControl>
                <ComboBox itemsList={provincesList} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shipping-address"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center">
              <FormControl className="mr-4">
                <Checkbox />
              </FormControl>
              <div className="!mt-0">
                <FormLabel className="mt-0 leading-normal">{`Set as default shipping address`}</FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-fit col-span-2 uppercase"
        >{`Create address`}</Button>
      </form>
    </Form>
  );
}
