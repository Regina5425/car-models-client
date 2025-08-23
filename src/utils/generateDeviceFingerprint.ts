import * as Application from 'expo-application';

import { Platform } from 'react-native';

export const generateDeviceFingerprint = async (): Promise<string> => {
  try {
    const deviceId = `${Platform.OS}-${Platform.Version}`;
    const appId = `${Application.applicationId}-${Application.nativeBuildVersion}`;
    const installTime = await Application.getInstallationTimeAsync();

    return `${deviceId}-${appId}-${installTime}`;
  } catch (err) {
    console.error('Error getting device fingerprint', err);
    return `mobile-${Date.now()}`;
  }
};
