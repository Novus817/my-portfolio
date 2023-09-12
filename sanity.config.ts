import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'j4qcwpjn',
  dataset: 'production',
  title: 'My Portfolio Website',
  apiVersion: '2023-07-09',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
