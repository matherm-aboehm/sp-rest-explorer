#!/usr/bin/env bash

sudo chmod 660 /var/run/docker.sock
sudo chgrp docker /var/run/docker.sock
sudo chown -R node:node /workspaces
