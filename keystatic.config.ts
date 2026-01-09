// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  // 1. DATA PROFIL (SINGLETONS)
  singletons: {
    profile: singleton({
      label: 'Profile Settings',
      path: 'src/content/profile/data',
      schema: {
        name: fields.text({ label: 'Nama Lengkap' }),
        role: fields.text({ label: 'Jabatan / Role' }),
        // Bio menggunakan text biasa + multiline sesuai permintaan
        bio: fields.text({
          label: 'Bio / Deskripsi',
          multiline: true, 
        }),
        avatar: fields.image({
          label: 'Foto Profil',
          directory: 'public/images/profile',
          publicPath: '/images/profile/',
        }),
        location: fields.text({ label: 'Lokasi (ex: Singapore)' }),
      },
    }),
  },

  // 2. DATA KOLEKSI (COLLECTIONS)
  collections: {
    // A. Blog Posts
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Artikel' } }),
        date: fields.date({ label: 'Tanggal Publish' }),
        content: fields.document({
          label: 'Isi Konten',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts',
            publicPath: '/images/posts/',
          },
        }),
      },
    }),

    // B. Badges / Sertifikat
    badges: collection({
      label: 'Certificates & Badges',
      slugField: 'name',
      path: 'src/content/badges/*',
      schema: {
        name: fields.slug({ name: { label: 'Nama Sertifikat' } }),
        description: fields.text({ label: 'Deskripsi Singkat' }),
        logo: fields.image({
          label: 'Logo Badge',
          directory: 'public/images/badges',
          publicPath: '/images/badges/',
        }),
      },
    }),

    // C. Projects (TAMBAHAN BARU)
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Nama Proyek' } }),
        date: fields.date({ label: 'Tanggal Pengerjaan' }),
        summary: fields.text({ 
          label: 'Deskripsi Singkat', 
          description: 'Akan muncul di kartu halaman depan (Card)',
          multiline: true 
        }),
        tags: fields.array(
          fields.text({ label: 'Teknologi' }),
          { label: 'Tech Stack (ex: Python, React, AI)', itemLabel: props => props.value }
        ),
        content: fields.document({
          label: 'Detail Proyek (Isi Lengkap)',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/projects',
            publicPath: '/images/projects/',
          },
        }),
      },
    }),
  },
});