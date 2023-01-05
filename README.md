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

# HOW TO EXPORT .TAR

docker save -o [ชื่อที่ต้องการ.tar] [ชื่อContainer]:[Tags]

`docker save -o reverse-proxy.tar reverse-proxy:latest`

# HOW TO IMPORT .TAR

docker load -i ชื่อContainer.tar

`docker load -i reverse-proxy.tar`

<br />
<br />

# NewBuild Images Nginx

### สร้าง Container

docker run -d  --name [ชื่อContainerที่จะตั้ง] -p [portเครื่องเรา]:[PortContainer] [images]:[Tags]

`docker run -d  --name reverse-proxy -p 80:80 nginx:1.22-alpine`

### Copy ไฟล์มาลงที่เครื่องเรา

docker cp [ชื่อContainerที่รันอยู่]:[ตำแหน่งไฟล์หรือโฟเด้อที่ต้องการ] [ตำแหน่งที่จะวาง]

`docker cp reverse-proxy:/etc/nginx/conf.d .`

### เปิดไฟล์แก้ เพิ่ม proxy ที่ต้องการ

##### ตัวอย่างด้านล่าง

```
    location /app1/ {
        proxy_pass http://192.168.1.2:3000/;
    }
```

### นำไฟล์กลับไปคืน

docker cp [ตำแหน่งไฟล์หรือโฟเด้อที่ต้องการ] [ชื่อContainerที่รันอยู่]:[ตำแหน่งที่จะวาง]

`docker cp conf.d reverse-proxy:/etc/nginx/`

### Restart Container ใหม่

`docker restart reverse-proxy`
