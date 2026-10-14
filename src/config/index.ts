import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    expires_in: process.env.EXPIRES_IN,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
    reset_pass_secret: process.env.RESET_PASS_TOKEN,
    reset_pass_token_expires_in: process.env.RESET_PASS_TOKEN_EXPIRES_IN,
  },
  reset_pass_link: process.env.RESET_PASS_LINK,
  emailSender: {
    email: process.env.EMAIL,
    app_pass: process.env.APP_PASS, // here I get *APP_PASS* from .env,
    // when you visit .env file you can see a *APP_PASS* value. That value is come from google account.
    // to get it, go to your google account profile > Security then search *App password*. then google
    // ask you to login and after that you should create an app and after enter you get the *app password *
    // which is saved as *APP_PASS*
  },
  ssl: {
    storeId: process.env.STORE_ID, // from email
    storePass: process.env.STORE_PASS, // from email
    successUrl: process.env.SUCCESS_URL,
    cancelUrl: process.env.CANCEL_URL,
    failUrl: process.env.FAIL_URL,
    sslPaymentApi: process.env.SSL_PAYMENT_API, // from email
    sslValidationApi: process.env.SSL_VALIDATIOIN_API, // from email
  },
};
