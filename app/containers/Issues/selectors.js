import { createSelector } from 'reselect';

/**
 * Direct selector to the issues state domain
 */
const selectIssuesDomain = () => state => state.get('issues');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Issues
 */

const selectIssues = () => createSelector(
  selectIssuesDomain(),
  (substate) => substate.toJS()
);

export default selectIssues;
export {
  selectIssuesDomain,
};
