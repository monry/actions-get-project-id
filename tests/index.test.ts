import {describe, expect, test, beforeEach} from "@jest/globals";
import getProjectId from "../src/index.js";
import {Octokit} from "@octokit/rest";
import dotenv from "dotenv";

let octokit: Octokit;

beforeEach(() => {
  dotenv.config();
  octokit = new Octokit({auth: process.env.PERSONAL_ACCESS_TOKEN})
});

describe('get project id', () => {
  test('Ok', async () => {
    await expect(await getProjectId(octokit, {projectOwner: 'monry', projectNumber: 3}))
      .toBe('PVT_kwHOAAzNIc4AFSrF');
  });
  test('Project not found', async () => {
    await expect(() => getProjectId(octokit, {projectOwner: 'monry', projectNumber: -1}))
      .rejects
      .toThrowError('Project does not found');
  });
  test('User or Organization not found', async () => {
    await expect(() => getProjectId(octokit, {projectOwner: 'monry/', projectNumber: 1}))
      .rejects
      .toThrowError('\'monry/\' does not seems to be a User or a Organization.');
  });
});