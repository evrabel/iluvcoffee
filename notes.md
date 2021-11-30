https://learn.nestjs.com/courses/enrolled/591712

Upgrading node according to these instructions

https://nodejs.org/en/download/package-manager/#n

Had to run the commands with sudo

Installed nest globally

sudo npm i -g @nestjs/cli

When I pulled the code down from git I had to use the https url. SSH didn't work.

Command to start the server:

npm run start:dev

Downloaded and installed docker desktop

Mac:
https://hub.docker.com/editions/community/docker-ce-desktop-mac

Windows:
See Docker Installation Instructions in OneNote

Mac

Docker start and stop commands:

docker-compose up -d

- This created a container but I do not see it listed in Docker Desktop. I could see it with the following command:
  docker container ls

docker-compose down

Postgres user: postgres

Postgres Installation on Work Laptop

Verified that the pg package was approved: https://va529.cloud.invgate.net/incident/show/index/id/9913

Ran Docker Desktop

Following instructions here: https://hub.docker.com/_/postgres

docker pull postgres

Command to create docker on windows:
docker run --name iluvcoffee -p 5432:5432 -e POSTGRES_PASSWORD=pass123 -d postgres

Command to start the db:
docker start iluvcoffee

docker stop iluvcoffee

docker rm iluvcoffee
