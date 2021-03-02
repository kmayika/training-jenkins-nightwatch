// /* eslint-disable max-len */
const path = require('path');
// /* eslint-disable import/no-dynamic-require */
// /* eslint-disable no-undef */
// /* eslint-disable max-len */
// const reportPortal = require('../../../utilities/reportPortalUtils');
// // eslint-disable-next-line import/no-dynamic-require
const { IN_STOCK_PRODUCTS } = require(`${path.resolve('constants')}`);

module.exports = {
  '@tags': ['pom', 'critical', 'desktop', '0002-sanitize'],
  before: (client) => {
    // if (!process.env.JOB_NAME.includes('Critical')) {
    //   process.env.RP_LAUNCH_ID = reportPortal.startReportPortalLaunch(true);
    //   process.env.RP_SUITE_ID = reportPortal.startTestSuite(process.env.RP_LAUNCH_ID, client.currentTest.module);
    // }
    // process.env.RP_TESTCASE_STATUS = 'PASSED';
    // console.log(client);
    client
      .maximizeWindow()
      .url(client.launch_url);
  },
  after: (client) => {
    const header = client.page.header();
    client
      .url(client.launch_url)
      .pause(2000);
    header
      .clickLogout();
    // if (!process.env.JOB_NAME.includes('Critical')) {
    //   reportPortal.finishTestSuite(process.env.RP_SUITE_ID);
    // }
  },
  // beforeEach: (client) => {
  //   if (!process.env.JOB_NAME.includes('Critical')) {
  //     process.env.RP_TESTCASE_STATUS = 'PASSED';
  //     process.env.RP_TESTCASE_ID = reportPortal.startTestStep(process.env.RP_LAUNCH_ID, process.env.RP_SUITE_ID, client.currentTest.name);
  //   }
  // },
  // afterEach: (client) => {
  //   if (!process.env.JOB_NAME.includes('Critical')) {
  //     reportPortal.finishTestCase(process.env.RP_TESTCASE_ID, client);
  //   }
  // },
  'I Nav To Takealot.com Home Page': (client) => {
    const home = client.page.homePage();

    home
      .validateHomePage()
      .pause(2000);
  },
  'I click login in header': (client) => {
    const header = client.page.header();

    header
      .clickLogin()
      .pause(200);
  },
  // 'I Close pop up': (client) => {
  //   const popUp = client.page.popUps();

  //   popUp
  //     .validateCovidPopUp()
  //     .clickCloseCovidPopUp();
  // },
  'I should be in login screen, I enter credentials and login': (client) => {
    const login = client.page.login();
    // client
    //   .signIn();
    login
      .validateLoginPage();
  },
  'I enter email address': (client) => {
    const login = client.page.login();

    login
      .enterEmail(client.globals.username);
  },
  'I enter password': (client) => {
    const login = client.page.login();

    login
      .enterPassword(client.globals.password);
  },
  'I click login button': (client) => {
    const login = client.page.login();

    login
      .clickLogin();
  },
  'I should be on the home screen': (client) => {
    const home = client.page.homePage();

    home
      .validateHomePage();
  },
  'I enter the search term in the header': (client) => {
    const header = client.page.header();

    const randomSelect = Math.floor((Math.random() * IN_STOCK_PRODUCTS.length));
    const selectedTerm = IN_STOCK_PRODUCTS[randomSelect];

    header
      .enterSearchTerm(selectedTerm);
  },
  'I should be in the product listing page': (client) => {
    const plp = client.page.productSearchListing();

    plp
      .validateProductSearchListingPage()
      .clickListIcon()
      .pause(2000);
  },
  'I click on a product in the product listing page': (client) => {
    const plp = client.page.productSearchListing();

    plp
      .clickValidProduct();
  },
  'I should be on the product display page': (client) => {
    const pdp = client.page.productDisplayPage();

    pdp
      .validatePdpPage();
  },
  // 'I validate that there are no items in my cart': (client) => {
  //   const header = client.page.header();

  //   header
  //     .validateNoItemOnCart();
  // },
  'I add the item to cart': (client) => {
    const pdp = client.page.productDisplayPage();

    pdp
      .clickAddToCart();
  },
  'I click on the go to cart button': (client) => {
    const pdp = client.page.productDisplayPage();

    pdp
      .pause(2000)
      .clickGoToCart();
  },
  'I should be on the Cart page': (client) => {
    const cart = client.page.cart();

    cart
      .validateCartPage();
  },
  'I click on the proceed to checkout button': (client) => {
    const cart = client.page.cart();

    cart
      .clickProceedToCheckout()
      .isLiquorItem();
  },
  'I should be on the delivery methods page': (client) => {
    const delivery = client.page.checkout_delivery();

    delivery
      .validateDeliveryMethodsPage();
  },
  'I click on the deliver my order option': (client) => {
    const delivery = client.page.checkout_delivery();

    delivery
      .clickDeliverMyOrder();
  },
  'I should be on the delivery addresses page': (client) => {
    const delivery = client.page.checkout_delivery();

    delivery
      .validateDeliveryAddressesPage();
  },
  'I click on the continue button in the delivery addresses page': (client) => {
    const delivery = client.page.checkout_delivery();

    delivery
      .clickContinue();
  },
  'I should be on the delivery options page': (client) => {
    const delivery = client.page.checkout_delivery();

    delivery
      .validateDeliveryOptionsPage();
  },
  'I click on the continue button in the delivery options page': (client) => {
    const delivery = client.page.checkout_delivery();

    delivery
      .clickContinue();
  },
  'I should see the beautiful gate pop up': (client) => {
    const popUp = client.page.popUps();

    popUp
      .validateBeautifulGatePopUp();
  },
  'I click donate on the beautiful gate pop up': (client) => {
    const popUp = client.page.popUps();

    popUp
      .clickDonate();
  },
  'I should be on the payment methods page': (client) => {
    const payment = client.page.checkout_payment();

    payment
      .validatePaymentPage()
      .pause(2000);
  },
  'I click on the pay with credit card option': (client) => {
    const payment = client.page.checkout_payment();

    payment
      .clickCreditAndDebitCard()
      .clickPayWithCreditCard()
      .pause(2000);
  },
  'I should see the credit card form': (client) => {
    const payment = client.page.checkout_payment();

    if (process.env.URL.toLowerCase().includes('takealot.com')) {
      payment
        .validateCreditCardForm()
        .pause(2000);
    } else {
      payment
        .validateMasterCreditCardForm()
        .pause(2000);
    }
    // eslint-disable-next-line eqeqeq
    if (process.env.GTM_CONTAINER == 'yes') {
      payment
        .clickChangePaymentMethod();
    } else {
      client
        .back();
    }
  },
  'I click on the Takealot logo in the header': (client) => {
    const header = client.page.header();
    const home = client.page.homePage();

    header
      .clickTakealotLogo();

    home
      .validateHomePage()
      .pause(2000);
  },
  'I click on Orders Link in the header': (client) => {
    const header = client.page.header();

    header
      .clickOrders();
  },
  'I should be on the Order Tracking page': (client) => {
    const orderTracking = client.page.order_tracking();

    orderTracking
      .validateOrderTrackingPage();
  },
  'I click on the first order item': (client) => {
    const orderTracking = client.page.order_tracking();

    orderTracking
      .clickFirstOrderEntryItem();
  },
  'I should see the Order details': (client) => {
    const orderTracking = client.page.order_tracking();

    orderTracking
      .validateOrderDetailsSection();
  },
  'I validate that the order was created and is awaiting payment': (client) => {
    const orderTracking = client.page.order_tracking();

    orderTracking
      .validateOrderAwaitingPayment();
  },
  'I click cancel button': (client) => {
    const orderTracking = client.page.order_tracking();

    orderTracking
      .pause(500)
      .clickCancel();
  },
  'The order should be cancelled successfully': (client) => {
    const toast = client.page.toastMessage();

    toast
      .validateToastMessage('Your order has been cancelled');
  },
};
