import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import siteConfig from "@/data/siteConfig.json";

export function MainNav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav className={cn("items-center gap-0", className)} {...props}>
      {siteConfig.navigation.map((item) => (
        <a key={item.name} href={item.href} className="relative items-center">
          <Button variant="ghost" size="sm" className="px-2.5">
            {item.name}
          </Button>
        </a>
      ))}
    </nav>
  );
}
