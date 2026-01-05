import { MobileNav } from "@/components/MobileNav";
import { MainNav } from "@/components/MainNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b transition-all">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:h-4!">
          <MobileNav className="flex lg:hidden" />

          {/* Logo & Brand */}
          <a href="/" className="flex items-center gap-2.5 mr-6 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 group-active:scale-95">
              <img src={siteConfig.branding.logo} alt="HMIT Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-0 leading-none">
              <span className="font-black text-lg tracking-tight sm:inline-block">
                {siteConfig.organization}
              </span>
              <span className="hidden text-[10px] font-bold text-muted-foreground uppercase tracking-widest sm:block">
                Informatika UTS
              </span>
            </div>
          </a>

          <MainNav className="hidden lg:flex" />

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-8"
            >
              <Button variant="ghost" size="icon" className="size-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                <Instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>

            <Separator orientation="vertical" className="mx-2 h-4" />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
