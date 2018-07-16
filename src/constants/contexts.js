import * as repoService from '../services/repoService';

const serviceList = {
  getAllRepos: repoService.fetchAllRepos,
  getRepotags: repoService.fetchRepoTags
};

export default {
  services: serviceList
};
