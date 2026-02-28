/**
 * CategoryCard Component - Displays a category card for scheme browsing
 */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../constants/typography';
import {SPACING, BORDER_RADIUS} from '../constants/spacing';

const CategoryCard = ({category, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.iconContainer, {backgroundColor: category.color + '20'}]}>
        <Text style={styles.icon}>{category.icon}</Text>
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    width: 90,
    borderWidth: 1,
    borderColor: COLORS.divider,
    marginRight: SPACING.sm,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  icon: {
    fontSize: 26,
  },
  name: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.semiBold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default CategoryCard;
