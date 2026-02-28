/**
 * Services Screen - Government services portal
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../constants/typography';
import {SPACING, BORDER_RADIUS} from '../constants/spacing';
import {ROUTES} from '../constants/routes';
import {SCHEME_CATEGORIES} from '../constants/schemes';

const SERVICE_ITEMS = [
  {
    id: '1',
    title: 'Check Eligibility',
    description: 'Find schemes you are eligible for',
    icon: '✅',
    color: '#E8F5E9',
    iconBg: '#27AE60',
  },
  {
    id: '2',
    title: 'Track Application',
    description: 'Track status of your applications',
    icon: '📍',
    color: '#E3F2FD',
    iconBg: '#2196F3',
  },
  {
    id: '3',
    title: 'Payment Status',
    description: 'Check benefit payment history',
    icon: '💰',
    color: '#FFF9C4',
    iconBg: '#F9A825',
  },
  {
    id: '4',
    title: 'Grievance',
    description: 'Submit and track complaints',
    icon: '📢',
    color: '#FCE4EC',
    iconBg: '#E91E63',
  },
  {
    id: '5',
    title: 'Download Certificate',
    description: 'Download benefit certificates',
    icon: '📄',
    color: '#EDE7F6',
    iconBg: '#7B1FA2',
  },
  {
    id: '6',
    title: 'Mee Seva',
    description: 'Find nearest Mee Seva center',
    icon: '🏢',
    color: '#E0F7FA',
    iconBg: '#00838F',
  },
];

const ServicesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <Text style={styles.headerSubtitle}>
          Access government services easily
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {SERVICE_ITEMS.map(service => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceCard, {backgroundColor: service.color}]}>
              <View
                style={[
                  styles.serviceIconContainer,
                  {backgroundColor: service.iconBg},
                ]}>
                <Text style={styles.serviceIcon}>{service.icon}</Text>
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>
                {service.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Browse by Category */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Browse by Category</Text>
          {SCHEME_CATEGORIES.map(category => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryRow}
              onPress={() =>
                navigation.navigate(ROUTES.SCHEME_LIST, {
                  categoryId: category.id,
                  categoryName: category.name,
                })
              }>
              <View
                style={[
                  styles.categoryIcon,
                  {backgroundColor: category.color + '20'},
                ]}>
                <Text style={styles.categoryEmoji}>{category.icon}</Text>
              </View>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryDesc}>{category.description}</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.lg,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.white,
    opacity: 0.85,
    marginTop: SPACING.xs,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: SPACING.sm,
    backgroundColor: COLORS.white,
    marginTop: SPACING.sm,
  },
  serviceCard: {
    width: '46%',
    margin: '2%',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    minHeight: 120,
  },
  serviceIconContainer: {
    width: 44,
    height: 44,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  serviceIcon: {
    fontSize: 22,
  },
  serviceTitle: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  serviceDescription: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    lineHeight: 16,
  },
  categorySection: {
    backgroundColor: COLORS.white,
    marginTop: SPACING.sm,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semiBold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  categoryDesc: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    lineHeight: 16,
  },
  arrowIcon: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.textHint,
  },
});

export default ServicesScreen;
