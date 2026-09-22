import yaml from 'js-yaml';
import siteYaml from '../data/site.yaml?raw';
import type { SiteConfig } from './site.types';

export type { SiteConfig, SiteLink } from './site.types';

export const site = yaml.load(siteYaml) as SiteConfig;
