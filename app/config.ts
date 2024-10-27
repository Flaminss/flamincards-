const config = {
    appName: 'RML Studio',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    },
    database: {
        url: process.env.DATABASE_URL || 'mongodb://localhost:27017/rml-studio'
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
        tokenExpiry: '1h'
    },
    logging: {
        level: process.env.LOG_LEVEL || 'info'
    },
    virtualTopUp: {
        providerApiUrl: process.env.PROVIDER_API_URL || 'https://api.virtualtopup.com',
        apiKey: process.env.PROVIDER_API_KEY || 'your-api-key',
        defaultCurrency: 'USD',
        supportedCurrencies: ['USD', 'EUR', 'GBP'],
        transactionFee: 0.05 // 5% fee
    },
    giftCardTrading: {
        marketplaceApiUrl: process.env.MARKETPLACE_API_URL || 'https://api.giftcardmarketplace.com',
        apiKey: process.env.MARKETPLACE_API_KEY || 'your-marketplace-api-key',
        supportedGiftCards: ['Amazon', 'iTunes', 'Google Play'],
        tradingFee: 0.10 // 10% fee
    },
    email: {
        addresses: {
            org: {},
            management: {},
        }
    }
};

export default config;
