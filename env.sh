#!/bin/sh
echo "window.process={}"> ./env-config.js


echo "window.process.env  = {" >> ./env-config.js
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' ./.env >> ./env-config.js



echo "}" >> ./env-config.js


sed -i 's/"true"/true/' ./env-config.js
sed -i 's/"false"/false/' ./env-config.js
