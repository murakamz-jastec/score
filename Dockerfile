FROM node:18.19.0

ARG UID=1000
ARG GID=1000
ENV PROJECT_ROOTDIR /app

WORKDIR $PROJECT_ROOTDIR

COPY . $PROJECT_ROOTDIR/

RUN useradd -u $UID -o -m -s /bin/bash dev
RUN groupmod -g $GID -o dev

RUN mkdir -p $PROJECT_ROOTDIR/node_modules
RUN chown $UID:$GID $PROJECT_ROOTDIR/node_modules

CMD npm run dev
