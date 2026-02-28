/**
 * Login Screen - OTP-based authentication
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../constants/typography';
import {SPACING, BORDER_RADIUS} from '../constants/spacing';
import {ROUTES} from '../constants/routes';

const LoginScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const validateMobile = number => /^[6-9]\d{9}$/.test(number);

  const handleSendOTP = () => {
    if (!validateMobile(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    navigation.navigate(ROUTES.OTP_VERIFY, {mobile});
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.govLogo}>🏛️</Text>
            <Text style={styles.govName}>Government of Andhra Pradesh</Text>
            <Text style={styles.appName}>eGov YSR</Text>
            <Text style={styles.tagline}>Citizen Services at Your Fingertips</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.formTitle}>Login with Mobile Number</Text>
            <Text style={styles.formSubtitle}>
              Enter your Aadhaar-linked mobile number to receive OTP
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputPrefix}>+91</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter mobile number"
                placeholderTextColor={COLORS.textHint}
                keyboardType="phone-pad"
                maxLength={10}
                value={mobile}
                onChangeText={text => {
                  setMobile(text);
                  setError('');
                }}
              />
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={[
                styles.button,
                mobile.length < 10 && styles.buttonDisabled,
              ]}
              onPress={handleSendOTP}
              disabled={mobile.length < 10}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>

            <Text style={styles.disclaimer}>
              By continuing, you agree to our{' '}
              <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Helpline: 14566</Text>
            <Text style={styles.footerText}>
              support@egov.ap.gov.in
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    paddingTop: SPACING.xxxl,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  govLogo: {
    fontSize: 64,
    marginBottom: SPACING.md,
  },
  govName: {
    fontSize: FONT_SIZES.md,
    color: COLORS.white,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  appName: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: FONT_WEIGHTS.extraBold,
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  tagline: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.white,
    opacity: 0.8,
    textAlign: 'center',
  },
  form: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: SPACING.xl,
    flex: 1,
  },
  formTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  formSubtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xl,
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.divider,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.md,
    overflow: 'hidden',
  },
  inputPrefix: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.background,
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: FONT_SIZES.md,
    borderRightWidth: 1.5,
    borderRightColor: COLORS.divider,
  },
  input: {
    flex: 1,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    fontSize: FONT_SIZES.lg,
    color: COLORS.textPrimary,
    letterSpacing: 2,
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONT_SIZES.sm,
    marginBottom: SPACING.md,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
  },
  disclaimer: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  link: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  footer: {
    backgroundColor: COLORS.white,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  footerText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textHint,
    marginBottom: SPACING.xs,
  },
});

export default LoginScreen;
