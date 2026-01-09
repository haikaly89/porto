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

// 3. Definisi CV (Tipe: Data)
const cv = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
    summary: z.string(),
    experience: z.array(z.object({
      position: z.string(),
      company: z.string(),
      date: z.string(),
      location: z.string(),
      summary: z.string().optional(),
      highlights: z.array(z.string()),
    })),
    education: z.array(z.object({
      school: z.string(),
      degree: z.string(),
      date: z.string(),
    })),
    skills: z.array(z.object({
      category: z.string(),
      icon: z.string().optional(),
      items: z.string(), // Akan di-split berdasarkan koma di frontend
    })),
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