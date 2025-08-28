import { EndpointType } from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';

export const DomainAndSourceSystem = {
  source_system: 'authn-service',
  domain: 'authn',
};

export const DownstreamCallsConst = {
  genrateOtp: {
    path: '/otp-engine/v1/otp-services/generate',
    functionality: 'OTP Service | Generate OTP',
    downstream_system: EndpointType.OTP_ENGINE,
    ...DomainAndSourceSystem,
  },
  validateOtp: {
    path: '/otp-engine/v1/otp-services/authorize',
    functionality: 'OTP Service | Validate OTP',
    downstream_system: EndpointType.OTP_ENGINE,
    ...DomainAndSourceSystem,
  },
  verifyOtp: {
    path: '/magento/verify-otp',
    functionality: 'Magento | Generate token',
    ...DomainAndSourceSystem,
  },
  otpNotifications: {
    path: '/notification-engine/v1/trigger',
    functionality: 'Notification Engine | Trigger SMS',
    downstream_system: EndpointType.NOTIFICATION_ENGINE,
    ...DomainAndSourceSystem,
  },
  logout: {
    path: '/magento/logout',
    functionality: 'Magento | Logout',
    ...DomainAndSourceSystem,
  },
  registerUserInWallet: {
    downstream_system: EndpointType.WALLET_ENGINE,
    path: '/wallet/v1/register',
    functionality: 'Wallet | Register User In Wallet',
    ...DomainAndSourceSystem,
  },
  getOrCreateCustomer: {
    downstream_system: EndpointType.CORE_CUSTOMER,
    path: '/customers/v1/customers',
    functionality: 'Get | Create Customer In Core Customer',
    ...DomainAndSourceSystem,
  },
  fetchBanners: {
    path: '/otp-engine/v1/otp-services/generate',
    functionality: 'Fetch top banners',
    downstream_system: EndpointType.KPN,
    ...DomainAndSourceSystem,
  },
};
