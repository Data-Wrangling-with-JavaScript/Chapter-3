sudo apt-get update
sudo apt-get upgrade -y

sudo apt-get -y install build-essential

echo "============== Nodejs =================="
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y --force-yes nodejs

echo "============== Mongodb =================="
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y --force-yes mongodb-org
sudo sed -i 's/bindIp: 127.0.0.1/#bindIp: 127.0.0.1/g' /etc/mongod.conf # Open network interface.
sudo service mongod restart

echo "============== Import example data =================="
cd /vagrant
npm install --no-bin-links
node db-init.js