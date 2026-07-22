# Get YouTube Subscriber
(AlmaBetter Capstone Project)

This project is a backend application made using Express.js and Node.js. It helps users get subscriber details from YouTube channels.

## Features

- Get subscriber details like Name, ID, subscription date, and subscribed channel.
- Get subscriber names with their channels.
- Get details of a specific subscriber using subscriber ID.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Hasir7/YouTubeSubscriber
```

2. Go to the project folder:

```bash
cd YouTubeSubscriber
```

3. Install all required packages:

```bash
npm install
```

## Usage

### Start the Server

Run this command to start the server:

```bash
npm start
```

The server will run on port `3000`.

You can access the application at:

```bash
http://localhost:3000
```

## API Endpoints

### 1. Get All Subscribers

**Route:** `/subscribers`  
**Method:** `GET`

**Description:**  
This API gives all subscriber details from the database.

Example:

```bash
http://localhost:3000/subscribers
```

---

### 2. Get Subscriber Names

**Route:** `/subscribers/names`  
**Method:** `GET`

**Description:**  
This API gives subscriber names with their YouTube channels.

Example:

```bash
http://localhost:3000/subscribers/names
```

---

### 3. Get Subscriber Details By ID

**Route:** `/subscribers/:id`  
**Method:** `GET`

**Description:**  
This API gives details of one subscriber using their ID.

Example:

```bash
http://localhost:3000/subscribers/:id
```

Replace `:id` with the subscriber ID.

## Project Folder Structure

```
Get-Youtube_subscribers

├─ src
│  ├─ models
│  │  └─ subscribers.js
│  ├─ app.js
│  ├─ createDatabase.js
│  ├─ data.js
│  ├─ index.html
│  └─ youtube.png
│
├─ index.js
├─ package-lock.json
├─ package.json
└─ Readme.md
```

## Dependencies Used

- Express
- Mongoose
- Nodemon
- dotenv

## Deployment

Live link:

https://youtubesubscriber-4lq7.onrender.com

## Acknowledgment

Thanks to the Express.js and Node.js communities for their useful libraries and documentation.


