let chai = require('chai');
let chaiHttp = require('chai-http');
let { server } = require('./server/index');
let should = chai.should();
chai.use(chaiHttp);

//testing to see that all the initial 5 brands are returned when ran
describe('/GET movies', () => {
    it('it should GET all the movies', done => {
        chai
            .request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
});