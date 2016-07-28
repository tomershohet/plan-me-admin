import expect from 'expect';
import issuesReducer from '../reducer';
import { fromJS } from 'immutable';

describe('issuesReducer', () => {
  it('returns the initial state', () => {
    expect(issuesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
