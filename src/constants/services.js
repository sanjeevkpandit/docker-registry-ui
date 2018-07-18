import * as repoService from '../services/repoService';
import * as localRepoService from '../services/localRepoService';

let serviceList = {};

if ((typeof process.env.REACT_APP_LOCAL !== 'undefined') && !process.env.REACT_APP_LOCAL){
  serviceList = {
    getAllRepos: repoService.fetchAllRepos,
    getRepoTags: repoService.fetchRepoTags,
    getTagManifest: repoService.fetchTagManifest
  };
} else {
  serviceList = {
    getAllRepos: localRepoService.fetchAllRepos,
    getRepoTags: localRepoService.fetchRepoTags,
    getTagManifest: localRepoService.fetchTagManifest
  };
}

export default serviceList;
