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

// 3. Definisi CV (Tipe: Data - Skema Terbaru)
const cv = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    contact: z.string(), // Menggabungkan email/phone/social
    summary: z.string(),
    
    experience: z.array(z.object({
      position: z.string(),
      company: z.string(),
      date: z.string(),
      location: z.string(),
      highlights: z.array(z.string()),
    })),

    volunteer: z.array(z.object({
      role: z.string(),
      event: z.string(),
      date: z.string(),
      location: z.string(),
      highlights: z.array(z.string()),
    })).optional(),

    organization: z.array(z.object({
      role: z.string(),
      name: z.string(),
      date: z.string(),
      highlights: z.array(z.string()),
    })).optional(),

    education: z.array(z.object({
      school: z.string(),
      degree: z.string(),
      date: z.string(),
      details: z.string().optional(),
    })),

    skills: z.string(), // Berubah menjadi string (List Manual) sesuai snippet kedua
    certifications: z.array(z.string()),
  }),
});

// 4. Definisi Posts (Tipe: Content)
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

// 5. Definisi Projects (Tipe: Content)
const projects = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()), 
    cover: z.string().optional(),
  }),
});

// EKSPOR SEMUA KOLEKSI
export const collections = {
  profile,
  badges,
  cv,
  posts,
  projects,
};