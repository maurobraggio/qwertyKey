// var supertest = require('supertest');
let chai = require('chai');
let chaiHttp = require('chai-http');
let uuid = require('uuid');
let app = require('../app.js');

chai.use(chaiHttp);

global.app = app;
global.uuid = uuid;
global.expect = chai.expect;
global.request = chai.request(app).keepOpen();
