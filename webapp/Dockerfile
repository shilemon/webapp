FROM node:18-alpine

WORKDIR /app
COPY package.json .
RUN npm install --production
COPY index.js .
ENV PORT=3000
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s CMD curl -f http://localhost:3000/health || exit 1
EXPOSE 3000
CMD ["node","index.js"]
