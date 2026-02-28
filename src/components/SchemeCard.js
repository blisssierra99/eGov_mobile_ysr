/**
 * SchemeCard Component - Displays a summary card for a government scheme
 */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../constants/typography';
import {SPACING, BORDER_RADIUS} from '../constants/spacing';

const CATEGORY_COLORS = {
  Agriculture: '#27AE60',
  Health: '#E74C3C',
  Education: '#3498DB',
  Housing: '#9B59B6',
  'Social Security': '#E67E22',
  'Women Empowerment': '#E91E63',
  Fishermen: '#00BCD4',
  Entrepreneurs: '#FF9800',
};

const SchemeCard = ({scheme, onPress}) => {
  const categoryColor = CATEGORY_COLORS[scheme.category] || COLORS.primary;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.categoryStrip, {backgroundColor: categoryColor}]} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View
            style={[
              styles.categoryBadge,
              {backgroundColor: categoryColor + '20'},
            ]}>
            <Text style={[styles.categoryText, {color: categoryColor}]}>
              {scheme.category}
            </Text>
          </View>
          {scheme.status === 'active' && (
            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>Active</Text>
            </View>
          )}
        </View>
        <Text style={styles.name}>{scheme.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {scheme.shortDescription}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.viewDetails}>View Details →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
    borderRadius: BORDER_RADIUS.lg,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryStrip: {
    width: 4,
  },
  content: {
    flex: 1,
    padding: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  categoryBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.sm,
  },
  categoryText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.semiBold,
    textTransform: 'uppercase',
  },
  activeBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.sm,
  },
  activeText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.success,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
  name: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
    lineHeight: 22,
  },
  description: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: SPACING.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewDetails: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
});

export default SchemeCard;
