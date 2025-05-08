import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: any;
  alt: string;
  url: string;
  caption: string;
  content: PortableTextBlock[];
};
