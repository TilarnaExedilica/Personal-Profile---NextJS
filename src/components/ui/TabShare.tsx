import { shareConfig } from '@/config/config';
import GridView from '@/components/common/GridView';

export default function TabShare() {
  return <GridView items={shareConfig.shares} title="" />;
} 