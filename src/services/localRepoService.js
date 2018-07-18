import _ from 'lodash';

import repoData from '../constants/data';

console.log('Inside local refpo service')

/**
 * Fetch a list of repo name, unique identifier.
 *
 * @returns
 */
async function fetchAllRepos() {
  return repoData.repositories || [];
}

/**
 * Fetch a list of tags for a specific repo.
 *
 * @param {string} repoName
 * @returns
 */
async function fetchRepoTags(repoName) {
  let repoTags = repoData.tags;

  let tag = _.find(repoTags, (t) => {
    return t.name === repoName;
  })

  return tag;
}

/**
 * Fetch manifest of a tag.
 *
 * @param {*} repoName
 * @param {*} tagName
 * @returns
 */
async function fetchTagManifest(repoName, tagName) {
  let repoManifests = repoData.manifests;

  let manifests = _.find(repoManifests, (t) => {
    return (t.name === repoName) && (t.tag === tagName);
  })

  return manifests;
}

export {
  fetchAllRepos,
  fetchRepoTags,
  fetchTagManifest
};
