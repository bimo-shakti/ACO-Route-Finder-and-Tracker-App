module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    extra: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  };
    
  };

