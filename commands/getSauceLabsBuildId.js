const { XMLHttpRequest } = require('xmlhttprequest');

function getSauceLabsBuildId() {
  const request = new XMLHttpRequest();
  const token = `${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}`;

  const url = 'https://eu-central-1.saucelabs.com/rest/v1.1/TAKEALOT_MASTER/builds';
  try {
    request.open('GET', url, false); // `false` makes the request synchronous
    request.setRequestHeader('Authorization', `Basic ${Buffer.from(token).toString('base64')}`);
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.send();
    if (request.readyState === 4) {
      if (request.status == 200) {
        const response = JSON.parse(request.responseText);
        response.forEach((build) => {
          if (build.name.toLowerCase().includes(`${process.env.JOB_NAME.toLowerCase()}_build_${process.env.BUILD_NUMBER}`)) {
            process.env.SESSION_ID = build.id;
            console.log(`Sauce Build Id: ${build.id}`);
          }
        });
      } else {
        console.log(`FAILED TO RETURN RESPONSE FROM: ${url}`);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getSauceLabsBuildId,
};
