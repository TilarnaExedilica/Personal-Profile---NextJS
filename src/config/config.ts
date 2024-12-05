import profileData from '@/data/profile.json';
import collectionData from '@/data/collection.json';
import shareData from '@/data/share.json';
import timelineData from '@/data/timeline.json';
import type { Profile } from '@/types/profile';
import type { Collection } from '@/types/collection';
import type { Share } from '@/types/share';
import type { Timeline } from '@/types/timeline';

export const profileConfig: Profile = profileData;
export const collectionConfig: Collection = collectionData;
export const shareConfig: Share = shareData;
export const timelineConfig: Timeline = timelineData;