/**
 * Scheme Details Screen - Full details of a government scheme
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../constants/typography';
import {SPACING, BORDER_RADIUS} from '../constants/spacing';

const Section = ({title, children}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const BulletItem = ({text}) => (
  <View style={styles.bulletItem}>
    <Text style={styles.bulletDot}>•</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const SchemeDetailsScreen = ({route, navigation}) => {
  const {scheme} = route.params;

  const handleApply = () => {
    if (scheme.applicationUrl) {
      Linking.openURL(scheme.applicationUrl).catch(() => {
        Alert.alert(
          'Unable to Open',
          'Please visit the official AP Government portal to apply.',
        );
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          Scheme Details
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <View
            style={[
              styles.categoryBadge,
              {backgroundColor: COLORS.primaryLight},
            ]}>
            <Text style={styles.categoryBadgeText}>{scheme.category}</Text>
          </View>
          <Text style={styles.schemeName}>{scheme.name}</Text>
          <Text style={styles.schemeShortDesc}>{scheme.shortDescription}</Text>
          <View style={styles.statusBadge}>
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor:
                    scheme.status === 'active' ? COLORS.success : COLORS.warning,
                },
              ]}
            />
            <Text style={styles.statusText}>
              {scheme.status === 'active' ? 'Currently Active' : 'Inactive'}
            </Text>
          </View>
        </View>

        {/* Description */}
        <Section title="About this Scheme">
          <Text style={styles.descriptionText}>{scheme.description}</Text>
        </Section>

        {/* Benefits */}
        <Section title="Benefits">
          {scheme.benefits.map((benefit, index) => (
            <BulletItem key={index} text={benefit} />
          ))}
        </Section>

        {/* Eligibility */}
        <Section title="Eligibility Criteria">
          {scheme.eligibility.map((criteria, index) => (
            <BulletItem key={index} text={criteria} />
          ))}
        </Section>

        {/* Required Documents */}
        <Section title="Required Documents">
          {scheme.documents.map((doc, index) => (
            <View key={index} style={styles.documentItem}>
              <Text style={styles.documentNumber}>{index + 1}</Text>
              <Text style={styles.documentText}>{doc}</Text>
            </View>
          ))}
        </Section>

        {/* Helpline */}
        <View style={styles.helplineCard}>
          <Text style={styles.helplineTitle}>Need Help Applying?</Text>
          <Text style={styles.helplineText}>
            Visit your nearest Mee Seva center or call our helpline
          </Text>
          <Text style={styles.helplineNumber}>📞 14566</Text>
        </View>
      </ScrollView>

      {/* Apply Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkEligibilityButton}>
          <Text style={styles.checkEligibilityText}>Check Eligibility</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },
  backButton: {
    marginRight: SPACING.md,
  },
  backIcon: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.white,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
    flex: 1,
  },
  hero: {
    backgroundColor: COLORS.white,
    padding: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.sm,
  },
  categoryBadgeText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.semiBold,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  schemeName: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.extraBold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
    lineHeight: 30,
  },
  schemeShortDesc: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: SPACING.md,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: SPACING.xs,
  },
  statusText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  section: {
    backgroundColor: COLORS.white,
    marginTop: SPACING.sm,
    padding: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
    paddingBottom: SPACING.xs,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  descriptionText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
  },
  bulletDot: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.primary,
    marginRight: SPACING.sm,
    lineHeight: 22,
  },
  bulletText: {
    flex: 1,
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.sm,
  },
  documentNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.bold,
    textAlign: 'center',
    lineHeight: 28,
    marginRight: SPACING.sm,
  },
  documentText: {
    flex: 1,
    fontSize: FONT_SIZES.md,
    color: COLORS.textPrimary,
  },
  helplineCard: {
    backgroundColor: COLORS.primaryDark,
    margin: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  helplineTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  helplineText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.white,
    opacity: 0.85,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  helplineNumber: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.secondary,
  },
  footer: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
  },
  applyButton: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  applyButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
  },
  checkEligibilityButton: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  checkEligibilityText: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
  },
});

export default SchemeDetailsScreen;
