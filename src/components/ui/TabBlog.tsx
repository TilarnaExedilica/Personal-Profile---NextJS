import { blogConfig } from '@/config/config';
import GridView from '@/components/common/GridView';

export default function TabBlog() {
  return <GridView items={blogConfig.blogs} title="" />;
} 