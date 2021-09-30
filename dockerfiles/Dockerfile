FROM cloudfoundry/cflinuxfs3

# Add erlang pkg
RUN wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb
RUN dpkg -i erlang-solutions_2.0_all.deb

# Install erlang and elixir
RUN apt-get -y update
RUN apt-get -y install esl-erlang elixir

# Add utf-8 locale
RUN locale-gen "en_US.UTF-8"
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en

# https://github.com/vw-sre/dilab-docker-images
