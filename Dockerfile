FROM node:alpine

# Setting working directory. All the path will be relative to WORKDIR
RUN mkdir -p /app/
RUN mkdir -p /app/logs
WORKDIR /app/

# Install dependencies
COPY package.json ./
RUN yarn

# Copying source files
COPY . .

# Exports
EXPOSE 3009

# Running the app
CMD [ "yarn", "start" ]
