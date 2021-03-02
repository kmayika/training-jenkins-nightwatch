/* eslint-disable no-unused-expressions */
/* eslint-disable no-var */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable max-len */
let currentUrl = '';
const wishlist = {
  /**
   * This method validates that the wishlist's "My List" page is rendered
   */
  validateWishlistListPage() {
    return this
      .waitForElementVisible('@myListPageTitle')
      .assert.containsText('@myListPageTitle', 'My Lists')
      .waitForElementVisible('@myAccountMenu')
      .assert.containsText('@myAccountMenu', 'My Account')
      .waitForElementVisible('@defaultList')
      .assert.containsText('@defaultListNameTxt', 'DEFAULT')
      .waitForElementVisible('@myListCardSection')
      .assert.visible('@myListCardSection', 'User is in the wishlist page');
  },
  /**
   * This method clicks on the default list on the "My Lists" page
   */
  clickDefaultList() {
    return this
      .waitForElementVisible('@defaultList')
      .assert.visible('@defaultList')
      .click('@defaultList');
  },
  /**
   * This method validates that the product card(s) in wishlist are rendered
   */
  validateProductCard() {
    return this
    //   .waitForElementVisible('@wishlistTitle')
    //   .assert.containsText('@wishlistTitle', 'Wish List')
      .waitForElementVisible('@wishlistSection')
      .assert.visible('@wishlistSection', 'Product card in wishlist is displayed')
      .waitForElementVisible('@productImageInDetailCard')
      .assert.visible('@productImageInDetailCard', 'Product image is displayed')
      // .waitForElementVisible('@ratingStars')
      // .assert.visible('@ratingStars', 'Ratings in product displayed')
      .waitForElementVisible('@productSellingPrice')
      .assert.visible('@productSellingPrice', 'Selling price displayed');
  },
  /**
   * This method clicks on the product in the wishlist details page
   */
  clickItemOnProductCard() {
    this
      .api.execute(() => {
        try {
          // eslint-disable-next-line no-undef
          document.evaluate('(//a[contains(@class, "product-anchor")])[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        } catch (error) {
          console.log(error);
        }
      });
    return this;
  },
  /**
   * This method validates that the Item List Price is greater than zero
   */
  validateItemListPrice() {
    this
      .waitForElementVisible('@productSellingPrice')
      .assert.visible('@productSellingPrice')
      .getText('@productSellingPrice', (price) => {
        this.api
          .assert.ok(price.value.replace('R ', '') > 0, `Price is valid - ${price.value}`);
      });
    return this;
  },
  /**
   * This method clicks on the "Create List" button
   */
  clickCreateList() {
    return this
      .waitForElementVisible('@createListBtn')
      .assert.visible('@createListBtn')
      .click('@createListBtn');
  },
  /**
   * This method validates that the "Create List" modal is rendered
   */
  validateCreateListModal() {
    return this
      .waitForElementVisible('@createListModal')
      .assert.visible('@createListModal', 'Create List Modal Displayed')
      .waitForElementVisible('@createListTitle')
      .assert.containsText('@createListTitle', 'Create List');
  },
  /**
   * This method enters the List name
   * @param {string} listName The wishlist List name
   */
  enterListName(listName) {
    return this
      .waitForElementVisible('@listNameTxtBoxInModal')
      .assert.visible('@listNameTxtBoxInModal')
      .clearValue('@listNameTxtBoxInModal')
      .setValue('@listNameTxtBoxInModal', listName + this.api.Keys.TAB);
  },
  /**
   * This method clicks on the "Save" button in the "Create List" modal
   */
  clickSaveList() {
    return this
      .waitForElementVisible('@saveListModalBtn')
      .assert.visible('@saveListModalBtn')
      .click('@saveListModalBtn');
  },
  /**
   * This method clicks on the "Close" button in the "Create List" modal
   */
  clickCloseModal() {
    return this
      .waitForElementVisible('@closeModalBtn')
      .assert.visible('@closeModalBtn')
      .click('@closeModalBtn');
  },
  /**
   * This method validates that the List has been created successfully.
   * @param listName The new list name
   */
  validateListSuccessfullCreatedList(listName) {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'List created')
      .waitForElementVisible('@newCreatedList')
      .assert.containsText('@newCreatedList', listName);
  },
  /**
   * This method clicks on the delete icon in the List Details Page
   */
  clickDeleteIcon() {
    return this
      .waitForElementVisible('@deleteIcon')
      .assert.visible('@deleteIcon')
      .click('@deleteIcon');
  },
  /**
   * This method validates that the item has been removed from the list
   */
  validateItemSuccessfullyRemovedFromList() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Item removed');
  },
  /**
   * This method clicks on the List that the user created
   */
  clickUserCreatedList() {
    return this
      .waitForElementVisible('@lastWishlistList')
      .click('@lastWishlistList');
  },
  /**
   * This method clicks on the delete list button icon in the top navbar
   */
  clickDeleteButton() {
    return this
      .waitForElementVisible('@deleteListButton')
      .assert.visible('@deleteListButton')
      .click('@deleteListButton');
  },
  /**
   * This method clicks on the rename list button
   */
  clickRenameList() {
    return this
      .waitForElementVisible('@renameListButton')
      .assert.visible('@renameListButton')
      .click('@renameListButton');
  },
  /**
   * This method validates that the "Rename List" modal is rendered
   */
  validateRenameListModal() {
    return this
      .waitForElementVisible('@renameListModal')
      .assert.visible('@renameListModal')
      .waitForElementVisible('@renameListModalTitle')
      .assert.containsText('@renameListModalTitle', 'Rename List');
  },
  /**
   * This method enters the new list name
   * @param {string} listName Then new List name
   */
  enterNewListName(listName) {
    return this
      .waitForElementVisible('@renameListNameTxtBox')
      .clearValue('@renameListNameTxtBox')
      .setValue('@renameListNameTxtBox', listName + this.api.Keys.TAB);
  },
  /**
   * This method validates that the list has been renamed successfully
   */
  validateListSuccessfullyRenamed() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'List renamed');
  },
  /**
   * This method validates that the "Maximum 50 characters" error is displayed
   */
  validateMaximumCharactersError() {
    return this
      .waitForElementVisible('@modalErrorMessage')
      .assert.containsText('@modalErrorMessage', 'Maximum 50 characters');
  },
  /**
   * This method validates that the "<List name> already exists" error message is rendered
   */
  validateListNameAlreadyExists() {
    return this
      .waitForElementVisible('@errorBanner')
      .assert.containsText('@errorBanner', 'already exists');
  },
  /**
   * This method validates that the "This list is empty!" module is rendered
   */
  validateEmptyList() {
    return this
      .waitForElementVisible('@emptyListModule')
      .assert.visible('@emptyListModule', 'Empty List module displayed')
      .waitForElementVisible('@thisListIsEmptyTitle')
      .assert.containsText('@thisListIsEmptyTitle', 'This list is empty!');
  },
  /**
   * This method validates that the empty list icon is rendered
   */
  validateEmptyListIcon() {
    this
      .waitForElementVisible('@emptyListIcon')
      .assert.visible('@emptyListIcon', 'Empty Icon List displayed')
      .api.refresh(true);
    return this;
  },
  /**
   * This method clicks on the "Continue Shopping" button
   */
  clickContinueShopping() {
    return this
      .waitForElementVisible('@continueShoppingBtn')
      .assert.visible('@continueShoppingBtn')
      .click('@continueShoppingBtn');
  },
  /**
   * This method validates that the "Trending Now" widget is rendered or not
   */
  validateTrendingNowWidget() {
    this.api
      .elements('@trendingNowWidget', (res) => {
        if (res.status > -1) {
          this
            .waitForElementVisible('@trendingNowWidget')
            .assert.visible('@trendingNowWidget', '[STEP] -  Trending Now Widget displayed')
            .waitForElementVisible('@trendingNowWidgetTitle')
            .assert.containsText('@trendingNowWidgetTitle', 'Trending Now');
        } else {
          console.log('Trending Now widget not displayed');
        }
      });
    return this;
  },
  /**
   * This method validates that the "Recommended For You" widget is displayed.
   */
  validateCustomersAlsoBoughtWidget() {
    this.api
      .elements('@customersAlsoBoughtWidget', (res) => {
        if (res.status > -1) {
          this
            .waitForElementVisible('@customersAlsoBoughtWidget')
            .assert.visible('@customersAlsoBoughtWidget', '[STEP] -  Customers Also Bought Widget should be displayed')
            .waitForElementVisible('@customersAlsoBoughtWidgetTitle')
            .assert.containsText('@customersAlsoBoughtWidgetTitle', 'Customers Also Bought');
        } else {
          console.log('Customers Also Bought widget not displayed');
        }
      });
    return this;
  },
  /**
   * This method validates that the Breadcrumbs in the order detail page are rendered
   * in this format: “My Account / My Lists / <List name>”
   */
  validateBreadcrumbs() {
    return this
      .waitForElementVisible('@myAccountBreadcrumbLinkTxt')
      .assert.containsText('@myAccountBreadcrumbLinkTxt', 'My Account')
      .waitForElementVisible('@myListsBreadcrumbLinkTxt')
      .assert.containsText('@myListsBreadcrumbLinkTxt', 'My Lists')
      .waitForElementVisible('@wishListBreadcrumTxt')
      .getText('@wishlistTitle', (text) => {
        this
          .assert.containsText('@wishListBreadcrumTxt', text.value);
      });
  },
  /**
   * This method validates that the Breadcrumbs in the order detail page are rendered
   * in this format: “My Account / My List”
   */
  validateMyListsLandingPageBreadcrumbs() {
    return this
      .waitForElementVisible('@myAccountBreadcrumbLinkTxt')
      .assert.containsText('@myAccountBreadcrumbLinkTxt', 'My Account')
      .waitForElementVisible('@myListsBreadcrumbLinkTxt')
      .assert.containsText('@myListsBreadcrumbLinkTxt', 'My Lists');
  },
  /**
   * This method clicks on the "Share" button
   */
  clickShare() {
    return this
      .waitForElementVisible('@shareBtn')
      .assert.visible('@shareBtn')
      .click('@shareBtn');
  },
  /**
   * This method validates that the "Share This Product" modal is rendered
   */
  validateShareThisProductModal() {
    return this
      .waitForElementVisible('@shareThisProductModal')
      .assert.visible('@shareThisProductModal', 'Share This Product modal is displayed')
      .waitForElementVisible('@shareThisProductModalTitle')
      .assert.containsText('@shareThisProductModalTitle', 'Share This List');
  },
  /**
   * This method clicks on the facebook share icon in the "Share This Product" modal
   */
  clickShare_facebook() {
    return this
      .waitForElementVisible('@facebookShareLinkIcon')
      .assert.visible('@facebookShareLinkIcon')
      .click('@facebookShareLinkIcon');
  },
  /**
   * This method clicks on the twitter share icon in the "Share This Product" modal
   */
  clickShare_twitter() {
    return this
      .waitForElementVisible('@twitterShareLinkIcon')
      .assert.visible('@twitterShareLinkIcon')
      .click('@twitterShareLinkIcon');
  },
  /**
   * This method clicks on the email share icon in the "Share This Product" modal
   */
  clickShare_email() {
    return this
      .waitForElementVisible('@emailShareLinkIcon')
      .assert.visible('@emailShareLinkIcon')
      .click('@emailShareLinkIcon');
  },
  /**
   * This method clicks on the "X" icon in the "Share This Product" modal
   */
  clickCloseShareThisProductModal() {
    return this
      .waitForElementVisible('@shareThisProductModalCloseBtn')
      .assert.visible('@shareThisProductModalCloseBtn')
      .click('@shareThisProductModalCloseBtn');
  },
  /**
   * This method validates that the "Delete List" modal is rendered
   */
  validateDeleteListModal() {
    return this
      .waitForElementVisible('@deleteListModal')
      .assert.visible('@deleteListModal', 'Delete List modal is displayed')
      .waitForElementVisible('@deleteListModalTitle')
      .assert.containsText('@deleteListModalTitle', 'Delete List');
  },
  /**
   * This method clicks on the "Delete" button in the "Delete List" modal
   */
  clickDeleteList() {
    return this
      .waitForElementVisible('@deleteListModalBtn')
      .assert.visible('@deleteListModalBtn')
      .click('@deleteListModalBtn');
  },
  /**
   * This method clicks on the "Cancel" button in the "Delete List" modal
   */
  clickCancel() {
    return this
      .waitForElementVisible('@deleteListModalBtn')
      .assert.visible('@deleteListModalBtn')
      .click('@deleteListModalBtn');
  },
  /**
   * This method validates that the list has been deleted
   */
  validateListSuccessfullyDeleted() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'deleted');
  },
  /**
   * This method validates that the "List Unavailable...This list may have been deleted"
   * error message is rendered
   */
  validateListUnavailableError() {
    return this
      .waitForElementVisible('@listUnavailableError')
      .assert.containsText('@listUnavailableError', 'List Unavailable');
  },
  /**
   * This method validates that red the error banner is displayed
   */
  validateErrorMessageDisplayed() {
    return this
      .waitForElementVisible('@errorBanner')
      .assert.containsText('@errorBanner', 'error', 'Error Banner is Displayed');
  },
  /**
   * This methods reloads the previous URL
   */
  reloadPreviousUrl() {
    this
      .api.url((res) => {
        currentUrl = res.value;
        this
          .api.url(currentUrl);
      });
    return this;
  },
  /**
   * This method navigates to previous browser page
   */
  navigatePreviousBrowserPage() {
    this
      .api.back();
    return this;
  },
  /**
   * This method navigates to next browser page
   */
  navigateNextBrowserPage() {
    this
      .api.forward();
    return this;
  },
  /**
   * This method validates that the "Please enter a list name" error is displayed in the "Create List" modal.
   */
  validateEnterListNameError() {
    return this
      .waitForElementVisible('@modalErrorMessage')
      .assert.containsText('@modalErrorMessage', 'Please enter a list name');
  },
  /**
   * This method validates that the Ad is displayed.
   */
  validateAdIsDisplayed() {
    return this
      .waitForElementVisible('@ad', 120000, () => {}, '[STEP] -  Onsite Ad should be displayed')
      .assert.visible('@ad');
  },
  /**
   * This method clicks the "Next" button
   */
  clickNext() {
    return this
      .waitForElementVisible('@nextBtn')
      .assert.visible('@nextBtn')
      .click('@nextBtn');
  },
  /**
   * This method clicks the "Previous" button
   */
  clickPrevious() {
    this
      .api.execute('scrollTo(0,3000)', () => {
        this
          .waitForElementVisible('@previousBtn')
          .assert.visible('@previousBtn')
          .click('@previousBtn');
      });
    return this;
  },
  /**
   * This method validates that the "Limit reached..." error is displayed.
   */
  validateCreateListLimitReachedError() {
    return this
      .waitForElementVisible('@errorBanner')
      .assert.containsText('@errorBanner', 'Limit reached');
  },
  /**
   * This method validates that the list details page is rendered.
   */
  validateListDetailsPage() {
    return this
      .assert.urlContains('/detail', 'User is on List Details Page');
  },
  /**
   * This method clicks on the brand link in the item in List detail page
   */
  clickBrandLink() {
    return this
      .waitForElementVisible('@brandLink')
      .click('@brandLink');
  },
  /**
   * This method clicks on the "In Stock" text
   */
  clickInStock() {
    return this
      .waitForElementVisible('@inStockText', 10000, () => {}, '[STEP] -  "In stock" status should be displayed')
      .click('@inStockText');
  },
  /**
   * This method validates that the "CPT & JHB: This item can be shipped from.." pop up is displayed on hover
   */
  validateInStockHoverPopUp() {
    this
      .waitForElementVisible('@inStockTextHoverPopUp')
      .assert.containsText('@inStockTextHoverPopUp', 'This item can be shipped from')
      .moveToElement('body', 0, 0, () => {
        this
          .api.mouseButtonClick(0);
      });
    return this;
  },
  /**
   * This method removes all the items in the wishlist
   */
  removeItemsFromList() {
    this
      .api.elements('@removeBtn', (res) => {
        if (res.value.length > 0) {
          console.log('Items In List: ', res.value.length);
          for (let i = 0; i < res.value.length; i++) {
            this
              .waitForElementVisible('@removeBtn')
              .click('@removeBtn');
          }
        } else {
          console.log('Wishlist is Empty');
        }
        return this;
      });
  },
  /**
   * This method clicks on the "Add to Cart" button in the List Details page
   */
  clickAddToCart() {
    return this
      .waitForElementVisible('@addToCartBtn')
      .click('@addToCartBtn');
  },
  /**
   * This method clicks on the "Move" dropdown list
   */
  clickMove() {
    return this
      .waitForElementVisible('@moveBtn')
      .click('@moveBtn');
  },
  /**
   * This method selects the list to move the item to
   */
  selectList() {
    return this
      .waitForElementVisible('@firstListInDropdown')
      .click('@firstListInDropdown');
  },
  /**
   * This method validates that the item has been moved from current list to selected list
   */
  validateItemMovedFromList() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Item moved to');
  },
  /**
   * This method clicks on the "+ Create List" link in the "Move" dropdown
   */
  clickCreateListInDropdown() {
    return this
      .waitForElementVisible('@creatListInDropdown')
      .click('@creatListInDropdown');
  },
  /**
   * This method validates that "Available Now" is shown as stock status on the item (e.g. ebook)
   */
  validateDigitalItemStockStatus() {
    return this
      .waitForElementVisible('@availableNowStockStatus')
      .assert.containsText('@availableNowStockStatus', 'Available Now');
  },
  /**
   * This method validates that an Item is present in wishlist
   */
  validateItemInWishlist() {
    return this
      .waitForElementVisible('@wishlistItem')
      .assert.visible('@wishlistItem', 'Item present in Wishlist');
  },
};


const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [wishlist],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    myListPageTitle: '[class^="groups-module"] h1',
    myListCardSection: '[class^="groups-module_wishlists"]',
    productListCard: '[class^="groups-item"]:first-child .list-card',
    defaultList: xSelector('//span[contains(text(),"default")]/parent::div/following-sibling::div'),
    defaultListNameTxt: '[class^="groups-item"]:first-child span',
    newCreatedList: '[class^="groups-item"]:nth-child(2) h3',
    wishlistTitle: '[class^="detail-module_wishlist-wrapper"] h1',
    wishlistSection: 'section[class*="account-module"]',
    productImageInDetailCard: xSelector('(//a[contains(@class, "product-anchor")])[1]'),
    ratingStars: '[class^="detail-item"]:first-child .rating',
    moveDropdownList: '[class^="detail-item"]:first-child [class^="dropdown-module"]',
    deleteBtn: '[class^="detail-item"]:first-child button.remove-item',
    productSellingPrice: '[class^="detail-item"]:first-child .currency',
    createListBtn: xSelector('(//a[contains(text(),"Create List")])[1]'),
    createListModal: '[class^="modal-body"]',
    createListTitle: '[class^="modal-body"] h3',
    listNameTxtBoxInModal: '[class^="modal-body"] [id*="Name_name"]',
    closeModalBtn: '[class^="modal-body"] button:first-child',
    saveListModalBtn: xSelector('(//button[contains(text(),"Save")])[1]'),
    successBanner: '[class^="cell auto toast-content-module_message"]',
    lastWishlistList: xSelector('(//div[contains(@class,"groups-item-container")])[2]'),
    deleteListButton: xSelector('//button[contains(text(),"Delete")]'),
    renameListButton: xSelector('//a[contains(text(),"Rename")]'),
    renameListModal: '[class^="modal-body"]',
    renameListModalTitle: '[class^="modal-body"] h3',
    renameListNameTxtBox: '[class^="modal-body"] [id*="Name_name"]',
    shareBtn: xSelector('//span[contains(text(),"Share")]//parent::button'),
    emptyListModule: '[class*="empty-list-message-module_panel"]',
    thisListIsEmptyTitle: '[class*="empty-list-message-module_panel"] h3',
    continueShoppingBtn: '[class*="empty-list-message-module_panel"] a',
    emptyListIcon: '[class*="empty-list-message-module_panel"] img',
    trendingNowWidget: xSelector('//div[@class="swiper-wrapper"]'),
    trendingNowWidgetTitle: '[class^="recommendation-swiper"] h2:first-child',
    myAccountBreadcrumbLinkTxt: '[class^="bread-crumbs-module"]:first-child  a',
    myListsBreadcrumbLinkTxt: '[class^="bread-crumbs-module"]:nth-child(2)  a',
    wishListBreadcrumTxt: '[class^="bread-crumbs-module"]:last-child  a',
    shareThisProductModal: '[class^="modal-body"]',
    shareThisProductModalTitle: '[class^="modal-body"] h3',
    shareThisProductModalCloseBtn: '[class^="modal-module_close"]',
    modalErrorMessage: '[class^="modal-body"] [class="error"]',
    errorBanner: '[class*="Toastify__toast-container"]',
    deleteListModal: '[class^="modal-body"]',
    deleteListModalTitle: '[class^="modal-body"] h3',
    cancelModalBtn: '[class^="modal-body"] button:first-child',
    deleteListModalBtn: '[class^="modal-body"] button:last-child',
    listUnavailableError: '[class^="app-notification"] h3',
    myAccountMenu: '[class*="account-module"] .profile-navigation-header h1',
    customersAlsoBoughtWidget: xSelector('//div[@class="swiper-wrapper"]'),
    customersAlsoBoughtWidgetTitle: '[class^="recommendation-swiper"] h2:first-child',
    ad: '[class*="wishlists-onsite-ad"]',
    nextBtn: '[class^="pagination-wrapper"] div:last-child button',
    previousBtn: '[class^="pagination-wrapper"] div:first-child button',
    facebookShareLinkIcon: 'button i.facebook',
    twitterShareLinkIcon: 'a i.twitter',
    emailShareLinkIcon: 'a i.email',
    defaultWishListTitle: xSelector('//h1[contains(text(),"Wish List")]'),
    brandLink: xSelector('(//a[contains(@href,"/all?filter=Brand")])[1]'),
    inStockText: xSelector('(//span[contains(text(),"In Stock")])[1]'),
    inStockTextHoverPopUp: xSelector('//div[contains(@class,"tooltip")][contains(.,"CPT") or contains(., "JHB")]'),
    removeBtn: xSelector('//button[contains(@class,"clear")]'),
    addToCartBtn: xSelector('(//button[contains(@class,"add-to-cart-button")])[1]'),
    moveBtn: xSelector('(//div[contains(text(),"Move")])[1]'),
    firstListInDropdown: xSelector('(//a[contains(@class,"list-nav-item")])[1]'),
    creatListInDropdown: xSelector('(//a[contains(text(),"Create List")])[1]'),
    deleteIcon: xSelector('(//button[contains(@class,"remove-item")])[1]'),
    availableNowStockStatus: xSelector('(//span[contains(text(),"Available Now")])[1]'),
    wishlistItem: xSelector('(//div[contains(@class,"detail-item")])[1]'),
  },
};
