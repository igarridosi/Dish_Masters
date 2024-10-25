document.addEventListener("DOMContentLoaded", () => {
    const reelForm = document.getElementById("reelForm");
    const reelsContainer = document.getElementById("reelsContainer");
    const uploadModal = new bootstrap.Modal(document.getElementById("uploadModal"));
    
    // Handle form submission
    reelForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const title = document.getElementById("reelTitle").value.trim();
        const description = document.getElementById("reelDescription").value.trim();
        const reelFileInput = document.getElementById("reelFile");
        const file = reelFileInput.files[0];

        if (title && description && file) {
            // Create a URL for the uploaded video
            const videoURL = URL.createObjectURL(file);
            addReel(title, description, videoURL);

            // Clear form inputs and close the modal
            reelForm.reset();
            uploadModal.hide();
        }
    });

    // Function to add a new reel to the container
    function addReel(title, description, videoURL) {
        // Create HTML for a new reel card
        const reelCard = document.createElement("div");
        reelCard.classList.add("col-md-4", "reel-card");

        reelCard.innerHTML = `
            <div class="card shadow-sm d-flex flex-row">
                        <video controls class="card-img-top">
                            <source src="${videoURL}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <div class="d-flex flex-column">
                                <button class="btn btn-outline-danger btn-sm like-btn">
                                    <i class="bi bi-heart"></i> <span class="like-count">0</span>
                                </button>
                                <button class="btn btn-outline-secondary btn-sm comment-btn" data-bs-toggle="modal" data-bs-target="#commentModal">
                                    <i class="bi bi-chat"></i> Comments
                                </button>
                                <button class="btn btn-outline-warning btn-sm save-btn">
                                    <i class="bi bi-bookmark"></i> Save
                                </button>
                                <button class="btn btn-outline-primary btn-sm share-btn">
                                    <i class="bi bi-share"></i> Share
                                </button>
                            </div>
                        </div>
                    </div>
        `;

        // Add the new reel to the container
        reelsContainer.prepend(reelCard);
        attachEventListeners(reelCard);
    }

    function attachEventListeners(reelCard) {
        const likeBtn = reelCard.querySelector(".like-btn");
        const commentBtn = reelCard.querySelector(".comment-btn");
        const saveBtn = reelCard.querySelector(".save-btn");
        const shareBtn = reelCard.querySelector(".share-btn");
        
        likeBtn.addEventListener("click", () => {
            const likeCount = likeBtn.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
            
        });
    
        commentBtn.addEventListener("click", () => {
            // Placeholder functionality for comments
            alert("Open comments section (can be implemented with modal)");
        });
    
        saveBtn.addEventListener("click", () => {
            saveBtn.textContent = "Saved!"
            alert("Reel saved!");
        });
    
        shareBtn.addEventListener("click", () => {
            // Placeholder functionality for sharing
            alert("Share reel link copied to clipboard!");
        });
    }
});