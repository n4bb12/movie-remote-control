FROM nginx:alpine
LABEL maintainer="https://github.com/n4bb12/movie-remote-control"
COPY dist/movie-remote-control /usr/share/nginx/html
