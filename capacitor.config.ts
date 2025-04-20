
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lovable.soaringflaps',
  appName: 'soaring-android-flaps',
  webDir: 'dist',
  server: {
    url: 'https://874122ba-ff99-45ad-ac11-47d9f826dc5d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
    }
  }
};

export default config;
