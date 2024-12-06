export interface Profile {
  name: string;
  codename: string;
  avatar_url: string;
  introduction: Introduction[];
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
  jobTags: JobTag[];
  plays: Play[];
}

export interface Introduction {
  type: string;
  title: string;
  description: string;
}

export interface Icon {
  paths: string[];
  size: number;
}

export interface Colors {
  icon?: string;
  hover?: string;
  background?: string;
  text?: string;
}

export interface Borders {
  color: string;
}

export interface ContactInfo {
  type: string;
  value: string;
  url: string;
  icon: Icon;
  colors: Colors;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: Icon;
}

export interface JobTag {
  title: string;
  icon: Icon;
  colors: Colors;
  borders: Borders;
}

export interface Play {
  game: string;
  url: string;
  img_url: string;
  code: string;
} 