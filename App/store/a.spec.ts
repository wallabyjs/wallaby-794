import * as Dummy from './Dummy';
import { expect } from 'chai';

describe('the dummy reducer', () => {

  it('should load junk',  () => {
    const initialState: Dummy.DummyState = {
      junk: null
    };
    const action = {
      type: 'LOAD',
      junk: 'junk'
    };
    var newState = Dummy.reducer(initialState, action);

    expect(newState.junk).to.equal('junka');
  });
});