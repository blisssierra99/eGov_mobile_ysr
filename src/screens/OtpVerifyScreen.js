/**
 * OTP Verification Screen
 */

import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../constants/typography';
import {SPACING, BORDER_RADIUS} from '../constants/spacing';
import {ROUTES} from '../constants/routes';

const OTP_LENGTH = 6;
const RESEND_TIMEOUT = 30;

const OtpVerifyScreen = ({route, navigation}) => {
  const {mobile} = route.params;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(RESEND_TIMEOUT);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key, index) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < OTP_LENGTH) {
      setError('Please enter the complete OTP');
      return;
    }
    // In a real app, validate OTP with backend
    navigation.replace(ROUTES.MAIN);
  };

  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(''));
    setTimer(RESEND_TIMEOUT);
    setError('');
  };

  const maskedMobile = `+91 XXXXXX${mobile.slice(-4)}`;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          We have sent a 6-digit OTP to{'\n'}
          <Text style={styles.mobileText}>{maskedMobile}</Text>
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={[styles.otpInput, digit && styles.otpInputFilled]}
              value={digit}
              onChangeText={value => handleOtpChange(value, index)}
              onKeyPress={({nativeEvent}) =>
                handleKeyPress(nativeEvent.key, index)
              }
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={[
            styles.verifyButton,
            otp.join('').length < OTP_LENGTH && styles.verifyButtonDisabled,
          ]}
          onPress={handleVerify}
          disabled={otp.join('').length < OTP_LENGTH}>
          <Text style={styles.verifyButtonText}>Verify & Login</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          {timer > 0 ? (
            <Text style={styles.timerText}>
              Resend OTP in <Text style={styles.timerCount}>{timer}s</Text>
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendText}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backButton: {
    padding: SPACING.md,
    marginTop: SPACING.sm,
  },
  backIcon: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
  },
  title: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    lineHeight: 24,
    marginBottom: SPACING.xl,
  },
  mobileText: {
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.lg,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderColor: COLORS.divider,
    borderRadius: BORDER_RADIUS.md,
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    backgroundColor: COLORS.background,
  },
  otpInputFilled: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONT_SIZES.sm,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  verifyButtonDisabled: {
    opacity: 0.5,
  },
  verifyButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  timerText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
  },
  timerCount: {
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
  },
  resendText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
});

export default OtpVerifyScreen;
