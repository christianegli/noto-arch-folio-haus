import axios from 'axios';
import { z } from 'zod';

const api = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
});

// ---------- Schemas ----------
const uploadFileSchema = z.object({
  id: z.number(),
  url: z.string(),
  formats: z.record(z.any()).optional(),
  mime: z.string(),
  name: z.string(),
});

const imageField = z.union([uploadFileSchema, z.null(), z.undefined()]);

const projectSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    slug: z.string(),
    location: z.string().nullable(),
    year: z.string().nullable(),
    category: z.string().nullable(),
    description: z.string().nullable(),
    thumbnail: imageField,
  }),
});

const aboutSchema = z.object({
  id: z.number(),
  attributes: z.object({
    heading: z.string(),
    content: z.string(),
  }),
});

const teamMemberSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().nullable(),
    photo: imageField.optional(),
  }),
});

const contactInfoSchema = z.object({
  id: z.number(),
  attributes: z.object({
    address: z.string(),
    phone: z.string(),
    email: z.string(),
    workingHours: z.string(),
  }),
});

// -------- Helpers --------
export const getStrapiMedia = (media: any): string | null => {
  if (!media) return null;
  const url: string = media.url || media.data?.attributes?.url;
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${url}`;
};

// -------- API Functions --------
export async function getProjects(): Promise<z.infer<typeof projectSchema>[]> {
  const res = await api.get('/api/projects?populate=thumbnail');
  const array = res.data?.data ?? [];
  return z.array(projectSchema).parse(array);
}

export async function getProjectBySlug(slug: string) {
  const res = await api.get(`/api/projects?filters[slug][$eq]=${slug}&populate=thumbnail`);
  const data = res.data?.data?.[0];
  if (!data) return null;
  return projectSchema.parse(data);
}

export async function getAbout() {
  const res = await api.get('/api/about?populate=*');
  if (!res.data?.data) return null;
  return aboutSchema.parse(res.data.data);
}

export async function getTeam() {
  const res = await api.get('/api/team-members?populate=photo');
  return z.array(teamMemberSchema).parse(res.data?.data ?? []);
}

export async function getContactInfo() {
  const res = await api.get('/api/contact-info');
  if (!res.data?.data) return null;
  return contactInfoSchema.parse(res.data.data);
} 