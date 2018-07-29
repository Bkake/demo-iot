FROM mhart/alpine-node:6.11.0
ENV LAST_UPDATED 20170624T180000

# Copie des dependences du serveur
COPY package.json /tmp/package.json

# Installation des dependences
RUN cd /tmp && npm install

# Copie dependences des librairies
RUN mkdir /app && cp -a /tmp/node_modules /app/

# Copie des fichiers dans app
COPY . /app/

# Utilisation  /app comme repertoire de travail 
WORKDIR /app

# Exposition du port http 
EXPOSE 1337

# Exécution de l'application
CMD ["npm", "start"]