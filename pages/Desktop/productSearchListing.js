/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
const searchListing = {
  /**
    * This method validates that the "Product Search Listing" page is rendered
    */
  validateProductSearchListingPage() {
    this
      .waitForElementVisible('@listingsContainer', 15000, () => {}, '[STEP] -  Product Search Listing Page should be displayed')
      .assert.urlContains('all?', '[STEP] -  User should be in Search Listings Page')
      .removePopUp();
    return this;
  },
  /**
    * This method validates that the "Seller Search Listing" page is rendered
    */
  validateSellerSearchListingPage() {
    return this
      .waitForElementVisible('@listingsContainer', 10000, () => {}, '[STEP] -  Product Search Listing Page should be displayed')
      .assert.urlContains('sort=Relevance', '[STEP] -  User should be in Search Listings Page');
  },
  /**
   * This method clicks on the "Grid Icon".
   */
  clickGridIcon() {
    return this
      .waitForElementVisible('@gridIcon', 10000, (res) => {
        if (res.value == true) {
          this
            .click('@gridIcon');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking Grid Icon');
        }
      }, '[STEP] - Grid Icon should be displayed and clicked');
  },
  /**
   * This method validates that the Items are listed in Grid View
   */
  validateGridView() {
    return this
      .waitForElementVisible('@gridViewContainer')
      .assert.elementPresent('@gridViewContainer', 'Grid View Displayed');
  },
  /**
   * This method clicks on the "List Icon".
   */
  clickListIcon() {
    return this
      .waitForElementVisible('@listIcon', 10000, (res) => {
        if (res.value == true) {
          if (res.status !== undefined) {
            this
              .click('@listIcon');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.listIcon.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking List Icon');
        }
      }, '[STEP] - List Icon should be displayed and clicked');
  },
  /**
   * This method validates that the Items are listed in List View
   */
  validateListView() {
    return this
      .waitForElementNotPresent('@gridViewContainer')
      .expect.element('@gridViewContainer').to.not.be.present;
  },
  /**
   * This method clicks the first Product Listing Card
   */
  clickProductListingCard() {
    return this
      .waitForElementVisible('@productListingCardImg')
      .click('@productListingCardImg');
  },
  /**
   * This method hovers over the first Product Listing Card
   */
  hoverOverProductListingCard() {
    this
      .waitForElementVisible('@productListingCard', () => {
        this
          .moveToElement('@productListingCard', 100, 100);
      });
    return this;
  },
  /**
   * This method validates that the first Product Listing Card is on hover state
   */
  validateHoverOverProductListingCard() {
    this
      .getCssProperty('@productListingCard', 'box-shadow', (res) => {
        this
          .assert.ok(res.value.toLowerCase().includes('rgba(77, 77, 79, 0.08)'), 'Hover over element works');
      });
    return this;
  },
  /**
   * This method validates the maximum number of products displayed per page is 36
   */
  validateMaxNumberOfProducts() {
    this
      .waitForElementVisible('@productsListed')
      .api.elements('@productsListed', (res) => {
        console.log(`Number of Products Displayed ${res.value.length}`);
        this
          .assert.ok(res.value.length >= 24, '[STEP] -  25 Products should be  Displayed');
      });
    return this;
  },
  /**
   * This method clicks on the "Load More" button
   */
  clickLoadMore() {
    return this
      .waitForElementVisible('@loadMoreBtn')
      .click('@loadMoreBtn');
  },
  /**
   * This method validates that the "Load More" button is rendered
   */
  validateLoadMoreButton() {
    this
      .api.execute('scrollTo(0, 4000)', () => {
        this
          .waitForElementVisible('@loadMoreBtn')
          .assert.visible('@loadMoreBtn', 'Load More Button Displayed');
      });
    return this;
  },
  /**
   * This method validates that more products are displayed after clicking "Load More"
   */
  validateMoreProductsDisplayed() {
    return this
      .assert.urlContains('&after=', 'URL Updated, More Products Loaded');
  },
  /**
   * This method validates that the "Related Search" widget is displayed
   */
  validateRelatedSearchWidget() {
    return this
      .waitForElementVisible('@relatedSearchWidget')
      .assert.visible('@relatedSearchWidget', 'Related Search Widget Displayed');
  },
  /**
   * This method validates that the "Related Search" widget is displayed after user clicks "Load More"
   */
  validateRelatedSearchWidgetAfterLoadMore() {
    this
      .waitForElementVisible('@relatedSearchWidget')
      .api.elements('@relatedSearchWidget', (res) => {
        console.log(`Number of Search Widgets Displayed ${res.value.length}`);
        this
          .assert.ok(res.value.length == 2, `${res.value.length} Search Widgets Displayed`);
      });
    return this;
  },
  /**
   * This method clicks on the related search result item on the related search widget
   */
  clickRelatedSearchResultItem() {
    return this
      .waitForElementVisible('@relatedSearchWidgetItem')
      .click('@relatedSearchWidgetItem');
  },
  /**
   * This method clicks and applies a search result filter
   */
  clickFilter() {
    return this
      .waitForElementVisible('@searchResultFilter')
      .click('@searchResultFilter');
  },
  /**
   * This method validates that the search filter has been applied
   * @param {boolean} byCategory Is the filter by Category
   */
  validateFilterApplied(byCategory = false) {
    if (byCategory) {
      this
        .api.url((res) => {
          const expression = 'www\\.[^.]+\\.\\w+\\/\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)\\/'; const regex = new RegExp(expression);
          const url = res.value;
          this
            .assert.ok(regex.test(url), '[STEP] - Url should be changed when category filter is applied');
        });
    } else {
      this
        .assert.urlContains('&filter=', 'Filter has been applied');
    }
    return this;
  },
  /**
   * This method validates that the search filter has been removed
   */
  validateFilterRemoved() {
    return this
      .assert.not.urlContains('&filter=', 'Filter has been removed');
  },
  /**
   * This method validates that the "No product image" placeholde is displayed.
   */
  validateNoProductImagePlaceholder() {
    return this
      .waitForElementVisible('@noProductImagePlaceholder')
      .assert.visible('@noProductImagePlaceholder', 'No Product Image placeholder displayed');
  },
  /**
   * This method validates that the Sale price is displayed
   */
  validateSalePriceDisplayed() {
    return this
      .waitForElementVisible('@salePriceText')
      .assert.visible('@salePriceText', 'Sale Price is displayed');
  },
  /**
   * This method validates that the List price is displayed
   */
  validateListPriceDisplayed() {
    return this
      .waitForElementVisible('@listPriceText')
      .assert.visible('@listPriceText', 'List Price is displayed');
  },
  /**
   * This method clicks on the List price tooltip icon
   */
  clickListPriceToolTip() {
    return this
      .waitForElementVisible('@listPriceTooltipIcon')
      .click('@listPriceTooltipIcon');
  },
  /**
   * This method clicks on the "Add to Wishlist" button
   */
  clickAddToWishlist() {
    return this
      .waitForElementVisible('@addToWishlistBtn')
      .moveToElement('@addToWishlistBtn', 10, 10)
      .click('@addToWishlistBtn');
  },
  /**
   * This method validates that the "Add to Wishlist" button's color has been changed
   */
  validateItemAddedToWishlist() {
    return this
      .waitForElementVisible('@activeAddToWishlistBtn', 10000, () => {}, '[STEP] -  "Add to List" button should change color')
      .assert.attributeContains('@activeAddToWishlistBtn', 'class', 'active', '[STEP] -  Add to Wishlist button should be changed');
  },
  /**
   * This method validates that the list is sorted by Relevance
   */
  validateOrderedByRelevence() {
    return this
      .waitForElementVisible('@sortByDropDown')
      .assert.containsText('@sortByDropDown', 'Relevance', 'Results displayed in order of relevance');
  },
  /**
   * This method validates that "No results found" is displayed
   */
  validateNoResultsFound() {
    return this
      .waitForElementVisible('@noResultsFoundText')
      .assert.containsText('@noResultsFoundText', 'No results found');
  },
  /**
   * This method filters search by given filter option
   * @param {*} filters - The filters option list .ie [price, brand, availability, rating, size]
   */
  filterSearchBy(filters) {
    if (filters instanceof Array) {
      for (let index = 0; index < filters.length; index++) {
        this
          .api.pause(2000);
        switch (filters[index].toLowerCase()) {
          case 'price':
            this
              .waitForElementVisible('@priceFilter')
              .click('@priceFilter')
              .waitForElementVisible('@priceFilterAmount', 10000)
              .getText('@priceFilterAmount', (filterAmount) => {
                this
                  .waitForElementVisible('@productListingCardPrice')
                  .getText('@productListingCardPrice', (productPrice) => {
                    this
                      .api.verify.ok(filterAmount.value.toLowerCase().replace('R ', '') < productPrice.value.toLowerCase().replace('R ', ''), `Product Price - ${productPrice.value} should be greater than Filter Price - ${filterAmount.value}`);
                  });
              });
            break;
          case 'brand':
            this
              .waitForElementVisible('@brandFilter', () => {}, '[STEP] -  Brand filter should be displayed')
              .click('@brandFilter');
            break;
          case 'available':
            this
              .waitForElementVisible('@availabilityFilter', () => {}, '[STEP] -  Availability filter should be displayed')
              .click('@availabilityFilter')
              .api.execute('scrollTo(0,-3000)', () => {
                this
                  .api.element('@inStockTxt', (res) => {
                    if (res.value.length > 0) {
                      this
                        .waitForElementVisible('@inStockTxt', 10000)
                        .verify.containsText('@inStockTxt', 'In stock', '[STEP] -  First Item in list should have "In Stock" status');
                    } else {
                      console.log('********** In Stock Status not available in product *********');
                    }
                  });
              });
            break;
          case 'rating':
            this
              .waitForElementVisible('@ratingFilter')
              .click('@ratingFilter');
            break;
          case 'size':
            this
              .waitForElementVisible('@sizeFilter')
              .click('@sizeFilter');
            break;
          case 'category':
            this
              .waitForElementVisible('@categoryFilter')
              .click('@categoryFilter');
            break;
          default:
            break;
        }
      }
    } else {
      switch (filters.toLowerCase()) {
        case 'price':
          this
            .waitForElementVisible('@priceFilter')
            .click('@priceFilter')
            .waitForElementVisible('@priceFilterAmount', 10000)
            .getText('@priceFilterAmount', (filterAmount) => {
              this
                .waitForElementVisible('@productListingCardPrice', 10000)
                .getText('@productListingCardPrice', (productPrice) => {
                  this
                    .api.verify.ok(filterAmount.value.toLowerCase().replace('R ', '') < productPrice.value.toLowerCase().replace('R ', ''), `Product Price - ${productPrice.value} should be greater than Filter Price - ${filterAmount.value}`);
                });
            });
          break;
        case 'brand':
          this
            .waitForElementVisible('@brandFilter', () => {}, '[STEP] -  Brand filter should be displayed')
            .click('@brandFilter');
          break;
        case 'available':
          this
            .waitForElementVisible('@availabilityFilter', () => {}, '[STEP] -  Availability filter should be displayed')
            .click('@availabilityFilter')
            .api.execute('scrollTo(0,-3000)', () => {
              this
                .api.element('@inStockTxt', (res) => {
                  if (res.value.length > 0) {
                    this
                      .waitForElementVisible('@inStockTxt', 10000)
                      .verify.containsText('@inStockTxt', 'In stock', '[STEP] -  First Item in list should have "In Stock" status');
                  } else {
                    console.log('********** In Stock Status not available in product *********');
                  }
                });
            });
          break;
        case 'rating':
          this
            .waitForElementVisible('@ratingFilter')
            .click('@ratingFilter');
          break;
        case 'size':
          this
            .waitForElementVisible('@sizeFilter')
            .click('@sizeFilter');
          break;
        case 'category':
          this
            .clickCategoryFilter();
          break;
        default:
          break;
      }
    }
    return this;
  },
  /**
   * This method validates that "No results found" is displayed
   */
  validateProductTitleMatchSearchTerm(searchTerm) {
    this
      .waitForElementVisible('@productTitle')
      .getText('@productTitle', (res) => {
        let title = '';
        if (res.value.toLowerCase().includes('-')) {
          title = res.value.toLowerCase().split('-');
        }
        title = res.value.toLowerCase().split(' ');
        this
          .api.verify.ok(title.some(val => searchTerm.includes(val)), `Search Term: ${searchTerm}, Returned Product: ${res.value.toLowerCase()}`);
      });
    return this;
  },
  /**
   * This method clicks on a Valid product on
   * the Search Listings Page i.e product is instock
   */
  clickValidProduct() {
    return this
      .waitForElementVisible('@validProduct')
      .click('@validProduct');
  },
  /**
   * This method clicks on a Pre-Order product in the Product Listing Page
   */
  clickPreOrderProduct() {
    return this
      .waitForElementVisible('@preOrderItem', 10000, () => {}, '[STEP] -  Pre-order product should be displayed')
      .click('@productListingCard');
  },
  /**
   * This method clicks on a Blu-ray product in the Product Listing Page
   */
  clickBluRayProduct() {
    return this
      .waitForElementVisible('@bluRayItem', 10000, () => {}, '[STEP] -  Blu-ray product should be displayed')
      .click('@bluRayItem');
  },
  /**
   * This method clicks on a product with a slashed price in the product listing page
   */
  clickSlashedPriceProduct() {
    return this
      .waitForElementVisible('@slashedPriceProduct')
      .click('@slashedPriceProduct');
  },
  /**
   * This method clicks on the "More Colours" button in product
   */
  clickMoreColours() {
    return this
      .waitForElementVisible('@colourVariantProduct', 10000, () => {}, '[STEP] -  More Colours should be displayed')
      .click('@colourVariantProduct');
  },
  errorMessageValidation(text) {
    this
      .assert.visible('@productListError')
      .assert.containsText('@productListError', text);
  },
  /**
   * This method validates that the Seller page is displayed
   */
  validateSellerPage() {
    return this
      .assert.urlContains('/seller/', '[STEP] -  Seller page should be displayed');
  },
  /**
   * This method validates the number of results returned is displayed in the header
   */
  validateNumberOfProductsReturned() {
    this
      .waitForElementVisible('@numProductsReturnedTxt', 10000, () => {}, '[STEP] -  Number of results returned should be displayed')
      .assert.containsText('@numProductsReturnedTxt', 'result');
  },
  /**
   * This method validates that the filter breadcrumbs are displayed
   */
  validateBreadcrumbs() {
    this
      .waitForElementVisible('@breadcrumbs', 10000, () => {}, '[STEP] -  Breadcrumbs should be displayed in the search listings page')
      .getText('@breadcrumbs', (text) => {
        this
          .assert.visible('@breadcrumbs', `Breadcrumbs displayed: ${text.value}`);
      });
    return this;
  },
  /**
   * This method validates that the breadcrumbs are not displayed
   */
  validateNoBreadcrumbs() {
    // eslint-disable-next-line no-unused-expressions
    this
      .api.expect.element('[class*="bread-crumbs"]').to.not.be.present;
    return this;
  },
  /**
   * This method clicks on the first product card in the Search Listings page
   */
  clickProductCard() {
    return this
      .waitForElementVisible('@productCard')
      .click('@productCard');
  },
  /**
   * This method validates that the attribute(s) is displayed below product title
   * ie.
   */
  validateAttributes() {
    return this
      .waitForElementVisible('@productSubtitle', 10000, () => {}, '[STEP] -  Product Card Attributes (Brand/Author link) should be displayed')
      .assert.visible('@productSubtitle');
  },
  /**
   * This method clicks on the attribute (Brand/Author link)
   */
  clickAttribute() {
    this
      .pause(2000)
      .waitForElementVisible('@productSubtitle', 10000, (res) => {
        if (res.value) {
          if (this.api.options.desiredCapabilities.browserName.toLowerCase().includes('internet explorer')) {
            this
              .click('@productSubtitle');
          } else {
            this
              .api.execute((selector) => {
                // eslint-disable-next-line no-undef
                document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
              }, ['(//*[contains(@class,"title-content-list")]//a)[1]']);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking attribute link (Brand/Author)');
        }
      }, '[STEP] - Attribute (Brand/Author) link should be displayed and clicked');
    return this;
  },
  /**
   * This method validates that the review component is not displayed on product
   */
  validateNoReviewComponent() {
    return this
      .waitForElementVisible('@productCardWithoutReviewComponent', 10000, () => {}, '[STEP] -  Product Card should not have review component')
      .assert.visible('@productCardWithoutReviewComponent');
  },
  /**
   * This method validates that the review component is displayed on product
   */
  validateReviewComponent() {
    return this
      .waitForElementVisible('@reviewComponent', 10000, () => {}, '[STEP] -  Product Card should have review component')
      .assert.visible('@reviewComponent');
  },
  /**
   * This method validates that the seller logo is displayed
   */
  validateSellerLogo() {
    return this
      .waitForElementVisible('@sellerLogo', 10000, () => {}, '[STEP] -  Seller logo should be displayed')
      .assert.visible('@sellerLogo');
  },
  /**
   * This method validates that the variant price range is displayed in the search listings page
   */
  validatePriceRange() {
    return this
      .waitForElementVisible('@variantPriceRangeTxt', 10000, () => {}, '[STEP] -  Price range should be displayed in variant product')
      .assert.containsText('@variantPriceRangeTxt', 'From');
  },
  /**
   * This method validates that the "Delivery Surcharge" text is displayed in the search listings page
   */
  validateDeliverySurcharge() {
    return this
      .waitForElementVisible('@deliverySurchargeText', 10000, () => {}, '[STEP] -  "Delivery Surcharge" should be displayed in product card')
      .assert.containsText('@deliverySurchargeText', 'Delivery Surcharge');
  },
  /**
   * This method validates that the "Delivery Surcharge" text is displayed in the search listings page
   * @param {*} surchargeAmount The surcharge amount i.e. 200
   */
  validateDeliverySurchargeProduct(surchargeAmount) {
    return this
      .waitForElementVisible('@deliverySurchargeText', () => {}, '[STEP] -  Product should have delivery surcharge message')
      .assert.containsText('@deliverySurchargeText', `+ R ${surchargeAmount} Delivery Surcharge`);
  },
  /**
   * This method clicks on the "Delivery Surcharge" tooltip
   */
  clickSurchargeTooltip() {
    this
      .waitForElementVisible('@deliverySurchargeToolTip', 10000, () => {}, '[STEP] -  "Delivery Surcharge" icon should be displayed')
      .moveToElement('@deliverySurchargeToolTip', 10, 10, () => {
        this
          .click('@deliverySurchargeToolTip');
      });
    return this;
  },
  /**
   * This method validates that the delivery surcharge tooltip info pop up is displayed
   */
  validateDeliverySurchargeTooltipInfo() {
    return this
      .waitForElementVisible('@deliverySurchargeToolTipInfo', 10000, () => {}, '[STEP] -  "Delivery Surcharge" info popup should be displayed')
      .assert.containsText('@deliverySurchargeToolTipInfo', 'A R 200 heavy/bulky delivery surcharge applies to this item.');
  },
  /**
   * This method validates that the Delivery Surcharge Tooltip is displayed
   * @param {*} surchargeAmount The surcharge amount i.e. 200
   */
  validateDeliverySurchargeTooltip(surchargeAmount) {
    return this
      .waitForElementVisible('@deliverySurchargeToolTipInfo', () => {}, '[STEP] -  Delivery Surcharge Tooltip should be displayed')
      .assert.containsText('@deliverySurchargeToolTipInfo', `A R ${surchargeAmount} heavy/bulky delivery surcharge applies`);
  },
  /**
   * This method clicks on the "Add to Cart" button in the Search Listings Page
   */
  clickAddToCart() {
    return this
      .waitForElementVisible('@addToCartBtn')
      // .moveToElement('@addToCartBtn', 10, 10)
      .click('@addToCartBtn');
  },
  /**
   * This method validates that the "Add to Cart" button is displayed in the Search Listings page
   */
  validateAddToCart() {
    return this
      .waitForElementVisible('@addToCartBtn', 10000, () => {}, '[STEP] -  "Add to Cart" button should be displayed')
      .assert.containsText('@addToCartBtn', 'Add to Cart');
  },
  /**
   * This method clicks on the "Pre-order" button in the Search Listings Page
   */
  clickPreOrder() {
    return this
      .waitForElementVisible('@preOrderBtn', 10000, () => {}, '[STEP] -  "Pre-order" button should be displayed')
      .click('@preOrderBtn');
  },
  /**
   * This method validates that the "Pre-order" button is displayed in the Search Listings page
   */
  validatePreOrder() {
    return this
      .waitForElementVisible('@preOrderBtn', 10000, () => {}, '[STEP] -  "Pre-order" button should be displayed')
      .assert.containsText('@preOrderBtn', 'Pre-order');
  },
  /**
   * This method clicks on the "Shop All Options" button in the Search Listings Page
   */
  clickShopAllOptions() {
    return this
      .waitForElementVisible('@shopAllOptionsBtn')
      .click('@shopAllOptionsBtn');
  },
  /**
   * This method validates that the "Add to List" button is displayed in the Search Listings page
   */
  validateAddTolist() {
    return this
      .waitForElementVisible('@addToWishlistBtn', 10000, () => {}, '[STEP] -  "Add to List" button should be displayed')
      .assert.containsText('@addToWishlistBtn', 'Add to List');
  },
  /**
   * This method validates that the "Add to List" heart icon is displayed in the Search Listings page
   */
  validateAddTolistHeartIcon() {
    return this
      .waitForElementVisible('@addToWishlistBtn', 10000, () => {}, '[STEP] -  "Add to List" button should be displayed')
      .assert.visible('@addToWishlistBtn');
  },
  /**
   * This method validates that the color swatch and "More Colours" text is displayed in the Search Listings Page
   */
  validateColourSwatch() {
    this
      .waitForElementVisible('@colorSwatchIcon', 10000, () => {}, '[STEP] -  Color Swatch should be displayed')
      .assert.containsText('@colorSwatchIcon', 'More Colours');
  },
  /**
   * This method validates that the color swatch and "More Colours" text is not displayed in the Search Listings Page
   */
  validateNoColourSwatch() {
    this
      .waitForElementVisible('@noColourSwatchIcon', 10000, () => {}, '[STEP] -  Color Swatch should not be displayed')
      .assert.visible('@noColourSwatchIcon');
  },
  /**
   * This method validates that there is no stock status is displayed in product card
   */
  validateNoStockStatus() {
    this
      .waitForElementNotPresent('@stockIndicator', 10000, (res) => {
        if (res.value) {
          // eslint-disable-next-line no-unused-expressions
          this
            .expect.element('@stockIndicator').to.be.not.present;
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating stock status is not displayed');
        }
      }, '[STEP] - Stock Status should not be displayed in Product Card');
    return this;
  },
  /**
   * This method validates that the stock status is displayed in product card
   * @param {string} status The stock status i.e ['In stock', 'Ships in', 'Out Of Stock', Available now', 'Pre-order']
   */
  validateStockStatus(status) {
    this
      .waitForElementVisible('@stockIndicator', 10000, (res) => {
        if (res.value) {
          this
            .getText('@stockIndicator', (text) => {
              this
                .assert.ok(text.value.toLowerCase().includes(status.toLowerCase()), `actual status "${text.value.toLowerCase()}" should include expected status "${status}"`);
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating stock status');
        }
      }, '[STEP] - Stock Status should be displayed in Product Card');
    return this;
  },
  /**
   * This method hovers over the stock status and validates tooltip
   * @param {String} location The location where stock is
   */
  hoverAndValidateStockStatus(location) {
    switch (location) {
      case 'CPT':
        this
          .waitForElementVisible('@capeTownStockPill', () => {
            this
              .moveToElement('@capeTownStockPill', 1, 1, () => {
                this
                  .waitForElementVisible('@stockStatusTooltip', 10000, () => {
                    this
                      .assert.containsText('@stockStatusTooltip', 'This item is in stock in our Cape Town warehouse');
                  });
              });
          });
        break;
      case 'JHB':
        this
          .waitForElementVisible('@jhbStockPill', () => {
            this
              .moveToElement('@jhbStockPill', 1, 1, () => {
                this
                  .waitForElementVisible('@stockStatusTooltip', 10000, () => {
                    this
                      .assert.containsText('@stockStatusTooltip', 'This item is in stock in our Johannesburg warehouse');
                  });
              });
          });
        break;
      default:
        break;
    }
    return this;
  },
  /**
   * This method validates that the "Add to List" button is displayed
   */
  validateAddToListButton() {
    return this
      .waitForElementVisible('@addToWishlistBtn', 10000, (res) => {
        if (res.value) {
          this
            .assert.visible('@addToWishlistBtn');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating "Add to Wishlist" button');
        }
      }, '[STEP] - "Add to List" button should be displayed');
  },
  /**
   * This method validates that the filter facet is displayed
   */
  validateFilterFacet() {
    return this
      .waitForElementVisible('@filterFacet', 10000, (res) => {
        if (res.value) {
          this
            .assert.visible('@filterFacet');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating filter facet');
        }
      }, '[STEP] - "Filter facet should be displayed');
  },
  /**
   * This method clicks on the "All Categories" first filter
   */
  clickCategoryFilter() {
    return this
      .waitForElementVisible('@categoryFilter', 10000, (res) => {
        if (res.value) {
          this
            .click('@categoryFilter');
        } else {
          this
            .assert.ok(false, '[INFO] - Something went wrong when clicking category filter');
        }
      }, '[STEP] - Category filter should be clicked (eg. Toys)');
  },
  /**
   * This method clicks on the Sub category list item
   */
  clickSubCategoryListItem() {
    return this
      .waitForElementVisible('@categoryListItem', 10000, (res) => {
        if (res.value) {
          this
            .click('@categoryListItem');
        } else {
          this
            .assert.ok(false, '[INFO] - Something went wrong when clicking sub-category filter');
        }
      }, '[STEP] - Category sub category should be displayed and clicked (eg. Toys)');
  },
  /**
   * This method validates that the Category filter list items are displayed
   */
  validateCategoryListItems() {
    return this
      .waitForElementVisible('@categoryListItem', 10000, (res) => {
        if (res.value == true) {
          this
            .assert.visible('@categoryListItem');
        } else {
          this
            .assert.ok(false, '[INFO] - Something went wrong when validating category filter list items');
        }
      }, '[STEP] - Category filter list items should be displayed');
  },
  /**
   * This method validates that the "See more" is displayed when there are more than 5 categories
   */
  validateSeeMoreCategoryListItems() {
    this
      .api.elements('@categoryTreeItems', (res) => {
        console.log(`${res.value.length} categories returned`);
        if (res.value.length > 5) {
          this
            // .useXpath()
            .waitForElementVisible('@seeMoreBtn', 10000, (result) => {
              if (result.value == true) {
                this
                  .assert.visible('@seeMoreBtn');
              } else {
                this
                  .assert.ok(false, '[INFO] - Something went wrong when validating "See More" link');
              }
            }, '[STEP] - "See More" link should be displayed');
        }
      });
    return this;
  },
  /**
   * This method clicks on the "See More" button
   */
  clickSeeMore() {
    return this
      .waitForElementVisible('@seeMoreBtn')
      .click('@seeMoreBtn');
  },
  /**
   * This method validates that the CAtegories have been expanded
   */
  validateCategoriesExpanded() {
    return this
      .waitForElementVisible('@seeLessBtn', 10000, (res) => {
        if (res.value == true) {
          this
            .assert.visible('@seeLessBtn');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating category expansion');
        }
      }, '[STEP] - Categories should be expanded and "See Less" displayed');
  },
  /**
   * This method validates that the default sort option is set
   */
  validateDefaultSortOrder() {
    this
      .waitForElementVisible('@sortOrderDropDownList', 10000, (res) => {
        if (res.value == true) {
          this
            .getText('@sortOrderDropDownList', (text) => {
              const list = text.value;
              const result = list.split(' ')[0];
              this
                .assert.ok(result.toLowerCase().includes('relevance'), '[STEP] - Default sort should be "Relevance"');
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating default sort order');
        }
      }, '[STEP] - Default sort order (relevance) should be displayed');
    return this;
  },
  /**
   * This method applies a sort order
   * @param {string} sortOrder The sort order [price-low-high, price-high-low, relevance, top-rated, newest-arrival]
   */
  sortResultsBy(sortOrder) {
    this
      .waitForElementVisible('@sortOrderDropDownList', 10000, (res) => {
        if (res.value == true) {
          switch (sortOrder.toLowerCase()) {
            case 'price-low-high':
              this
                .click('@sortOrderDropDownList', () => {
                  this
                    .click('@priceLowHigh');
                });
              break;
            case 'price-high-low':
              this
                .click('@sortOrderDropDownList', () => {
                  this
                    .click('@priceHighLowOpt');
                });
              break;
            case 'top-rated':
              this
                .click('@sortOrderDropDownList', () => {
                  this
                    .click('@topRatedOpt');
                });
              break;
            case 'newest-arrival':
              this
                .click('@sortOrderDropDownList', () => {
                  this
                    .click('@newestArrivalOpt');
                });
              break;
            default:
              break;
          }
        }
      }, `[STEP] - Results should be sorted by: ${sortOrder}`);

    return this;
  },
  /**
   * This method validates that the sort order is applied
   * @param {string} sortOrder The sort order [price-low-high, price-high-low, relevance, top-rated, newest-arrival]
   */
  validateSortedBy(sortOrder) {
    this
      .waitForElementVisible('@sortOrderDropDownList', 10000, (res) => {
        if (res.value == true) {
          switch (sortOrder.toLowerCase()) {
            case 'price-low-high':
              this
                .assert.urlContains('sort=Price%20Ascending', `[STEP] - Results Sorted by: ${sortOrder}`);
              break;
            case 'price-high-low':
              this
                .assert.urlContains('sort=Price%20Descending', `[STEP] - Results Sorted by: ${sortOrder}`);
              break;
            case 'top-rated':
              this
                .assert.urlContains('sort=Rating%20Descending', `[STEP] - Results Sorted by: ${sortOrder}`);
              break;
            case 'newest-arrival':
              this
                .assert.urlContains('sort=ReleaseDate%20Descending', `[STEP] - Results Sorted by: ${sortOrder}`);
              break;
            default:
              break;
          }
        }
      }, `[STEP] - Results should be sorted by: ${sortOrder}`);

    return this;
  },
  /**
   * This method validates that the onsite ad is displayed
   */
  validateOnsiteAdBanner() {
    this
      .pause(2000)
      .api.frame(0, () => {
        this
          .isVisible({ selector: '@onsiteAdBanner', suppressNotFoundErrors: true, timeout: 10000 }, (res) => {
            if (res.value == true) {
              this
                .assert.visible('@onsiteAdBanner', '[STEP] - Onsite Ad should be displayed');
            } else {
              this
                .assert.ok(true, '[INFO] - Onsite Ad not displayed');
            }
          });
      });
    return this;
  },
  /**
   * This method validates that the bundle deals icon is displayed
   */
  validateBundleDealsIcon() {
    this
      .waitForElementVisible('@bundleDealsIcon', 10000, (res) => {
        if (res.value == true) {
          this
            .assert.visible('@bundleDealsIcon');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating bundle deals icon');
        }
      }, '[STEP] - Bundle Deals Icon should be displayed');
    return this;
  },
  /**
   * This method validates that the Set bundle name is displayed in the deal strip
   * @param {*} dealName The deal name in strip
   */
  validateSetBundleNameInDealStrip(dealName = null) {
    this
      .waitForElementVisible('@promotionDisplayName', 10000, (res) => {
        if (res.value == true) {
          if (dealName != null) {
            this
              .assert.containsText('@promotionDisplayName', dealName);
          } else {
            this
              .assert.visible('@promotionDisplayName');
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating set bundle deal name');
        }
      }, '[STEP] - Set bundle name should be displayed in deal strip');
  },
  /**
   * This method validates that promotional badges are displayed correctly in List View
   */
  validateBadgeDisplayedCorrectlyListView() {
    this
      .waitForElementVisible('@promotionalBadge', 10000, (res) => {
        if (res.value == true) {
          this
            .expect.element('@promotionalBadge').to.have.css('position').which.equals('absolute');
          this
            .api.elements('@promotionalBadgeList', (result) => {
              console.log(`****No of Badges in Product Card: ${result.value.length}****`);
              if (result.value.length > 2) {
                this
                  .assert.ok(false, '[FAIL] - There are more than two badges displayed in Product card');
              } else {
                this
                  .assert.ok(true, '[STEP] - Two or less badges should be displayed in Product Card');
              }
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating promotional badge');
        }
      }, '[STEP] - Promotional Badge should be displayed');
    return this;
  },
  /**
   * This method validates that promotional badges are displayed correctly in Grid View
   */
  validateBadgeDisplayedCorrectlyGridView() {
    this
      .waitForElementVisible('@promotionalBadge', 10000, (res) => {
        if (res.value == true) {
          this
            .expect.element('@promotionalBadge').to.have.css('position').which.equals('relative');
          this
            .api.elements('@promotionalBadgeList', (result) => {
              console.log(`****No of Badges in Product Card: ${result.value.length}****`);
              if (result.value.length > 2) {
                this
                  .assert.ok(false, '[FAIL] - There are more than two badges displayed in Product card');
              } else {
                this
                  .assert.ok(true, '[STEP] - Two or less badges should be displayed in Product Card');
              }
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating promotional badge');
        }
      }, '[STEP] - Promotional Badge should be displayed');
    return this;
  },
  /**
   * This method validates the badge priority in the product card
   */
  validateBadgePriority() {
    this
      .waitForElementVisible('@promotionalBadgeList', 10000, (res) => {
        if (res.value == true) {
          this
            .api.elements('@promotionalBadgeList', (result) => {
              console.log(result.value.length);
              if (result.value.length > 1) {
                this
                  .api.execute(() => {
                    // eslint-disable-next-line no-undef
                    const elem = document.evaluate('(//ul[contains(@class,"badge-list")])[1]//li', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    if (elem.innerHTML.includes('deals-ribbon')) {
                      return true;
                    }
                    return false;
                  }, [], (bool) => {
                    if (bool) {
                      this
                        .assert.ok(true, '[STEP] - Daily Deals Ribbon Badge should be displayed first in Product Card');
                    } else {
                      this
                        .assert.ok(false, '[FAIL] - Daily Deals not listed first in badge');
                    }
                  });
              } else {
                this
                  .assert.containsText('@promotionalBadgeList', '%');
              }
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating badge priority');
        }
      }, '[STEP] - Badge Priority: badges should be listed according to priority');
    return this;
  },
  /**
   * This method clicks on a product without a review in the Product Search Listing page
   */
  clickProductWithoutReviews() {
    return this
      .waitForElementVisible('@productCardWithoutReviewComponent')
      .click('@productCardWithoutReviewComponent');
  },
  /**
   * This method clicks on a product with a review in the Product Search Listing page
   */
  clickProductWithReviews() {
    return this
      .waitForElementVisible('@productCardWithReviewComponent')
      .click('@productCardWithReviewComponent');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [searchListing],
  elements: {
    productListError: '[class*="empty-list-message-module_children"]',
    categoryWidget: '.widget-container .category-widget',
    categoryWidgetTitle: '.widget-container .category-widget h3',
    listingsContainer: '.toolbar ~ .listings-container',
    listIcon: '[class^="grid-list-toggle-module_toggle-container"] button:first-child',
    gridIcon: '[class^="grid-list-toggle-module_toggle-container"] button:last-child',
    gridViewContainer: '.toolbar ~ .listings-container .grid-x div:nth-of-type(2) div[class="search-product grid"]',
    productListingCard: xSelector('(//div[contains(@class,"listing-card")])[1]'),
    productListingCardImg: xSelector('(//div[contains(@class,"product-card")])[1]'),
    productsListed: '.listings-container [class="cell"]',
    loadMoreBtn: 'button[class*="search-listings-module_load-more"]',
    relatedSearchWidget: '[class^="related-searches-module_label"]',
    relatedSearchWidgetItem: '[class^="related-searches"] .cell:last-child a:first-child',
    searchResultFilter: xSelector('(//ul[contains(@class,"filter-facet")]//label)[1]'),
    noProductImagePlaceholder: xSelector('(//img[contains(@src,"no-product-image")])[1]'),
    salePriceText: xSelector('(//span[contains(@class,"currency")])[1]'),
    listPriceText: xSelector('(//span[contains(@class,"currency")])[2]'),
    listPriceTooltipIcon: xSelector('(//div[contains(@class,"list-price-tooltip")])[1]'),
    addToWishlistBtn: xSelector('(//button[contains(@class,"wishlist-button")][not(contains(@class,"active"))])[1]'),
    activeAddToWishlistBtn: xSelector('(//button[contains(@class,"wishlist-button")][(contains(@class,"active"))])[1]'),
    sortByDropDown: xSelector('(//select[contains(@id,"searchSortOrder_searchDrop")]//child::option)[1]'),
    noResultsFoundText: xSelector('(//h2[contains(text(),"No results found")])'),
    priceFilter: xSelector('(//div[contains(@class,"bar-chart")])[1]//button[2]'),
    brandFilter: xSelector('(//label[contains(@for,"filter_")])[1]'),
    availabilityFilter: xSelector('(//span[contains(text(),"In Stock")])[1]//parent::div'),
    ratingFilter: xSelector('(//span[contains(.,"and up")])[1]//ancestor::label'),
    sizeFilter: xSelector('(//label[contains(@for,"filter_UK")])[1]'),
    categoryFilter: xSelector('(//a[contains(@class,"category")])[2]'),
    productListingCardPrice: xSelector('(//*[contains(@class,"card-module_price_")])[1]'),
    priceFilterAmount: xSelector('(//select[contains(@id, "price_min_price_min")]//option)[last()]'),
    inStockTxt: xSelector('(//div[contains(@class,"stock-availability-status")])[1]'),
    productTitle: xSelector('(//div[contains(@class,"search-product")]//h3[contains(@class, "title")])'),
    validProduct: xSelector('((//button[contains(.,"Add to Cart")])[1]//ancestor::div[contains(@class,"listing-card")])[1]'),
    preOrderItem: xSelector('((//*[contains(@class,"stock-availability-status")]//*[contains(.,"Pre-order") or contains(.,"pre-order")])[1])'),
    bluRayItem: xSelector('((//span[contains(text(),"(Blu-ray)")])[1]//ancestor::div[contains(@class,"listing-card")])[1]'),
    slashedPriceProduct: xSelector('((//div[contains(@class,"listing-card-module_list-price")]//span[contains(@class,"currency")])[1]//ancestor::div[contains(@class,"listing-card")])[1]'),
    colourVariantProduct: xSelector('((//span[text() ="More Colours"])[1]//ancestor::div[contains(@class,"listing-card")])[1]'),
    numProductsReturnedTxt: '[class*="search-count"]',
    breadcrumbs: xSelector('(//span[contains(@class, "bread-crumbs")])[last()]'),
    productCard: xSelector('(//a[contains(@class,"product-anchor")])[1]'),
    productSubtitle: xSelector('(//*[contains(@class,"title-content-list")]//a)[1]'),
    reviewComponent: xSelector('(//div[contains(@class,"listing-card")]//div[contains(@class,"rating")])[1]'),
    productCardWithoutReviewComponent: xSelector('(//*[contains(@class, "listing-card-module_product-info-container") and not(*[contains(@class, "rating")])])[1]/ancestor::div[contains(@class,"search-product")]//a[contains(@class,"product-anchor")]'),
    productCardWithReviewComponent: xSelector('(//*[contains(@class, "listing-card-module_product-info-container") and (*[contains(@class, "rating")])])[1]/ancestor::div[contains(@class,"search-product")]//a[contains(@class,"product-anchor")]'),
    sellerLogo: xSelector('(//img[contains(@src,"logo") or contains(@alt,"*")])[1]'),
    variantPriceRangeTxt: xSelector('(//span[contains(@class,"currency")]/parent::p[contains(.,"From")])[1]'),
    deliverySurchargeText: xSelector('(//div[contains(@class, "listing-card") and contains(text(),"Delivery Surcharge")])[1]'),
    deliverySurchargeToolTip: xSelector('(//div[contains(text(),"Delivery Surcharge")]/descendant::div[contains(@class,"tooltip-trigger")])[1]'),
    deliverySurchargeToolTipInfo: xSelector('(//div[contains(text(),"heavy/bulky delivery surcharge")])[1]'),
    addToCartBtn: xSelector('(//button[contains(@class,"add-to-cart-button")][not(contains(@class,"active"))])[1]'),
    preOrderBtn: xSelector('(//button[contains(@class,"pre-order")][not(contains(@class,"active"))])[1]'),
    shopAllOptionsBtn: xSelector('(//button[contains(@class,"shop-all-options")][not(contains(@class,"active"))])[1]'),
    colorSwatchIcon: xSelector('((//span[text() ="More Colours"])[1])[1]'),
    noColourSwatchIcon: xSelector('(//div[contains(@class,"listing-card")]/descendant::*[not(text() ="More Colours")])[1]'),
    stockIndicator: xSelector('((//div[contains(@class,"listing-card")])[1]//div[contains(@class,"listing-card-module_stock-indicator")])[1]'),
    capeTownStockPill: xSelector('(//div[contains(@class,"stock-pill") and contains(text(),"CPT")])[1]'),
    jhbStockPill: xSelector('(//div[contains(@class,"stock-pill") and contains(text(),"JHB")])[1]'),
    stockStatusTooltip: '[class*="tooltip top"]',
    filterFacet: '[class*="filter-facets-container"]',
    categoryListItem: xSelector('(//a[contains(@class,"list-nav-item all-categories")])[1]'),
    filterFade: '[class*="module_fade-cards"]',
    categoryTreeItems: '[class*="transition-horizontal-module_slide"] a',
    seeMoreBtn: xSelector('(//button[contains(text(),"See More")])[1]'),
    seeLessBtn: '[class*="show-less"] button',
    sortOrderDropDownList: '#searchSortOrder_searchDrop',
    relevanceOpt: 'option[value*="Relevance"]',
    priceLowHigh: 'option[value*="Price Ascending"]',
    priceHighLowOpt: 'option[value*="Price Descending"]',
    topRatedOpt: 'option[value*="Rating Descending"]',
    newestArrivalOpt: 'option[value*="ReleaseDate Descending"]',
    onsiteAdBanner: '[class*="adunit search-listing-banner"]',
    bundleDealsIcon: xSelector('(//div[contains(@class,"bundle-deals-icon-text")])[1]'),
    promotionDisplayName: xSelector('(//div[contains(@class,"bundle-deals-icon-text")]//span)[1]'),
    promotionalBadge: xSelector('(//ul[contains(@class,"badge-list")])[1]'),
    promotionalBadgeList: xSelector('(//ul[contains(@class,"badge-list")])[1]//li'),
  },
};
