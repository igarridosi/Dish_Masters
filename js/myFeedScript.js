document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");
    const heartAnimation = document.querySelector(".heart-animation");
    
    let isLiked = false;

    likeButton.addEventListener("click", () => {
        // Toggle the like state
        isLiked = !isLiked;
        
        // Change the heart icon's color based on the like state
        if (isLiked) {
            likeButton.style.color = "#e25555"; // Liked color
            likeCount.textContent = parseInt(likeCount.textContent) + 1;

            // Show the heart animation
            heartAnimation.style.display = 'block';
            heartAnimation.classList.add('pop-up');
            
            // Hide the heart animation after a short duration
            setTimeout(() => {
                heartAnimation.style.display = 'none';
            }, 600);
        } else {
            likeButton.style.color = "#6c757d"; // Default color
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }
    });
});


//COMMENT BUTTON
    document.addEventListener("DOMContentLoaded", function() {
        const commentButton = document.getElementById("commentButton");
        const replyBox = document.getElementById("replyBox");
        const replyPostButton = document.getElementById("replyPostButton");
        const feedContainer = document.getElementById("feedContainer");
        const replyText = document.getElementById("replyText");
        const commentCount = document.getElementById("commentCount");

        commentCount.addEventListener("click", function(){
            commentCount.style.color = "#e25555";
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        })

        // Toggle the display of the reply box
        commentButton.addEventListener("click", () => {
            if (replyBox.style.display === "none" || replyBox.style.display === "") {
                replyBox.style.display = "block";
                replyText.focus();
            } else {
                replyBox.style.display = "none";
            }
        });

        // Function to create a new post dynamically
        function createNewPost(text) {
            const newPost = document.createElement("div");
            newPost.classList.add("d-flex", "p-3", "border-bottom");

            newPost.innerHTML = `
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
                    height="50" alt="Avatar" loading="lazy" />
                <div class="d-flex w-100 ps-3">
                    <div>
                        <h6 class="text-body fw-bold">
                            New User
                            <span class="small text-muted font-weight-normal">@newuser</span>
                            <span class="small text-muted font-weight-normal"> • </span>
                            <span class="small text-muted font-weight-normal">Just now</span>
                        </h6>
                        <p style="line-height: 1.2;">
                            ${text}
                        </p>
                        <ul class="list-unstyled d-flex justify-content-between mb-0 pe-xl-5 fs-5">
                            <li><i class="bi bi-chat"></i><span class="small ps-2">0</span></li>
                            <li><i class="bi bi-heart"></i><span class="small ps-2">0</span></li>
                            <li><i class="bi bi-share"></i></li>
                        </ul>
                    </div>
                </div>
            `;

            // Add the new post to the feed container
            feedContainer.appendChild(newPost);
        }

        // Handle the reply post action
        replyPostButton.addEventListener("click", () => {
            console.log("POST")
            const text = replyText.value.trim();
            if (text !== "") {
                createNewPost(text);
                replyText.value = ""; // Clear the textarea
                replyBox.style.display = "none"; // Hide the reply box
            } else {
                alert("Please write a reply before posting.");
            }
        });
    });



