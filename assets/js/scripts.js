// scripts.js

// Replace with your Contentful Space ID and API Key
const spaceId = 'fw4nubyqyho0';
const accessToken = 'bREhGyIrCi1kb5ONdlNbml2BszQFPrRZ84F9WbkRllc';
const endpoint = "https://cdn.contentful.com/spaces/fw4nubyqyho0/entries?access_token=bREhGyIrCi1kb5ONdlNbml2BszQFPrRZ84F9WbkRllc" // Fetch blog posts

// Fetch blog posts from Contentful
async function fetchBlogPosts() {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        displayBlogPosts(data.items);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Display the fetched blog posts
function displayBlogPosts(posts) {
    const blogPostsSection = document.getElementById('blog-posts');
    blogPostsSection.innerHTML = ''; // Clear the section

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'blog-post';

        const title = post.fields.title || 'Untitled';
        const body = post.fields.body || 'No content available';

        postElement.innerHTML = `
            <h2>${title}</h2>
            <p>${body}</p>
        `;

        blogPostsSection.appendChild(postElement);
    });
}

// Run the fetchBlogPosts function when the page loads
document.addEventListener('DOMContentLoaded', fetchBlogPosts);
