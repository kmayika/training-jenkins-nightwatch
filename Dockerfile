# Create a lightweight nigthwatchjs docker runner
FROM alpine:latest

RUN apk add --update nodejs-npm && \
    npm install -g nightwatch && \
    rm -rf /tmp/* /root/.npm

# Copy your tests and your config to the containers
COPY . .

CMD nightwatch -e chrome
