const BASE_URL = "https://api.github.com/search/users";

const githubService = {
  searchUsers: async (username, location, minRepos) => {
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await fetch(`${BASE_URL}?q=${query.trim()}`);
    if (!response.ok) throw new Error("GitHub API error");
    return response.json();
  },
};

export default githubService;
