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
    cacheTime: 1000 * 60 * 5,  
    refetchOnWindowFocus: false, 
    keepPreviousData: true,    
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts List</h2>

      {/* Refetch button */}
      <button onClick={() => refetch()}>Refetch Posts</button>

      {/* Show fetching status */}
      {isFetching && <p>Updating data...</p>}

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
