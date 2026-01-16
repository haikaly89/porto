// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  // TAHAP 3: Konfigurasi Storage dengan mode GitHub untuk Vercel
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
      kind: 'github',
      repo: 'haikaly89/porto',
    },

  // 1. DATA SINGLETONS (Profile & CV)
  singletons: {
    profile: singleton({
      label: 'Profile Settings',
      path: 'src/content/profile/data',
      schema: {
        name: fields.text({ label: 'Nama Lengkap' }),
        role: fields.text({ label: 'Jabatan / Role' }),
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

    cv: singleton({
      label: 'CV Data',
      path: 'src/content/cv/data',
      schema: {
        name: fields.text({ label: 'Nama Lengkap' }),
        role: fields.text({ label: 'Role / Headline' }),
        contact: fields.text({ label: 'Info Kontak (Email | HP | LinkedIn)' }),
        summary: fields.text({ label: 'Summary / Ringkasan Diri', multiline: true }),

        experience: fields.array(
          fields.object({
            position: fields.text({ label: 'Posisi' }),
            company: fields.text({ label: 'Perusahaan/Instansi' }),
            date: fields.text({ label: 'Periode (ex: 2024 - Present)' }),
            location: fields.text({ label: 'Lokasi' }),
            highlights: fields.array(fields.text({ label: 'Poin Jobdesc' }), {
              label: 'Job Desc / Achievements'
            }),
          }),
          {
            label: 'Work Experience',
            itemLabel: props => `${props.fields.position.value} @ ${props.fields.company.value}`
          }
        ),

        volunteer: fields.array(
          fields.object({
            role: fields.text({ label: 'Peran' }),
            event: fields.text({ label: 'Event/Organisasi' }),
            date: fields.text({ label: 'Periode' }),
            location: fields.text({ label: 'Lokasi' }),
            highlights: fields.array(fields.text({ label: 'Poin Tugas' }), { label: 'Tugas' }),
          }),
          { label: 'Volunteer Experience', itemLabel: props => props.fields.event.value }
        ),

        organization: fields.array(
          fields.object({
            role: fields.text({ label: 'Jabatan' }),
            name: fields.text({ label: 'Nama Organisasi' }),
            date: fields.text({ label: 'Periode' }),
            highlights: fields.array(fields.text({ label: 'Poin Tugas' }), { label: 'Tugas' }),
          }),
          { label: 'Organizations', itemLabel: props => props.fields.name.value }
        ),

        education: fields.array(
          fields.object({
            school: fields.text({ label: 'Kampus / Sekolah' }),
            degree: fields.text({ label: 'Gelar / Jurusan' }),
            date: fields.text({ label: 'Periode (ex: 2020 - 2024)' }),
            details: fields.text({ label: 'Detail (IPK/Mata Kuliah)', multiline: true }),
          }),
          { label: 'Education', itemLabel: props => props.fields.school.value }
        ),

        skills: fields.text({ label: 'Skills (List Manual)', multiline: true }),
        certifications: fields.array(
          fields.text({ label: 'Nama Sertifikat' }),
          { label: 'Certifications' }
        ),
      },
    }),
  },

  // 2. DATA COLLECTIONS (Posts, Badges, Projects)
  collections: {
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