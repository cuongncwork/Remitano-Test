FROM ruby:3.2.2

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV RAILS_ENV='development'
ENV RAKE_ENV='development'

COPY . /usr/src/app
RUN bundle install

CMD ["rails", "s"]

EXPOSE 3000
