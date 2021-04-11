
const Info = require('../models/Info');
const User = require('../models/users');
const boulderData = require("./boulderData.json")
const denverData = require("./denverData.json")
const springsData = require("./springsData.json")
const userData = require("./userData.json")



const sequelize = require('../config/connection');
const seedAll = async () => {
  // await info tells it to wait for the function before to finish
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    const seedBoulder = await Info.bulkCreate(boulderData);
    console.log('\n----- BOULDER SEEDED -----\n');
  
    const seedDenver = await Info.bulkCreate(denverData);
    console.log('\n----- DENVER SEEDED -----\n');
  
    const seedSprings = await Info.bulkCreate(springsData);
    console.log('\n----- SPRINGS SEEDED -----\n');

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');
    // const seedUser = await Info.bulkCreate(userData);
    // console.log('\n----- USERS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();