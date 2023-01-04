# เปิดไฟล์ default.conf เพิ่ม proxy ที่ต้องการ

### ตัวอย่างด้านล่าง

```
    location /app1/ {
        proxy_pass http://192.168.1.2:3000/;
    }
```

### Build Images

`docker build -t reverse-proxy:latest .`

### Run Container

`docker run -d  --name reverse-proxy -p 80:80 reverse-proxy:latest`

<br />
<br />

# NewBuild Images Nginx

### สร้าง Container

`docker run -d  --name reverse-proxy -p 80:80 nginx:1.22-alpine`

### Copy ไฟล์มาลงที่เครื่องเรา

`docker cp reverse-proxy:/etc/nginx/conf.d .`

### เปิดไฟล์แก้ เพิ่ม proxy ที่ต้องการ

##### ตัวอย่างด้านล่าง

```
    location /app1/ {
        proxy_pass http://192.168.1.2:3000/;
    }
```

### นำไฟล์กลับไปคืน

`docker cp conf.d reverse-proxy:/etc/nginx/`

### Restart Container ใหม่

`docker restart reverse-proxy`
