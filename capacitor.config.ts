import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'royalBankApp',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
  },
};

export default config;
