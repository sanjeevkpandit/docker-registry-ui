import axios from 'axios';

import apiUrls from '../constants/apiUrls';

/**
 * Fetch a list of repo name, unique identifier.
 *
 * @returns
 */
async function fetchAllRepos() {
  let data = null;

  try {
    const response = await axios(apiUrls.FETCH_ALL);

    data = response.data.repositories;
  } catch (error) {
    data = null;
  }

  return data;
}

/**
 * Fetch a list of tags for a specific repo.
 *
 * @param {string} repoName
 * @returns
 */
async function fetchRepoTags(repoName) {
  let data = null;

  try {
    const response = await axios(`${apiUrls.BASE}/${repoName}/tags/list`);

    data = response.data;
  } catch (error) {
    data = null;
  }

  return data;
}

/**
 * Fetch manifest of a tag.
 *
 * @param {*} repoName
 * @param {*} tagName
 * @returns
 */
async function fetchTagManifest(repoName, tagName) {
  let data = null;

  try {
    const response = await axios(`${apiUrls.BASE}/${repoName}/manifests/${tagName}`);

    data = response.data;
  } catch (error) {
    data = null;
  }

  return data;
}

export {
  fetchAllRepos,
  fetchRepoTags,
  fetchTagManifest
};
