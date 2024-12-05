import profileData from '@/data/profile.json';
import collectionData from '@/data/collection.json';
import blogData from '@/data/blog.json';
import timelineData from '@/data/timeline.json';
import type { Profile } from '@/types/profile';
import type { Collection } from '@/types/collection';
import type { Blog } from '@/types/blog';
import type { Timeline } from '@/types/timeline';

export const profileConfig: Profile = profileData;
export const collectionConfig: Collection = collectionData;
export const blogConfig: Blog = blogData;
export const timelineConfig: Timeline = timelineData;