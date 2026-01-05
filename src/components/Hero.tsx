import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";

export function Hero() {
    // Logic to split the full name into two parts for different styling
    const fullName = siteConfig.fullName;
    const splitIndex = fullName.indexOf(" Universitas");
    const mainPart = splitIndex !== -1 ? fullName.substring(0, splitIndex) : fullName;
    const subPart = splitIndex !== -1 ? fullName.substring(splitIndex).trim() : "";

    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 font-sans">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-[10%] left-[10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[130px]" />
                <div className="absolute top-[30%] right-[5%] h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[110px]" />
            </div>

            <div className="container relative z-10 px-6">
                <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
                    {/* Left Column: Content - Taking 3/5 of the space */}
                    <div className="flex flex-col items-start text-left lg:col-span-3">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary animate-in fade-in slide-in-from-left-4 duration-1000">
                            <Sparkles className="size-4 animate-pulse" />
                            <span>Kabinet Inovasi Digital 2024/2025</span>
                        </div>

                        {/* Main heading - SEO Focused */}
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.05] animate-in fade-in slide-in-from-left-6 duration-1200">
                            <span className="block bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent pb-2">
                                {mainPart}
                            </span>
                            {subPart && (
                                <span className="mt-2 block text-foreground italic opacity-90">
                                    {subPart}
                                </span>
                            )}
                        </h1>

                        {/* Tagline / Sub-heading */}
                        <p className="mt-8 text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed animate-in fade-in slide-in-from-left-8 duration-1400 font-medium">
                            Wadah kolaborasi strategis mahasiswa Informatika Universitas Teknologi Sumbawa dalam mengembangkan potensi digital, kreativitas, dan kepemimpinan.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-in fade-in slide-in-from-left-10 duration-1600">
                            <a href="/tentang" className="w-full sm:w-auto">
                                <Button size="lg" className="h-14 w-full rounded-full px-8 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95 group">
                                    Eksplorasi Program
                                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                            <a href="/struktur" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="h-14 w-full rounded-full border-2 px-8 text-lg font-bold transition-all active:scale-95">
                                    <Users className="mr-2 size-5" />
                                    Lihat Pengurus
                                </Button>
                            </a>
                        </div>

                        {/* Stats Summary - Compact in 2-column mode */}
                        <div className="mt-12 flex flex-wrap gap-8 animate-in fade-in duration-1000 delay-500">
                            {[
                                { label: "Anggota Aktif", value: "100+" },
                                { label: "Departemen", value: "6" },
                                { label: "Proker", value: "20+" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-3xl font-black text-primary">{stat.value}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual / Logo - Taking 2/5 of the space */}
                    <div className="hidden lg:flex lg:col-span-2 relative items-center justify-center animate-in fade-in zoom-in-75 duration-1500 delay-300">
                        {/* Decorative concentric circles */}
                        <div className="absolute inset-x-0 h-[500px] w-[500px] rounded-full border border-primary/10 animate-ping [animation-duration:4s]" />
                        <div className="absolute h-[600px] w-[600px] rounded-full border border-primary/5" />

                        {/* Logo Wrapper */}
                        <div className="relative group">
                            <div className="absolute -inset-8 rounded-[4rem] bg-gradient-to-tr from-primary/30 to-orange-500/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative h-80 w-80 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(249,115,22,0.15)] transition-transform duration-700 hover:rotate-2 hover:scale-[1.02] bg-white p-2">
                                <img
                                    src={siteConfig.branding.logo}
                                    alt="HMIT UTS Logo"
                                    className="h-full w-full object-cover rounded-[2.5rem]"
                                />
                            </div>

                            {/* Floating element accents */}
                            <div className="absolute -top-6 -right-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-2xl text-primary-foreground font-black text-4xl animate-bounce [animation-duration:3s]">
                                H
                            </div>
                            <div className="absolute -bottom-10 -left-10 h-12 w-12 rounded-full bg-orange-500 blur-md opacity-40 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
