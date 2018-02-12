import {getAvg} from '../src/averageService';

describe("averageService", function () {
    it("Debería devolver la media", function () {
      const media = getAvg([90,90]);
      expect(media).is.not.empty;
      expect(media).to.equal(90);
    });
});