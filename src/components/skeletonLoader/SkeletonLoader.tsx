import { View } from 'react-native';
import { styles } from './styles';

export const SkeletonLoader: React.FC = () => {
  return (
    <View>
      <View style={[styles.skeletonBox, styles.citySkeleton]} />
      <View style={[styles.skeletonBox, styles.tempSkeleton]} />
      <View style={[styles.skeletonBox, styles.humiditySkeleton]} />
      <View style={[styles.skeletonBox, styles.conditionSkeleton]} />
    </View>
  );
};
