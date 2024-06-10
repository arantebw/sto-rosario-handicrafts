import Link from "next/link";

import { Button } from "@/components/ui/button";

type ButtonLinkProps = {
  label: string;
  path?: string;
};

function ButtonLink({ label, path = "#" }: ButtonLinkProps) {
  return (
    <Button asChild>
      <Link href={path}>{label}</Link>
    </Button>
  );
}

export default ButtonLink;
