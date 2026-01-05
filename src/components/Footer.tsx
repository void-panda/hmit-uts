import { Instagram, Mail, ExternalLink, MapPin, Heart } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-card/50 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-400/10 blur-[100px]" />

      <div className="container relative py-12 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-primary/20 bg-white">
                <img src={siteConfig.branding.logo} alt="HMIT Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-0 leading-none">
                <span className="text-xl font-black tracking-tight">{siteConfig.organization}</span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Informatika UTS</span>
              </div>
            </a>
            <p className="max-w-sm text-muted-foreground leading-relaxed mt-2 text-sm">
              {siteConfig.fullName}. Membangun ekosistem informatika yang unggul, inovatif, dan berkarakter di Universitas Teknologi Sumbawa.
            </p>
            <div className="mt-2 flex gap-4">
              <a href={`mailto:${siteConfig.email}`} className="rounded-full bg-muted p-2.5 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <Mail className="size-5" />
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-muted p-2.5 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <Instagram className="size-5" />
              </a>
              {siteConfig.linktree && (
                <a href={siteConfig.linktree} target="_blank" rel="noopener noreferrer" className="rounded-full bg-muted p-2.5 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                  <ExternalLink className="size-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Navigasi</h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">Lokasi</h4>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary mt-0.5">
                <MapPin className="size-4" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-foreground">Gedung Fakultas Rekayasa Sistem</p>
                <p className="text-muted-foreground">Kampus UTS, Sumbawa, NTB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-sm font-bold text-muted-foreground">
            © {currentYear} {siteConfig.organization}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground">
            Made with <Heart className="size-4 fill-primary text-primary" /> by HMIT Creative
          </div>
        </div>
      </div>
    </footer>
  );
}
