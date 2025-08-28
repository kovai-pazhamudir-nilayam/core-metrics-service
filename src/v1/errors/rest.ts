import { RestErrorType } from '@kovai-pazhamudir-nilayam/kpn-services-shared-lib';

const commonOtpErrors: RestErrorType[] = [
  {
    title: 'Unable to Login',
    message:
      'We are facing issues in logging you in due to a bad request, kindly submit again or try after some time.',
    restStatusCode: 400,
    statusCode: 400,
  },
  {
    title: 'User Authorization Failed',
    message: 'Kindly Logout and try logging again.',
    restStatusCode: 401,
    statusCode: 401,
  },
  {
    title: 'User Authorization Server Error',
    message:
      'There is something wrong with the request, kindly submit again or try after some time.',
    restStatusCode: 500,
    statusCode: 500,
  },
];

const restErrors: Record<string, RestErrorType[]> = {
  '/api/v1/otp-generate': commonOtpErrors,
  '/api/v1/otp-validate': [
    ...commonOtpErrors,
    {
      title: 'Invalid OTP',
      message:
        'Kindly enter the correct OTP or click on retry to get a new one.',
      restStatusCode: 404,
      statusCode: 403,
    },
    {
      title: 'Invalid OTP',
      message:
        'Kindly enter the correct OTP or click on retry to get a new one.',
      restStatusCode: 403,
      statusCode: 403,
    },
  ],
};

export { restErrors };
