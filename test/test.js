let chai = require('chai');
var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
let should = chai.should();
var assert = require('assert');
var {searchForMovie, searchForPerson} = required('../src/routes')


//testing route searchForMovie
describe('Movie Command', () => {
    it('it should GET the movies results when user enters valid movie name', done => {
        searchForMovie('Shawshank+Redemption')
        expect( console.log.calledOnce ).to.be.true;
        expect( console.log.calledWith('Cast') ).to.be.true;
    });
});
    