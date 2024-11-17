import Link from "next/link";
import { navLinksHeader } from "@/data";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { useCartStore } from "@/libs/use-cart-store";

export const SidebarToggle = () => {
  const state = useCartStore();
  const onOpen = state.open && state.type === "sidebarToggle";
  return (
    <Sheet open={onOpen} onOpenChange={state.setOpen}>
      <SheetContent>
        <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        <nav className="flex flex-col space-y-3 pt-4">
          {navLinksHeader.map((link, idx) => (
            <Link key={idx} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
