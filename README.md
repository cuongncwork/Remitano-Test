# Youtube Video Sharing App

## Introduction

1. This project is a small web app for sharing YouTube videos.
   - User can view all shared videos without login.
   - User need to login if they want to share a youtube video or vote a video.

2. Key features:
   - User registration and login
   - Sharing YouTube videos
   - Viewing a list of shared videos
   - Vote a shared video
   - Real-time notifications for new video shares: When a user shares a new video, other logged-in users should receive a real-time notification about the newly shared video. This notification can be displayed as a pop-up or a banner in the application, and it should contain the video title and the name of the user who shared it.

3. Demo: Visit the page: http://35.193.116.201/

## Prerequisites

1. Backend

  |   Ruby   |   Rails  |   MySQL  |   Redis  |
  | :------: | :------: | :------: | :------: |
  |   3.2.2  |   7.0.7  |   8.1.0  |   7.2.0  |

2. Frontend

  |    ReactJS    | React Bootstrap |
  | :-----------: | :-------------: |
  |     18.2.0    |      2.8.0      |

**Cross-platform: This project using Docker for development, so you can run this project anywhere.**

## Installation & Configuration

1. Install and Run Docker Desktop: https://docs.docker.com/get-docker/
2. Clone repository: https://github.com/cuongncwork/Remitano-Test
3. In the root folder of project, add .env file with content below:

```
  REACT_APP_BACKEND_URL=http://localhost:3000/api
  REACT_APP_BACKEND_CABLE_URL=ws:localhost:3000/cable

  RAILS_ENV=development
  MYSQL_USERNAME=root
  MYSQL_PASSWORD=root@123
  MYSQL_HOST=db

  REDIS_HOST=redis
  REDIS_PORT=6379
  REDIS_URL=redis://redis:6379/0
```

4. Open Terminal, go to project, then run command:

```
  docker volume create mysql-data-volume
```
```
  docker compose up --build
```

5. After build successfully, run commands:

```
  docker compose run backend rails db:create
```
```
  docker compose run backend rails db:migrate
```

6. Open [http://localhost:3001](http://localhost:3001) to view project in the browser.

## Run Test

- Run project with Docker, then run command:

```
  docker compose run backend rspec
```

## Usage

1. View list shared videos
   - When user open website, list all shared videos will show. User can see all shared videos without login.

2. User login & registration:
   - Login form in the header of website, include Email field and Password field
   - If the email does not exist in database, the user will be automatically registered and logged in based on the email and password entered.

3. Share a movie
   - Once logged in, click button "Share a movie" on top-right, website will navigate to share page.
   - Enter Youtube URL to Youtube URL input, then click Share.
   - Backend will check the validity of the URL you just entered. If the URL is not a valid Youtube URL, or Video is not available, an error notification will show.

4. Real-Time Notifications for new video shares:
   - When a user shares a new video, logged-in users will receive real-time notifications.
   - Notifications will appear as pop-ups on the bottom-right within the application
   - The notification will include the video title and the email of the user who shared it.

5. Like/Dislike a Video
   - User can click on Like/Dislike button to reaction with the video

## Deployment

1. Install Docker on your server.
2. Clone repository.
3. In root folder of project, add .env file with content below:
```
  RAILS_ENV=production
  MYSQL_USERNAME=root
  MYSQL_PASSWORD=root@123
  MYSQL_ROOT_PASSWORD=root@123
  MYSQL_HOST=db
  RAILS_LOG_TO_STDOUT=true
  REDIS_HOST=redis
  REDIS_PORT=6379
  REDIS_URL=redis://redis:6379/0
  SECRET_KEY_BASE=**contact_me**
  RAILS_MASTER_KEY=**contact_me**
```

4. Go to frontend folder, add .env file with content below:
```
  REACT_APP_BACKEND_URL=http://<your_server>:3000/api
  REACT_APP_BACKEND_CABLE_URL=ws:<your_server>:3000/cable
```
**Replace <your_server> with your server ip or domain**

5. Run command in root project:
```
  docker volume create shared_volume
```
```
  docker compose -f docker-compose.prod.yml up --build
```

6. After build successfully, run commands:
```
  docker compose -f docker-compose.prod.yml run backend rails db:create
```

```
  docker compose -f docker-compose.prod.yml run backend rails db:migrate
```

## Troubleshooting

**Any issues when run Docker, please double-check the .env file with content listed in Installation & Configuration section and make sure you followed the steps correctly**
