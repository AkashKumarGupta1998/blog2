document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing page
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you! Your message has been sent.");
        document.getElementById("contactForm").reset();
    }
});
document.getElementById('new-post-btn').addEventListener('click', function() {
    document.getElementById('blog-form').style.display = 'block';
});

// Set your own password
const correctPassword = "Akash@123";  // Change this to your own password

document.getElementById('login-btn').addEventListener('click', function() {
    let enteredPassword = document.getElementById('password').value;
    
    if (enteredPassword === correctPassword) {
        document.getElementById('login-form').style.display = 'none';  // Hide login form
        document.getElementById('blog-form').style.display = 'block';  // Show blog writing section
    } else {
        alert("Incorrect password! Access denied.");
    }
});

document.getElementById('publish-btn').addEventListener('click', function() {
    let title = document.getElementById('blog-title').value;
    let content = document.getElementById('blog-content').value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both a title and content!");
        return;
    }

    let blogPosts = document.getElementById('blog-posts');
    let newPost = document.createElement('div');
    newPost.classList.add('blog-post');
    newPost.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    
    blogPosts.prepend(newPost); // Adds the new blog post at the top

    // Clear input fields
    document.getElementById('blog-title').value = "";
    document.getElementById('blog-content').value = "";
});
