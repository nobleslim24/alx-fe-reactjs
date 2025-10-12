import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  };

  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000, 
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts List</h2>

      {/* Refetch button */}
      <button onClick={() => refetch()}>Refetch Posts</button>

      {/* Show if fetching new data or serving from cache */}
      {isFetching && <p>Updating data...</p>}

      {/* Display only first 10 posts */}
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
