
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.874122baff9945adac1147d9f826dc5d',
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
