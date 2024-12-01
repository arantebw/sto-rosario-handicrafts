"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

export default function NewAddressModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="w-fit uppercase">New Address</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-11/12 max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg flex flex-col gap-y-4">
          <Dialog.Title className="text-lg font-bold">
            Create a new address
          </Dialog.Title>
          <Dialog.Description className="text-gray-700">
            Add a new address to be used in shipping and/or billing addresses.
          </Dialog.Description>
          <form>
            <div className="flex justify-end gap-x-2">
              <Button variant="default" type="submit" className="uppercase">
                Save
              </Button>
              <Dialog.Close>
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
