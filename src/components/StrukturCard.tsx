import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ChevronRight } from "lucide-react";

interface StrukturCardProps {
    nama: string;
    jabatan: string;
    divisi?: string;
    foto?: string;
    instagram?: string;
}

export function StrukturCard({ nama, jabatan, divisi, foto, instagram }: StrukturCardProps) {
    return (
        <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
            <CardContent className="p-0">
                {/* Photo Section */}
                <div className="aspect-[4/5] relative bg-gradient-to-br from-primary/20 via-orange-100 to-amber-50 flex items-center justify-center overflow-hidden dark:from-primary/10 dark:via-orange-900/10 dark:to-amber-900/10">
                    {foto ? (
                        <img
                            src={foto}
                            alt={nama}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div className="text-7xl font-black text-primary/20 select-none">
                            {nama.charAt(0)}
                        </div>
                    )}

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Instagram Button Overlay */}
                    {instagram && (
                        <a
                            href={`https://instagram.com/${instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-white p-3 text-sm font-bold text-black shadow-xl translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 active:scale-95"
                        >
                            <div className="flex items-center gap-2">
                                <div className="rounded-md bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1">
                                    <Instagram className="size-4 text-white" />
                                </div>
                                <span>@{instagram}</span>
                            </div>
                            <ChevronRight className="size-4" />
                        </a>
                    )}
                </div>

                {/* Info Section */}
                <div className="relative bg-card p-5">
                    <div className="absolute -top-6 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <span className="text-xl font-bold">{nama.charAt(0)}</span>
                    </div>

                    <div className="pt-6">
                        <h3 className="text-lg font-bold leading-tight transition-colors group-hover:text-primary">
                            {nama}
                        </h3>
                        <p className="mt-1 text-sm font-black uppercase tracking-widest text-primary/80">
                            {jabatan}
                        </p>
                        {divisi && (
                            <div className="mt-3 flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase opacity-70">
                                <div className="h-px w-4 bg-muted-foreground" />
                                {divisi}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
