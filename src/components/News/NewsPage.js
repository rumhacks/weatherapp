import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch news data from the API
    const fetchNewsData = async () => {
      const apiKey = 'ebc14ee4781c4852befc901e23216fb8'; // Replace with your API key
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNewsData(data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setIsLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const handleImageError = (index) => {
    // Handle image loading error by replacing the article's image URL with a fallback image or placeholder
    const updatedNewsData = [...newsData];
    updatedNewsData[index].urlToImage = 'fallback_image_url.jpg'; // Replace with your fallback image URL or use a placeholder
    setNewsData(updatedNewsData);
  };

  return (
    <div style={{ color: 'white', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Home</Link>
      <Link to="/feedback" style={{ color: 'white', textDecoration: 'none' }}>Feedback</Link>
      <h1>Latest News</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {newsData.length > 0 && newsData.map((article, index) => (
            <div key={index} style={{ width: '300px', margin: '10px', padding: '10px', backgroundColor: '#596571', borderRadius: '8px' }}>
              <h2>{article.title}</h2>
              <img
                src={article.urlToImage || 'fallback_image_url.jpg'} // Use fallback image URL if article has no image or image loading fails
                alt={article.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                onError={() => handleImageError(index)} // Call handleImageError function if image loading fails
              />
              <p>{article.description}</p>
              <p>Source: {article.source.name}</p>
              <p>Published at: {article.publishedAt}</p>
              <a style={{ color: '#D6D8DC' }} href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsPage;
