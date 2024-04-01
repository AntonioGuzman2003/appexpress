From node
RUN git clone -q https://github.com/AntonioGuzman2003/appexpress.git
WORKDIR /aguzmanapp
COPY package*.json ./
RUN npm install > /dev/null
EXPOSE  10900
CMD ["npm","start"]
