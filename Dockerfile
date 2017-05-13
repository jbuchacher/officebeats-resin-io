FROM resin/raspberry-pi3-node

RUN apt-get update && \
    apt-get install -yy libasound2-dev

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

CMD ["npm", "start"]
