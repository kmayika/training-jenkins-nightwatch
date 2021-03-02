const https = require('https');

const url = process.env.URL.toLowerCase();

/* eslint-disable func-names */
exports.command = function () {
  const client = this;
  this
    .perform(() => {
      https.get(`https://api.${url}/rest/v-1-9-0/popups/desktop`, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const { response } = JSON.parse(data);
            if (response.popups.length > 0) {
              response.popups.forEach((popup) => {
                client.setCookie({
                  name: `popup_${popup.slug}`,
                  value: '1',
                  domain: process.env.URL,
                }, () => {
                  console.log(`cookie set: popup_${popup.slug}`);

                  client
                    .pause(1000)
                    .moveToElement('body', 10, 10, () => {
                      client.mouseButtonClick(0);
                    })
                })
                  .setCookie({
                    name: 'covid19Alert',
                    value: 'true',
                    domain: '.takealot.com',
                  });
              });
            } else {
              console.log('No cookies set, clean sailing');
              client
                .pause(1000)
                .moveToElement('body', 10, 10, () => {
                  client.mouseButtonClick(0);
                });
            }
          } catch (err) {
            console.log(`🚩 Could not read response from https://api.${url}/rest/v-1-9-0/popups/desktop`);
            console.log('🚩 Pop-ups may run rampant!');
            client
              .setCookie({
                name: 'covid19Alert',
                value: 'true',
                domain: '.takealot.com',
              })
              .pause(1000)
              .moveToElement('body', 10, 10, () => {
                client.mouseButtonClick(0);
              });
          }
        });
      });
    });

  return this;
};
