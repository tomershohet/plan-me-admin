import expect from 'expect';
import projectPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('projectPageReducer', () => {
  it('returns the initial state', () => {
    expect(projectPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
