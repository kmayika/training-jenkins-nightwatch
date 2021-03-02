const https = require('https');
// eslint-disable-next-line import/no-unresolved
https.post = require('https-post');

const url = process.env.URL.toLowerCase();
const postBody = {
  email: process.env.NW_USERNAME,
  password: process.env.NW_PASSWORD,
  remember_me: true,
};

/* eslint-disable func-names */
exports.command = function () {
  const client = this;
  this
    .perform(() => {
      https.post(`https://api.${url}/rest/v-1-9-0/login`, postBody, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const { response } = JSON.parse(data);
            // console.log(response);
            // eslint-disable-next-line eqeqeq
            if (response) {
              console.log(response.jwt);
              client.setCookie({
                name: 'jwt',
                value: response.jwt,
                domain: process.env.URL,
              }, () => {
                console.log('tal_jwt token set');

                client
                  .pause(1000)
                  .moveToElement('body', 10, 10, () => {
                    client.mouseButtonClick(0);
                  });
              });
              client.setCookie({
                name: 'csrf_token',
                value: response.csrf_token,
                domain: process.env.URL,
              }, () => {
                console.log('tal_csrf token set');

                client
                  .pause(1000)
                  .moveToElement('body', 10, 10, () => {
                    client.mouseButtonClick(0);
                  });
              });

              console.log(`user ---- ${response.id_token}`);
              client.setCookie({
                name: 'id_token',
                value: response.id_token,
                domain: process.env.URL,
              }, () => {
                console.log('taid token set');

                client
                  .pause(1000)
                  .moveToElement('body', 10, 10, () => {
                    client.mouseButtonClick(0);
                  });
              });
              client.setCookie({
                name: 'returnTo',
                value: process.env.URL,
                // domain: process.env.URL,
              }, () => {
                console.log('return to url');

                client
                  .pause(1000)
                  .moveToElement('body', 10, 10, () => {
                    client.mouseButtonClick(0);
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
            console.log(`🚩 Could not read response from https://api.${url}/rest/v-1-9-0/login`);
            client
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
