import expect from 'expect';
import version from '../version';

describe('version', () => {
  it('includes the latest version', () => {
    expect(version).toMatch(/^(\d+\.)?(\d+\.)?(\*|\d+)$/);
  });
});
