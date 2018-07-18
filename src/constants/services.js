import * as repoService from '../services/repoService';

const serviceList = {
  getAllRepos: repoService.fetchAllRepos,
  getRepoTags: repoService.fetchRepoTags,
  getTagManifest: repoService.fetchTagManifest
};

export default serviceList;
