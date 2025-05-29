import { PortableTextBlock } from 'sanity';

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
  seo?: {
    seoTitle?: string;
    seoDescription?: string;
    seoImage?: string;
    seoImageAlt?: string;
  };
};
