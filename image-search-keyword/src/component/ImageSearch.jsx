import React, { useState } from 'react';
import './ImageSearch.css';

function ImageSearch() {
    const [keyword, setKeyword] = useState('');
    const [page, setPage] = useState(1);
    const api_key = 'vGfTS3CHrbeAlhnuTe2C3be6MxKAQ-od42twovTduzw';
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    
    async function searchImage() {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api_key}&per_page=12`;

        const response = await fetch(url);
        const data = await response.json();

        if (page === 1) {
            setResults([]);
        }

        setResults(prevResults => [...prevResults, ...data.results]);
        setShowResults(true); // Moved outside the if condition
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPage(1);
        setResults([]);
        searchImage();
    }

    function handleShowMore() {
        setPage(page + 1);
        searchImage();
    }

    function handleInputClick() {
        setShowResults(false);
        setResults([]);
    }

    return (
        <div>
            <h1>Image Search Engine</h1>
            <form onSubmit={handleSubmit} id="search-form">
                <input
                    type="text"
                    name="query"
                    placeholder="Search for an image......."
                    id="search-box"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onClick={handleInputClick}
                    autoComplete="off" // Changed to camelCase autoComplete
                />
                <input type="submit" value="Search" />
            </form>
            {showResults && (
                <div className="search-result">
                    {results.map((result, index) => (
                        <a key={index} href={result.links.html} target="_blank" rel="noreferrer">
                            <img src={result.urls.regular} alt="" />
                        </a>
                    ))}
                </div>
            )}
            {showResults && <button className="show-more-btn" onClick={handleShowMore}>Show More</button>}
        </div>
    );
}

export default ImageSearch;
