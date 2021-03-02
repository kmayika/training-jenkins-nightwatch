/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
exports.command = function (option) {
  this
    .execute(function reception(option) {
      try {
        const node = document.querySelector('[class^="select-drawer-module_list_"]');
        const childElementsList = node.childNodes;

        for (let x = 0; x < childElementsList.length; x++) {
          if (childElementsList[x].innerText == `${arguments[0]}`) {
            // eslint-disable-next-line no-undef
            document.evaluate(`(//button[@class="${childElementsList[x].lastChild.className}"])[${x + 1}]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            //   $x(`(//button[@class="${childElementsList[x].lastChild.className}"])[${x + 1}]`)[0].click();
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, [option]);

  return this;
};
