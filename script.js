// script.js

// Preloader functionality
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style.position = 'fixed';
    preloader.style.top = '0';
    preloader.style.left = '0';
    preloader.style.width = '100%';
    preloader.style.height = '100%';
    preloader.style.backgroundColor = '#fff';
    preloader.style.zIndex = '9999';
    preloader.innerHTML = '<h1>Loading...</h1>';
    document.body.appendChild(preloader);

    window.onload = function() {
        preloader.style.display = 'none';
    };
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content loading for featured blogs
const featuredBlogs = [
    { title: "AI in Healthcare", content: "Exploring the impact of AI on healthcare." },
    { title: "AI and the Future of Work", content: "How AI is reshaping the workplace." },
    { title: "Ethics in AI", content: "Discussing the ethical implications of AI." }
];

const blogPostsContainer = document.querySelector('.blog-posts');
featuredBlogs.forEach(blog => {
    const post = document.createElement('div');
    post.className = 'blog-post';
    post.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
    blogPostsContainer.appendChild(post);
});

// Dynamic content loading for popular AI tools
const popularAITools = [
    { name: "Tool A", description: "Description of Tool A." },
    { name: "Tool B", description: "Description of Tool B." },
    { name: "Tool C", description: "Description of Tool C." }
];

const toolCardsContainer = document.querySelector('.tool-cards');
popularAITools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `<h4>${tool.name}</h4><p>${tool.description}</p>`;
    toolCardsContainer.appendChild(card);
});

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
