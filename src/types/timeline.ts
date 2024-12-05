export interface Timeline {
  timelines: TimelineItem[];
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  time: string;
  image_url?: string;
} 