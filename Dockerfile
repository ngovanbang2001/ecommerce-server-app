# Sử dụng image Node.js phiên bản LTS
FROM node:lts-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Expose cổng 5000 (hoặc cổng mà ứng dụng Node.js của bạn sử dụng)
EXPOSE 8080

# Khởi chạy ứng dụng
CMD ["npm", "start"]