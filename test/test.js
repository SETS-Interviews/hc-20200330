let chai = require('chai');
let chaiHttp = require('chai-http');
let { server } = require('../server');
chai.use(chaiHttp);
var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
let should = chai.should();



//testing search bar route
describe('/GET movie ', () => {
    it('it should GET cast and crew', done => {
        chai
            .request(server)
            .get('/movie?search=Shawshank+Redemption')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
    it('should not get cast and crew when search is empty', done => {
        chai
            .request(server)
            .get('/movie')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
    it('should not get cast and crew when movie can not be found', done => {
        chai
            .request(server)
            .get('/movie?search=sdjhflkjashglkaslkg')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});

//testing search bar route
describe('/GET person ', () => {
    it('it should GET nmovies of actor or director', done => {
        chai
            .request(server)
            .get('/person?search=Tom+Hanks')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
    it('should not get acto or director movies when search is empty', done => {
        chai
            .request(server)
            .get('/person')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});


