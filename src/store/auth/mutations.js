import window from 'global/window';

import TYPES from '../types';

export default {
  [TYPES.SET_TOKEN](state, token) {
    state.token = token;
    /* istanbul ignore next */
    if (window.localStorage) {
      if (token) {
        window.localStorage.setItem('authToken', token);
      } else {
        window.localStorage.removeItem('authToken');
      }
    }
  },
  [TYPES.SET_ORG](state, org) {
    state.org = org;
  },
  [TYPES.SET_PROJECT](state, project) {
    state.project = project;
  },
};
