//***********************
//Importing Single Value
//=======================
//====in module file=====
export default function MyFunc() {}

module.exports = function My Func() {}


//=========================
//====in importing file====

import theDefault from './module'
const theDefault = require('./module')

theDefault() //works!


//*************************
//Importing Multiple Values
//=========================
//=====in module file======

let obj = {
  sky: 'blue',
  grass: 'green',
}

// export default obj;

module.exports = obj;

//===========================
//====in importting file===== 

//import World from './module'

const World = require('./module');

World.sky === 'blue' //true!

//import {sky, grass} from './module'

const {sky, grass} = require('./module');

grass === 'green' // true!




//Importing Multiple Values again!
//=========================
//=====in module file======

// export let sky = 'blue'
//export let grass = 'green'

exports.sky = 'blue'
exports.grass = 'green'

//===========================
//====in importting file===== 

//import {* as World} from './module'

const World = require('./module');

World.sky === 'blue' //true!

//import {sky, grass} from './module'

const {sky, grass} = require('./module');

grass === 'green'  //true!










