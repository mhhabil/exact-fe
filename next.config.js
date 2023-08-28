/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
`

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  // },
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: false,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      '192.168.2.250',
      '192.168.3.250',
      '192.168.4.250',
      '192.168.5.250',
      '192.168.6.250',
      '192.168.7.250',
      '192.168.8.250',
      '192.168.9.250',
      '192.168.10.250',
      '192.168.11.250',
      '192.168.12.250',
      '192.168.13.250',
      '192.168.14.250',
      '192.168.15.250',
      '192.168.16.250',
      '192.168.17.250',
      '192.168.18.250',
      '192.168.19.250',
      '192.168.20.250',
      '192.168.21.250',
      '192.168.22.250',
      '192.168.23.250',
      '192.168.24.250',
      '192.168.25.250',
      '192.168.26.250',
      '192.168.27.250',
      '192.168.28.250',
      '192.168.29.250',
      '192.168.30.250',
      '192.168.100.250',
      'storage.smec-group.com',
      'emr-images.test',
      'dev-files-emr.gic-indonesia.com',
      'files-emr.gic-indonesia.com',
      '',
    ],
  },
  publicRuntimeConfig: {
    env: {
      appName: process.env.NEXT_PUBLIC_APP_NAME,
      loginUrl: '/auth/login',
      secretKey: process.env.NEXT_PUBLIC_SECRET_KEY,
      apiUrl: process.env.NEXT_PUBLIC_API_URL,
      simrsUrl: process.env.NEXT_PUBLIC_SIMRS_API_HOST,
      bpjsUrl: process.env.NEXT_PUBLIC_BPJS_API_URL,
      antreanUrl: process.env.NEXT_PUBLIC_ANTREAN_URL,
      companyCode: process.env.NEXT_PUBLIC_COMPANY_CODE,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL,
      lumenUrl: process.env.NEXT_PUBLIC_LUMEN_URL,
      pdfUrl: process.env.NEXT_PUBLIC_PDF_URL,
      imageUrl: process.env.NEXT_PUBLIC_IMAGE_URL,
      pacsUrl: process.env.NEXT_PUBLIC_PACS_URL,
      apiv2Url: process.env.NEXT_PUBLIC_API_V2_URL,
      socketServiceName: process.env.NEXT_PUBLIC_SOCKET_SERVICE_NAME,
      socketServiceSecret: process.env.NEXT_PUBLIC_SOCKET_SERVICE_SECRET,
    },
  },
}
