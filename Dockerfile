FROM nginx:alpine
LABEL maintainer="https://github.com/n4bb12/movie-remote-control"
COPY dist/mrc-client /usr/share/nginx/html
