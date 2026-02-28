/**
 * Profile Screen - User profile and settings
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
import {APP_VERSION, SUPPORT_PHONE, HELPLINE} from '../constants/schemes';
import {ROUTES} from '../constants/routes';

const MENU_ITEMS = [
  {
    section: 'Account',
    items: [
      {id: '1', icon: '👤', title: 'Personal Information', hasArrow: true},
      {id: '2', icon: '📋', title: 'My Applications', hasArrow: true},
      {id: '3', icon: '💳', title: 'Payment History', hasArrow: true},
      {id: '4', icon: '🏠', title: 'Linked Aadhaar', hasArrow: true},
    ],
  },
  {
    section: 'Support',
    items: [
      {id: '5', icon: '❓', title: 'FAQ', hasArrow: true},
      {id: '6', icon: '📢', title: 'Grievance Portal', hasArrow: true},
      {id: '7', icon: '📞', title: `Helpline: ${HELPLINE}`, hasArrow: false},
    ],
  },
  {
    section: 'Settings',
    items: [
      {id: '8', icon: '🔔', title: 'Notifications', hasArrow: true},
      {id: '9', icon: '🌐', title: 'Language', hasArrow: true, value: 'English'},
      {id: '10', icon: '🔒', title: 'Privacy Policy', hasArrow: true},
      {id: '11', icon: '📜', title: 'Terms of Service', hasArrow: true},
    ],
  },
];

const ProfileScreen = ({navigation}) => {
  const handleLogout = () => {
    navigation.replace(ROUTES.AUTH);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Citizen User</Text>
            <Text style={styles.profileMobile}>+91 XXXXXX1234</Text>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓ Aadhaar Verified</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editIcon}>✏️</Text>
          </TouchableOpacity>
        </View>

        {/* Scheme Summary */}
        <View style={styles.summaryContainer}>
          {[
            {label: 'Applied', value: '3', icon: '📋'},
            {label: 'Approved', value: '2', icon: '✅'},
            {label: 'Pending', value: '1', icon: '⏳'},
          ].map(item => (
            <View key={item.label} style={styles.summaryCard}>
              <Text style={styles.summaryIcon}>{item.icon}</Text>
              <Text style={styles.summaryValue}>{item.value}</Text>
              <Text style={styles.summaryLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu Sections */}
        {MENU_ITEMS.map(section => (
          <View key={section.section} style={styles.menuSection}>
            <Text style={styles.menuSectionTitle}>{section.section}</Text>
            {section.items.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.menuItem,
                  index < section.items.length - 1 && styles.menuItemBorder,
                ]}>
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <View style={styles.menuRight}>
                  {item.value && (
                    <Text style={styles.menuValue}>{item.value}</Text>
                  )}
                  {item.hasArrow && (
                    <Text style={styles.menuArrow}>›</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>🚪 Logout</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>
          eGov YSR v{APP_VERSION} | Government of Andhra Pradesh
        </Text>
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
    paddingVertical: SPACING.md,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
  },
  profileCard: {
    backgroundColor: COLORS.white,
    marginTop: SPACING.sm,
    padding: SPACING.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  avatarText: {
    fontSize: 32,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
  },
  profileMobile: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  verifiedBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.sm,
    alignSelf: 'flex-start',
  },
  verifiedText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.success,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
  editButton: {
    padding: SPACING.sm,
  },
  editIcon: {
    fontSize: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginTop: SPACING.sm,
    padding: SPACING.md,
    justifyContent: 'space-around',
  },
  summaryCard: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    flex: 1,
    marginHorizontal: SPACING.xs,
  },
  summaryIcon: {
    fontSize: 24,
    marginBottom: SPACING.xs,
  },
  summaryValue: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.extraBold,
    color: COLORS.primary,
  },
  summaryLabel: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  menuSection: {
    backgroundColor: COLORS.white,
    marginTop: SPACING.sm,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.xs,
  },
  menuSectionTitle: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semiBold,
    color: COLORS.textHint,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: SPACING.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  menuIcon: {
    fontSize: 20,
    width: 32,
    marginRight: SPACING.md,
  },
  menuTitle: {
    flex: 1,
    fontSize: FONT_SIZES.md,
    color: COLORS.textPrimary,
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuValue: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginRight: SPACING.xs,
  },
  menuArrow: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.textHint,
  },
  logoutButton: {
    margin: SPACING.md,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.error,
  },
  logoutText: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semiBold,
    color: COLORS.error,
  },
  versionText: {
    textAlign: 'center',
    fontSize: FONT_SIZES.xs,
    color: COLORS.textHint,
    paddingBottom: SPACING.xxl,
  },
});

export default ProfileScreen;
