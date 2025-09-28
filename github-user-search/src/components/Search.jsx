import { useState } from "react";
import githubService from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
  const data = await githubService.searchUsers(username, location, minRepos);
  setResults(data.items || []);
} catch (err) {
  console.error(err); 
  setError("Failed to fetch users. Try again.");
}



    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Advanced GitHub User Search</h2>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="grid gap-4 sm:grid-cols-3 bg-gray-100 p-4 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <button
          type="submit"
          className="sm:col-span-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-3">{error}</p>}

      {/* Results Section */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </p>
                {/* Location and repos will be added when extending API response */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
