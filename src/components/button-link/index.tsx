import Link from "next/link";

import { Button } from "@/components/ui/button";

type ButtonLinkProps = {
  label: string;
  path?: string;
  variant?: any; // TODO: Search the appropriate values for variant.
};

function ButtonLink({ label, path = "#", variant }: ButtonLinkProps) {
  return (
    <Button asChild variant={variant}>
      <Link href={path}>{label}</Link>
    </Button>
  );
}

export default ButtonLink;
