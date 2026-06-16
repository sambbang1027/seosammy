const nextConfig = {
  devIndicators: false,
  turbopack: {
    rules: {
      '*.hdr': {
        loaders: ['file-loader'],
        as: '*.hdr',
      },
    },
  },
};

export default nextConfig;