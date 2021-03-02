/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable max-len */
const wishlist = {
  /**
   * This method validates that the wishlist's "My List" page is rendered
   */
  validateWishlistListPage() {
    return this
      .waitForElementVisible('@wishlistPageTable')
      .assert.visible('@wishlistPageTable', 'User in Wishlist Page');
  },
  /**
   * This method enters the List name
   * @param {string} listName The wishlist List name
   */
  enterListName(listName) {
    return this
      .waitForElementVisible('@enterWishListNameInputBox')
      .assert.visible('@enterWishListNameInputBox')
      .clearValue('@enterWishListNameInputBox')
      .setValue('@enterWishListNameInputBox', listName);
  },
  /**
   * This method clicks on the "Select All" check box
   */
  clickSelectAll() {
    return this
      .waitForElementVisible('@selectAllCheckBox')
      .assert.visible('@selectAllCheckBox')
      .click('@selectAllCheckBox');
  },
  /**
   * This method clicks on the "Add to Cart" button
   */
  clickAddToCart() {
    return this
      .waitForElementVisible('@addToCartBtn')
      .assert.visible('@addToCartBtn')
      .click('@addToCartBtn');
  },
  /**
   * This method validates that the items are moved to cart
   */
  validateItemsMovedToCart() {
    return this
      .waitForElementVisible('@successPhpBanner')
      .assert.containsText('@successPhpBanner', 'moved to your cart');
  },
  /**
   * This method clicks on the "Create Wish List" link
   */
  clickCreateWishList() {
    return this
      .waitForElementVisible('@createWishListLink')
      .assert.visible('@createWishListLink')
      .click('@createWishListLink');
  },
  /**
   * This method clicks on the "Create Wish List" button
   */
  clickCreateNewWishList() {
    return this
      .waitForElementVisible('@createNewWishListBtn')
      .assert.visible('@createNewWishListBtn')
      .click('@createNewWishListBtn');
  },
  /**
   * This method validates that the List has been created successfully.
   */
  validateSuccessfullyCreatedList() {
    return this
      .waitForElementVisible('@successPhpBanner')
      .assert.containsText('@successPhpBanner', 'Wish List created');
  },
  /**
   * This method selects the list to move the items to
   * @param {string} listName The list name to move the items to
   */
  selectMoveToList(listName) {
    return this
      .waitForElementVisible('@moveToOptions')
      .assert.visible('@moveToOptions')
      .setValue('@moveToOptions', listName);
  },
  /**
   * This method clicks on the Move button
   */
  clickMove() {
    return this
      .waitForElementVisible('@moveBtn')
      .assert.visible('@moveBtn')
      .click('@moveBtn');
  },
  /**
   * This method validates that the item(s) have been moved to another list
   */
  validateItemMovedToWishlist() {
    return this
      .waitForElementVisible('@successPhpBanner')
      .assert.containsText('@successPhpBanner', 'moved to wish list');
  },
  /**
   * This method clicks on the "Remove Items" button
   */
  clickRemoveItems() {
    return this
      .waitForElementVisible('@removeItemsBtn')
      .assert.visible('@removeItemsBtn')
      .click('@removeItemsBtn');
  },
  /**
   * This method validates that the item(s) have been removed on the list
   */
  validateItemRemoved() {
    return this
      .waitForElementVisible('@successPhpBanner')
      .assert.containsText('@successPhpBanner', ' removed from wish list');
  },
  /**
   * This method clicks on the custom list link
   */
  clickCustomList() {
    return this
      .waitForElementVisible('@customListLink')
      .click('@customListLink');
  },
  /**
   * This method clicks on the "Delete this wish list" button
   */
  clickDeleteThisWishlist() {
    return this
      .waitForElementVisible('@deleteThisWishlistBtn')
      .assert.visible('@deleteThisWishlistBtn')
      .click('@deleteThisWishlistBtn');
  },
  /**
   * This method validates that the custom list has been deleted
   */
  validateCustomListDeleted() {
    return this
      .waitForElementVisible('@notification')
      .assert.containsText('@notification', 'Wish list successfully deleted.', 'Custom list deleted');
  },
};

module.exports = {
  commands: [wishlist],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    wishlistPageTable: 'table#wishlist',
    selectAllCheckBox: 'table#wishlist .select-all',
    addToCartBtn: '[class^="bottom"] input[name="moveCart"]',
    successPhpBanner: '#message-bar',
    createWishListLink: '.side-widget a[href$="/create"]',
    enterWishListNameInputBox: '#GroupName',
    createNewWishListBtn: '#GroupName ~ input',
    moveToOptions: '[class^="bottom"] #idWishGroupSelector',
    moveBtn: '[class^="bottom"] #moveWishGroupButton',
    removeItemsBtn: '[class^="bottom"] input[name="delete"]',
    customListLink: '.cat-nav-side li:last-child a',
    deleteThisWishlistBtn: '#deleteWishlist',
    notification: '.content p',
  },
};
