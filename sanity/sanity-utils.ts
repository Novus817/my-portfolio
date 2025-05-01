import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';
import { Page } from '@/types/Page';
import clientConfig from './config/client-config';

export const revalidate = true;

export async function getProjects(limit?: number): Promise<Project[]> {
  try {
    const query = groq`*[_type == "project"] | order(_createdAt desc){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      content
    }${limit ? `[0...${limit}]` : ''}`;
    const projects = await createClient(clientConfig).fetch(query);
    return projects || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProject(slug: string): Promise<Project> {
  try {
    const project = await createClient(clientConfig).fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      content
    }`,
      { slug },
    );
    return project || null;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export async function getPages(): Promise<Page[]> {
  try {
    const pages = await createClient(clientConfig).fetch(
      groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`,
    );
    return pages || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPage(slug: string): Promise<Page> {
  try {
    const page = await createClient(clientConfig).fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
      { slug },
    );
    return page || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
