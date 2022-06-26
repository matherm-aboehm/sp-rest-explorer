# Find the Dockerfile at the following URL:
# Node 14: https://github.com/Azure/azure-functions-docker/blob/dev/host/4/bullseye/amd64/node/node14/node14-core-tools.Dockerfile
# Node 16: https://github.com/Azure/azure-functions-docker/blob/dev/host/4/bullseye/amd64/node/node16/node16-core-tools.Dockerfile
ARG VARIANT=14
FROM mcr.microsoft.com/azure-functions/node:4-node${VARIANT}-core-tools

RUN groupadd docker
# RUN usermod --append --groups 0 node
RUN usermod -aG docker node
# Add Docker CLI
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common \
    sudo \
   && curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add - \
   && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
   && apt-get update \
   && apt-get -y install --no-install-recommends docker-ce-cli \
   # Clean up
   && apt-get autoremove -y \
   && apt-get clean -y \
   && rm -rf /var/lib/apt/lists/*
   
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

