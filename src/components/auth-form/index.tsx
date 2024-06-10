"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userLogin, userRegister } from "@/lib/actions";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({
  className,
  ...props
}: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // TODO: Figure out how to implement this feature.
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action={userLogin}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder=""
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Button type="submit">Login</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function RegisterForm({
  className,
  ...props
}: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // TODO: Figure out how to implement this feature.
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action={userRegister}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder=""
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              name="confirm_password"
              placeholder=""
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Button type="submit">Register</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
