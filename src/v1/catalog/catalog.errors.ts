import { RestErrorProvider } from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';

export const ErrCustomerNotRegistered = RestErrorProvider.create({
  httpCode: 401,
  title: 'User Authorization Failed',
  message: 'Customer is not registered',
  code: 'UNAUTHORIZED',
});

export const ErrInvalidOTP = RestErrorProvider.create({
  httpCode: 401,
  title: 'User Authorization Failed',
  message: 'Kindly try again',
  code: 'UNAUTHORIZED',
});

export const ErrInvalidToken = RestErrorProvider.create({
  httpCode: 401,
  title: 'User Authorization Failed',
  message: 'Kindly try again',
  code: 'UNAUTHORIZED',
});
