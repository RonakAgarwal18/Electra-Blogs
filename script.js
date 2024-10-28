document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector("#submit");

    // Only add the event listener if we're on the upload blog page
    if (submitButton) {
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();

            const title = document.querySelector("#title").value;
            const desc = document.querySelector("#desc").value;

            if (title && desc) {
                const blogPost = { title: title, description: desc };
                const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
                blogs.push(blogPost);
                localStorage.setItem("blogs", JSON.stringify(blogs));

                document.querySelector("#title").value = '';
                document.querySelector("#desc").value = '';
                alert("Blog added successfully!");
            } else {
                alert("Please enter both title and description.");
            }
        });
    }

    // Function to load blogs on the blog page
    const blogsContainer = document.getElementById('blogs-con');
    if (blogsContainer) {
        const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogsContainer.innerHTML = '';

        blogs.forEach(blog => {
            const blogDiv = document.createElement('div');
            blogDiv.classList.add('blog-con');

            const title = document.createElement('h2');
            title.classList.add('blog-title');
            title.textContent = blog.title;

            const description = document.createElement('p');
            description.classList.add('blog-desc');
            description.textContent = blog.description;

            blogDiv.appendChild(title);
            blogDiv.appendChild(description);
            blogsContainer.appendChild(blogDiv);
        });
    }
});
