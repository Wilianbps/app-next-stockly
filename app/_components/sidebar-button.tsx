"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  href: string;
  children: React.ReactNode;
}

function SidebarButton(props: SidebarButtonProps) {
  const { href, children } = props;
  const pathName = usePathname();
  return (
    <Button
      variant={pathName === `${href}` ? "secondary" : "ghost"}
      className="justify-start gap-2"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default SidebarButton;
