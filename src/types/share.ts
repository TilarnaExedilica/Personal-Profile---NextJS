export interface Share {
  shares: ShareItem[];
}

export interface ShareItem {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  post_url: string;
  posted_date: string;
  tags?: string[];
  category?: string;
} 