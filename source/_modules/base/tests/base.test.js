'use strict';

import Base from '../base';

describe('Base module', function() {

  beforeEach(() => {
    this.base = new Base();
  });

  it('Should run a few assertions', () => {
    expect(this.base).toBeDefined();
  });

});
