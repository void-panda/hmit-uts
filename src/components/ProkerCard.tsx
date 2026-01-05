import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, Clock, PlayCircle } from "lucide-react";

interface ProkerCardProps {
    nama: string;
    bidang: string;
    deskripsi: string;
    status: "perencanaan" | "berjalan" | "selesai";
}

const statusConfig = {
    perencanaan: {
        label: "Perencanaan",
        color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        icon: Clock,
    },
    berjalan: {
        label: "Berjalan",
        color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
        icon: PlayCircle,
    },
    selesai: {
        label: "Selesai",
        color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        icon: CheckCircle2,
    },
};

export function ProkerCard({ nama, bidang, deskripsi, status }: ProkerCardProps) {
    const config = statusConfig[status];
    const StatusIcon = config.icon;

    return (
        <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-orange-400 opacity-0 transition-opacity group-hover:opacity-100" />

            <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                    <Badge variant="outline" className={`flex items-center gap-1.5 px-3 py-1 font-bold ${config.color}`}>
                        <StatusIcon className="size-3.5" />
                        {config.label}
                    </Badge>
                    <div className="rounded-full bg-primary/10 p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Calendar className="size-4" />
                    </div>
                </div>

                <div className="space-y-1">
                    <CardTitle className="text-xl font-bold transition-colors group-hover:text-primary leading-tight">
                        {nama}
                    </CardTitle>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        {bidang}
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                    {deskripsi}
                </p>
            </CardContent>

            <div className="absolute bottom-0 right-0 p-4 opacity-0 transition-all translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-xs font-black text-primary uppercase">Detail Proker →</span>
            </div>
        </Card>
    );
}
