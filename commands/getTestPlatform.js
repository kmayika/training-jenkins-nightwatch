/* eslint-disable no-plusplus */

/* eslint-disable func-names */

const getPlatform = () => {
  const argv = process.argv.slice(2);
  process.env.PLTFRM = 'Not Specified';
  const index = argv.indexOf('--tag');
  const tags = argv[index + 1];
  process.env.TAGS = tags;
  if (tags.includes('mobi')) {
    process.env.PLTFRM = 'Mobi';
  } else if (tags.includes('desktop')) {
    process.env.PLTFRM = 'Desktop';
  }
};

module.exports = {
  getPlatform,
};
