db = db.getSiblingDB('uloe');

db.createUser(
  {
    user: "uloe_user",
    pwd: "ILoveTheList",
    roles: [
      {
        role: "readWrite",
        db: "uloe"
      }
    ]
  }
);

db.createCollection('ultimate_list');

db.ultimate_list.insertMany([
  {
    name: 'Cucumber'
  },
  {
    name: 'Tomato'
  },
  {
    name: 'Broccoli'
  },
  {
    name: 'Watermelon'
  },
  {
    name: 'Acorn Squash'
  },
  {
    name: 'Canteloupe'
  },
  {
    name: 'Bell Pepper'
  },
  {
    name: 'Serrano pepper'
  },
  {
    name: 'Jalapeno Pepper'
  },
  {
    name: 'Strawberry'
  },
  {
    name: 'Okra'
  },
  {
    name: 'Raspberry'
  },
  {
    name: 'Blueberry'
  },
  {
    name: 'Kiwi'
  }
]);
