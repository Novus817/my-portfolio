import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'j4qcwpjn',
  dataset: 'production',
  title: 'My Portfolio Website',
  apiVersion: '2023-07-09',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
