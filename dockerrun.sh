# make sure no container running
docker rm -fv "nightwatcher"

#pull selenium/standalone-firefox image
docker run --rm -d -p 4444:4444 --name nightwatcher selenium/standalone-chrome
docker ps --latest
# run nightwatch docker
./node_modules/.bin/nightwatch -e chrome

# remove container
docker rm -fv "nightwatcher"
