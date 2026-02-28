/**
 * Scheme List Screen - Browse all government schemes
 */

import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../constants/typography';
import {SPACING, BORDER_RADIUS} from '../constants/spacing';
import {SCHEMES, SCHEME_CATEGORIES} from '../constants/schemes';
import {ROUTES} from '../constants/routes';
import SchemeCard from '../components/SchemeCard';

const SchemeListScreen = ({route, navigation}) => {
  const {categoryId, categoryName} = route.params || {};
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryId || null);

  const filteredSchemes = useMemo(() => {
    return SCHEMES.filter(scheme => {
      const matchesCategory = selectedCategory
        ? scheme.categoryId === selectedCategory
        : true;
      const matchesSearch = searchQuery
        ? scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          scheme.shortDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {categoryName || 'All Schemes'}
        </Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search schemes..."
          placeholderTextColor={COLORS.textHint}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={styles.clearIcon}>✕</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Category Filter */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterChip,
            !selectedCategory && styles.filterChipActive,
          ]}
          onPress={() => setSelectedCategory(null)}>
          <Text
            style={[
              styles.filterChipText,
              !selectedCategory && styles.filterChipTextActive,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        {SCHEME_CATEGORIES.map(cat => (
          <TouchableOpacity
            key={cat.id}
            style={[
              styles.filterChip,
              selectedCategory === cat.id && styles.filterChipActive,
            ]}
            onPress={() =>
              setSelectedCategory(
                selectedCategory === cat.id ? null : cat.id,
              )
            }>
            <Text
              style={[
                styles.filterChipText,
                selectedCategory === cat.id && styles.filterChipTextActive,
              ]}>
              {cat.icon} {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Results */}
      <FlatList
        data={filteredSchemes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SchemeCard
            scheme={item}
            onPress={() => navigation.navigate(ROUTES.SCHEME_DETAILS, {scheme: item})}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyTitle}>No schemes found</Text>
            <Text style={styles.emptySubtitle}>
              Try changing your search or filter
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    margin: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: SPACING.sm,
    fontSize: FONT_SIZES.md,
    color: COLORS.textPrimary,
  },
  clearIcon: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    padding: SPACING.xs,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.sm,
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
  filterChip: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.divider,
    marginRight: SPACING.xs,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterChipText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  filterChipTextActive: {
    color: COLORS.white,
  },
  listContent: {
    paddingBottom: SPACING.xl,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: SPACING.xxxl,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  emptyTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  emptySubtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
  },
});

export default SchemeListScreen;
