import { collectionConfig } from '@/config/config';
import GridView from '@/components/common/GridView';

export default function TabCollection() {
  return <GridView items={collectionConfig.collections} title="" />;
} 