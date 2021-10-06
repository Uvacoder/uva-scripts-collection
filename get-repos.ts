import { NowRequest, NowResponse } from "@now/node";
import { Repositories } from "@saber2pr/types-github-api";
import fetch from "isomorphic-fetch";

type saneRepo = {
  name: string;
  description: string;
  homepage: string;
  repoLink: string;
  stars: number;
};

const getRepos = async (user?: string): Promise<Repositories> => {
  const resp = await fetch(`https://api.github.com/users/${user}/repos`);

  return resp.json();
};

export default async (req: NowRequest, res: NowResponse) => {
  if (Array.isArray(req.query.username)) {
    res.json({
      status: 400
    });
    return;
  }
  const data = await getRepos(req.query.username);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  const sanitizedData: saneRepo[] = data
    .filter(({ fork }) => !fork)
    .map(({ name, description, homepage, html_url, stargazers_count }) => ({
      name,
      description,
      homepage,
      repoLink: html_url,
      stars: stargazers_count
    }))
    .sort((p1, p2) => p2.stars - p1.stars);

  res.json(sanitizedData);
};
