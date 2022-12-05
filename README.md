# fastnumbers (formally known as "guess the number")

[Demo](https://fastnumbers.codeanish.com)

Fast Numbers is a game for people who want to improve their mental arithemtic speed, where the ultimate goal is to answer as many questions correctly as possible in a given amount of time. This was put together to help my son Rahul work on eliminating mistakes from his arithmetic at School and has proven to be a fun learning tool.

## How to play

1. Choose which operations you want to test yourself with (Add, Subtract, Multiply or Divide). To make it harder, you can choose multiple options here.
2. Choose the amount of time you want to play for (15, 30, 60 or 120 seconds)
3. Click Start
4. Choose the correct answer to the question in front of you and repeat.

## Setup

From within the directory, type:

> npm install

To run locally, type:

> npm run dev

To prepare a release for deployment, type:

> npm run build

## Gitlab & Hosting

CI/CD is being handled by GitLab. The app is built by the CI/CD process and then deployed to S3. The deployed version of this project then uses a Cloudfront distribution to share the website from S3. Route 53 is running DNS and I've currently got this game hosted as a subdomain of codeanish.com.