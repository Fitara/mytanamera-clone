FROM node:latest

WORKDIR /server

# untuk set ENV dalam aplikasi kita
ENV SECRET=secret
ENV DATABASE_URL=postgresql://postgres:qpJLp1cqTs3yPe1Z@db.tinerljyoklazswjhllh.supabase.co:5432/postgres

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