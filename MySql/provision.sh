sudo apt-get update
sudo apt-get upgrade -y

sudo apt-get -y install build-essential

# Database username is root, password is root.
echo "mysql-server-5.6 mysql-server/root_password password root" | sudo debconf-set-selections
echo "mysql-server-5.6 mysql-server/root_password_again password root" | sudo debconf-set-selections
sudo apt-get -y install mysql-server

mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION;"
mysql -u root --password=root -e "create database earthquakes"

cd /vagrant

sudo cp my.cnf /etc/mysql

sudo service mysql restart

#TODO: import db