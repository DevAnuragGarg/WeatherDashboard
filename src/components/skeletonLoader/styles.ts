import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Skeleton common style
  skeletonBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 12,
  },

  // Skeleton variations
  citySkeleton: {
    width: 180,
    height: 30,
  },
  tempSkeleton: {
    width: 120,
    height: 28,
  },
  humiditySkeleton: {
    width: 100,
    height: 22,
  },
  conditionSkeleton: {
    width: 140,
    height: 22,
  },
});
