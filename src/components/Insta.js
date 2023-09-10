import React, { useEffect, useState } from 'react';

const Insta = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(


`https://graph.instagram.com/v12.0/me?fields=followers_count,follows_count,media_count&access_token=IGQWRNOUZALRjNtU2JGWGhwRXV3ekxZAU0l2MkVlRmNEdzRBQ28xa0JLVFlkd2JFbEczME03WjFJVkhRRHhFNlZAGTVJJb1hodHNabXduMzV6UlhpbTd3dWN6cFdJWld1SWVlR1RENjBxNGQ1aS1CU0o0Wk1Xa1l4ZAWMZD`,
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setLoading(false);
        } else {
          setError('Failed to fetch Instagram data');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
        setError('Error fetching Instagram data');
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Instagram Data for {username}</h1>
      <div>
        <p>Followers: {userData.followers_count}</p>
        <p>Following: {userData.follows_count}</p>
        <p>Media Count: {userData.media_count}</p>
      </div>
    </div>
  );
};

export default Insta;
