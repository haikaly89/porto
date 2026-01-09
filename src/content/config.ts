// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Definisi Profile (Tipe: Data)
const profile = defineCollection({
  type: 'data', 
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    location: z.string().optional(),
  }),
});

// 2. Definisi Badges (Tipe: Data)
const badges = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logo: z.string().optional(),
  }),
});

// 3. Definisi Posts (Tipe: Content)
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

// 4. Definisi Projects (Tipe: Content)
const projects = defineCollection({
  type: 'content', // Menggunakan 'content' karena memiliki body artikel/dokumen
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()), // Array string untuk teknologi (misal: ['React', 'Node.js'])
  }),
});

// EKSPOR SEMUA KOLEKSI
// Bagian ini sangat penting agar Astro mengenali folder di src/content/
export const collections = {
  profile,
  badges,
  posts,
  projects,
};