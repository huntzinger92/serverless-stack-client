const config = {
  STRIPE_KEY: "pk_test_51HwqIPDFQ0CwelcMIIhnLMlYgGyXd7WPHCu4rfig7ateuzBPMu9qGJw50GLCuGkE3RrrUFYmAjEdVQWh5rcZJzCy007CFKBaYd",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "app-notes-tutorial-notes-app",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://8etayjn3s0.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ltrH0asya",
    APP_CLIENT_ID: "69rmcm1qg2tl9mogrtmqq2ocs5",
    IDENTITY_POOL_ID: "us-east-2:59d94a96-d614-4a0b-9318-3eb489a9686f",
  },
};

export default config;
