'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';
import { apiVersion, dataset, projectId } from './sanity/env';

const config = defineConfig({
  projectId,
  dataset,
  title: 'My Portfolio Website',
  apiVersion,
  basePath: '/admin',
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemas },
});

export default config;
