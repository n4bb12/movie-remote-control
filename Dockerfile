FROM nginx:alpine
LABEL maintainer="https://github.com/n4bb12/movie-client"
COPY dist/client /usr/share/nginx/html
