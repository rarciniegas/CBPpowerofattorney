// Add your JavaScript code here if needed in the future.

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        // Hide all contents
        const allContents = document.querySelectorAll('.content');
        allContents.forEach((el) => el.style.display = "none");
        // Show the selected content
        content.style.display = "block";
    }
}
