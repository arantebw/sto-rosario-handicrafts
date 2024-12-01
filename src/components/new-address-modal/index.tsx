"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Address } from "@/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormItem } from "../ui/form";
import { Flex } from "@radix-ui/themes";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function NewAddressModal() {
  const addressForm = useForm<Address>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = addressForm;

  const saveAddress = (data: Address) => {
    console.log(data);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="w-fit uppercase">New Address</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg flex flex-col gap-y-4">
          <Dialog.Title className="text-xl">Create a new address</Dialog.Title>
          <Dialog.Description className="text-gray-700">
            Add a new address to be used in shipping and/or billing addresses.
          </Dialog.Description>
          <form
            onSubmit={handleSubmit(saveAddress)}
            className="flex flex-col gap-y-4"
            noValidate
          >
            <div className="flex flex-row gap-4">
              <FormItem className="flex-grow">
                <Label>Contact Person</Label>
                <Input type="text" {...register("contactPerson")} />
              </FormItem>
              <FormItem className="flex-grow">
                <Label>Phone Number</Label>
                <Input type="text" {...register("contactNumber")} />
              </FormItem>
            </div>
            <FormItem>
              <Label>Address Line 1</Label>
              <Input type="text" {...register("addressLine1")} />
            </FormItem>
            <FormItem>
              <Label>Address Line 2</Label>
              <Input type="text" {...register("addressLine2")} />
            </FormItem>
            <div className="flex flex-row gap-4">
              <FormItem className="flex-grow">
                <Label>Barangay</Label>
                <Input type="text" {...register("barangay")} />
              </FormItem>
              <FormItem className="flex-grow">
                <Label>City or Municipality</Label>
                <Input type="text" {...register("cityOrMunicipality")} />
              </FormItem>
            </div>
            <div className="flex flex-row gap-4">
              <FormItem className="flex-grow">
                <Label>Province</Label>
                <Input type="text" {...register("province")} />
              </FormItem>
              <FormItem className="flex-grow">
                <Label>Zip Code</Label>
                <Input type="text" {...register("zipCode")} />
              </FormItem>
            </div>
            <FormItem className="flex items-end gap-x-2">
              <input type="checkbox" {...register("isDefault")} />
              <Label className="mt-0">Set as default address</Label>
            </FormItem>
            <div className="flex justify-end gap-x-2">
              <Button variant="default" type="submit" className="uppercase">
                Save
              </Button>
              <Dialog.Close asChild>
                <Button variant="outline" className="uppercase">
                  Cancel
                </Button>
              </Dialog.Close>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
