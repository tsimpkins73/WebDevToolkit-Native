module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://web-dev-toolkit-api.herokuapp.com/api',
    TOKEN_KEY: 'WebDevToolkit-auth-token',
  }