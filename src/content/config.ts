import { defineCollection, z } from "astro:content";

// Kabinet collection - periode kepengurusan
const kabinetCollection = defineCollection({
    type: "content",
    schema: z.object({
        nama: z.string(),
        periode: z.string(), // e.g., "2024/2025"
        aktif: z.boolean(),
        tagline: z.string().optional(),
        deskripsi: z.string().optional(),
    }),
});

// Struktur collection - anggota pengurus
const strukturCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            nama: z.string(),
            jabatan: z.string(),
            divisi: z.string().optional(),
            foto: image().optional(),
            instagram: z.string().optional(),
            urutan: z.number(), // untuk sorting display
            kabinetId: z.string(), // reference to kabinet
        }),
});

// Proker collection - program kerja
const prokerCollection = defineCollection({
    type: "content",
    schema: z.object({
        nama: z.string(),
        bidang: z.string(),
        deskripsi: z.string(),
        status: z.enum(["perencanaan", "berjalan", "selesai"]),
        tanggal: z.date().optional(),
        kabinetId: z.string(),
    }),
});

// Pages collection - halaman statis
const pagesCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = {
    kabinet: kabinetCollection,
    struktur: strukturCollection,
    proker: prokerCollection,
    pages: pagesCollection,
};
