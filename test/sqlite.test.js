'use strict';

const mock = require('egg-mock');

describe('test/sqlite.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sqlite-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sqlite')
      .expect(200);
  });
});
