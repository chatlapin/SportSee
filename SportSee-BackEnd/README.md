# SportSee

This repo contains all the source code to run the micro API for the sports analytics dashboard SportSee.

## 1. General information

To start this project, you are free to use Docker or not. In this documentation, we will see several methods to launch the project easily.

## 2. Project (**without Docker**)

### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/) or higher (tested up to Node 20.0)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

## 3. Project (**with Docker**)

### 2.1 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### 2.2 Starting the project

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

### 2.3 Vscode and container remotes

Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Once you have this extension installed, just click on the `Reopen in Container` button.

Once in the container, run the `yarn dev` command.

## 4. Endpoints

### 4.1 Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 4.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

Verify Docker is Running:
docker info

Find the Process Using Port 3000:
lsof -i :3000
Stop the Process: Identify the PID (Process ID) from the output and stop it:
kill -9 <PID>
Run the Docker Container:
docker run -d -p 3000:3000 --name sportsee-backend-container sportsee-backend

1. Build the Docker Image:
   cd /Users/HYEJIN/Desktop/Cho_Hyejin_12_SportSee_092024/SportSee-BackEnd
   docker build -t sportsee-backend .
2. Stop the Process Using Port 3000: Find and stop the process with PID 37155:
   kill -9 37155

Option 1: Stop the Process Using Port 3000
lsof -i :3000
kill -9 <PID>
docker run -d -p 3000:3000 --name sportsee-backend-container sportsee-backend

Option 2: Remove the Existing Container

1. Stop the Existing Container:
   docker stop sportsee-backend-container

2. Remove the Existing Container:
   docker rm sportsee-backend-container

3. Run the Docker Container:
   docker run -d -p 3000:3000 --name sportsee-backend-container sportsee-backend

Verify the Container is Running. List Running Containers:
docker ps

docker inspect <container_id_or_name>

Stop the Container:
docker stop <container_id_or_name>

Remove the Container:
docker rm <container_id_or_name>

docker hub push
docker push chatlapin517/sportsee:tagname

Dream Coding

npm init -y 프로젝트 생성 초기화
npm i express 심플 백앤드 생성

index.js  
const express = require("express");
const app = express();
// app print "dream coding" when user access to the root path
app.get("/", (req, res) => {
res.send("dream coding");
});

//port 8080 is used
app.listen(8080, () => {
console.log("Server is running on http://localhost:8080");
});

node index.js

DockerFile
FROM node:16-alpine (16 version, alpine tiny version, Layer 0)
WORKDIR /app //workdir (quasi cd)
COPY package.json package-lock.json ./
RUN npm ci //install the version when developed
COPY index.js
ENTRYPOINT ["node", "index.js"] //Layer 4

docker build -f Dockerfile -t fun-docker .
f point to Dockerfile
t tag

docker images

docker fun -d -p 8081:8080
d detached 터미널아 기다리지 말고 가라
8081 host machine
8080 container

docker ps

brower
localhost:8080

docker logs (tag)

docker tag

docker login
docker logout

docker push chatlapin517/sportsee:tagname
