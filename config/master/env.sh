#!/bin/bash

export MONGO_URL="mongodb://localhost:27017/ideas"
export ROOT_URL="http://ideas.gifttracker.net"
export PORT=80
export NODE_ENV="production"
export BASE_PATH="/home/ubuntu/ideas"
export METEOR_SETTINGS="$(cat config/master/settings.json)"