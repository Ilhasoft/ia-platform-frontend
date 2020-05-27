import qs from 'query-string';

import utils from './utils';
import request from './request';


export default {

  addGroup(name, repositoryUUID, version) {
    return request.$http.post(
      'v2/repository/entity/group/',
      {
        value: name,
        repository: repositoryUUID,
        repository_version: version,
      },
    );
  },

  deleteGroup(groupUuid) {
    return request.$http.delete(`v2/repository/entity/group/${groupUuid}`);
  },

  search(repositoryUuid, query = {}) {
    const queryString = qs.stringify({
      repository_uuid: repositoryUuid,
      ...query,
    });
    return new utils.List(`/v2/repository/entities?${queryString}`);
  },
};
