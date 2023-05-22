#!/bin/bash
set -e

if [ -f .env ]; then
    # Load Environment Variables
    export $(cat .env | grep -v '#' | sed 's/\r$//' | awk '/=/ {print $1}' )
fi

# dbUser is the userName used from applicatoin code to interact with databases and dbPwd is the password for this user.
# MONGO_INITDB_ROOT_USERNAME & MONGO_INITDB_ROOT_PWD is the config for db admin.
# admin user is expected to be already created when this script executes. We use it here to authenticate as admin to create
# dbUser and databases.
echo $MONGO_INITDB_ROOT_PWD
echo $MONGO_INITDB_ROOT_USERNAME

if [ "$MONGO_INITDB_ROOT_USERNAME" ] && [ "$MONGO_INITDB_ROOT_PWD" ] && [ "$DB_USER" ] && [ "$DB_PWD" ]  && [ "$DB_NAME" ]; then
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PWD<<EOF
db = db.getSiblingDB("$DB_NAME")
db.createUser({
  user:  '$DB_USER',
  pwd: '$DB_PWD',
  roles: [ 
      {
        role: 'dbOwner',
        db: '$DB_NAME'
      },
      {
        role: 'readWrite',
        db: '$DB_NAME'
      }
  ]
});
EOF
else
    echo "MONGODB_INITDB_ROOT_USERNAME,MONGODB_INITDB_ROOT_PASSWORD,MONGODB_USER and MONGODB_PASSWORD must be provided. Some of these are missing, hence exiting database and user creatioin"
    exit 1
fi
