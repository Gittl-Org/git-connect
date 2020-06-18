import {Octokit} from "@octokit/rest";
const octokit = new Octokit();
 
// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.repos
  .listForOrg({
    org: "octokit",
    type: "public",
  })
  .then(({ data }) => {
     // handle data
    //data.forEach(i => {i.name == 'rest.js' && console.log(i)})
  });


octokit.repos.getReadme(
	{owner:"octokit", repo:"rest.js"}
	).then(({data}) => 
    console.log( Buffer.from(data.content, 'base64').toString())
  );
