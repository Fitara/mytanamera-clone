FROM node:latest

WORKDIR /server

# copy deps yang ada di apps ke WORKDIR
COPY package.json package-lock.json ./

# Install npm & Mengapus cache
RUN npm install && npm cache clean --force

# 2 install setup for development
RUN npm install -g nodemon

# copy semua file & folder ke WORKDIR
COPY ./ ./

# execute apps: production
CMD ["node", "app.js"]