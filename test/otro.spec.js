import {getAvg} from '../src/averageService';
import {expect} from 'chai'
// import {webpackPlugin} from '../../src/karma-webpack'
describe("averageService", function () {

    it("Debería devolver la media", function () {
      const media = getAvg([90,90]);
      expect(media).to.equal(90);
    });

    // var Plugin = new webpackPlugin[1]({}, {}, {}, '', [], [], true, [], emitterMock)

    // Plugin.addFile('test.js')
    // Plugin.make(compilationMock, function(err) {
    //   assert.equal(err.message, 'test error')
    //   done()
    // })
});