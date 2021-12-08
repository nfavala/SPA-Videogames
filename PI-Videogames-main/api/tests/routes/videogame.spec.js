/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'This is a test videogame'
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should responds 200', () =>{
    agent.get('/videogames').expect( function (res) {
      expect(res.status).equal(200);
    });
  });
 });

 describe('GET /genre', () => {
   it('should respond 200 in genre route', () => {
     agent.get('/genre').expect( function(res) {
       expect(res.status).equal(200);
     })
   })
 })
});

