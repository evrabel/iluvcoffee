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

Mac Docker start and stop commands:

docker-compose up -d

docker-compose down

Postgres user: postgres


Verified that the pg package was approved: https://va529.cloud.invgate.net/incident/show/index/id/9913

Postgres Installation on Work Laptop

Ran Docker Desktop



Following instructions here: https://hub.docker.com/_/postgres

docker pull postgres

docker run --name iluvcoffee -e POSTGRES_PASSWORD=pass123 -d postgres
