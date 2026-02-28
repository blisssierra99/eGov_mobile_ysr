/**
 * Home Screen - Main dashboard for eGov YSR app
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
import {SCHEME_CATEGORIES, SCHEMES} from '../constants/schemes';
import {ROUTES} from '../constants/routes';
import SchemeCard from '../components/SchemeCard';
import CategoryCard from '../components/CategoryCard';

const HomeScreen = ({navigation}) => {
  const featuredSchemes = SCHEMES.slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Namaste! 🙏</Text>
              <Text style={styles.govTitle}>Government of Andhra Pradesh</Text>
            </View>
            <TouchableOpacity
              style={styles.notificationBtn}
              onPress={() => navigation.navigate(ROUTES.NOTIFICATIONS)}>
              <Text style={styles.notificationIcon}>🔔</Text>
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => navigation.navigate(ROUTES.SEARCH)}>
            <Text style={styles.searchIcon}>🔍</Text>
            <Text style={styles.searchPlaceholder}>
              Search schemes and services...
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinksSection}>
          <Text style={styles.sectionTitle}>Quick Services</Text>
          <View style={styles.quickLinksGrid}>
            {[
              {icon: '📋', label: 'Apply', color: '#E3F2FD'},
              {icon: '🔍', label: 'Track', color: '#E8F5E9'},
              {icon: '📜', label: 'Status', color: '#FFF3E0'},
              {icon: '💳', label: 'Payments', color: '#FCE4EC'},
            ].map(item => (
              <TouchableOpacity key={item.label} style={styles.quickLink}>
                <View style={[styles.quickLinkIcon, {backgroundColor: item.color}]}>
                  <Text style={styles.quickLinkEmoji}>{item.icon}</Text>
                </View>
                <Text style={styles.quickLinkLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Scheme Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.SCHEME_LIST)}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}>
            {SCHEME_CATEGORIES.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                onPress={() =>
                  navigation.navigate(ROUTES.SCHEME_LIST, {
                    categoryId: category.id,
                    categoryName: category.name,
                  })
                }
              />
            ))}
          </ScrollView>
        </View>

        {/* Featured Schemes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Schemes</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.SCHEME_LIST)}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {featuredSchemes.map(scheme => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              onPress={() =>
                navigation.navigate(ROUTES.SCHEME_DETAILS, {scheme})
              }
            />
          ))}
        </View>

        {/* Helpline Banner */}
        <View style={styles.helplineBanner}>
          <Text style={styles.helplineTitle}>Need Help?</Text>
          <Text style={styles.helplineText}>
            Call our 24/7 helpline for assistance
          </Text>
          <TouchableOpacity style={styles.helplineButton}>
            <Text style={styles.helplineButtonText}>📞 Helpline: 14566</Text>
          </TouchableOpacity>
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
    paddingBottom: SPACING.xl,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  greeting: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.white,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
  govTitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.white,
    opacity: 0.85,
  },
  notificationBtn: {
    padding: SPACING.sm,
  },
  notificationIcon: {
    fontSize: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.xl,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  searchPlaceholder: {
    color: COLORS.textHint,
    fontSize: FONT_SIZES.md,
  },
  quickLinksSection: {
    backgroundColor: COLORS.white,
    marginTop: -SPACING.sm,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SPACING.md,
  },
  quickLink: {
    alignItems: 'center',
  },
  quickLinkIcon: {
    width: 56,
    height: 56,
    borderRadius: BORDER_RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  quickLinkEmoji: {
    fontSize: 24,
  },
  quickLinkLabel: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  section: {
    marginTop: SPACING.sm,
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
  },
  seeAll: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  categoriesContainer: {
    paddingHorizontal: SPACING.md,
    paddingRight: SPACING.md,
  },
  helplineBanner: {
    margin: SPACING.md,
    backgroundColor: COLORS.primaryDark,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    alignItems: 'center',
    marginBottom: SPACING.xxl,
  },
  helplineTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  helplineText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  helplineButton: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.round,
  },
  helplineButtonText: {
    color: COLORS.primaryDark,
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: FONT_SIZES.md,
  },
});

export default HomeScreen;
