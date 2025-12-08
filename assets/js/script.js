/* ======================================================
   Craftomon Pixel Portfolio - JS (collapsible + viewer)
   ====================================================== */

console.log("✅ script.js is connected and running!");

document.addEventListener("DOMContentLoaded", () => {
  // update year safely
  const yearSpan = document.querySelector("#year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  /* ---------- Collapsible sections ---------- */
  document.querySelectorAll(".collapsible").forEach((button) => {
    const content = button.nextElementSibling;
    // ensure content starts closed
    content.style.maxHeight = "0px";

    button.addEventListener("click", () => {
      button.classList.toggle("active");

      // toggle height for slide animation
      if (button.classList.contains("active")) {
        // set to scrollHeight to allow transition
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });

  /* ---------- Image viewer overlay ---------- */
  const overlay = document.getElementById("viewer-overlay");
  const viewerImage = document.getElementById("viewer-image");
  const viewerClose = document.getElementById("viewer-close");

  // open viewer
  document.querySelectorAll(".gallery-image").forEach((img) => {
    img.addEventListener("click", (e) => {
      // stop any bubbling that might close the overlay
      e.stopPropagation();

      // set large image src
      viewerImage.src = img.src;
      // ensure original rendering (no pixelated discoloration)
      viewerImage.style.imageRendering = "auto";

      // show overlay
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      // prevent body scroll while open
      document.body.style.overflow = "hidden";
    });
  });

  // close handlers
  function closeViewer() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // optionally clear src to free memory (useful for gifs)
    // viewerImage.src = "";
  }

  // click the X button
  if (viewerClose)
    viewerClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeViewer();
    });

  // click outside image (on overlay background)
  if (overlay)
    overlay.addEventListener("click", (e) => {
      // if clicked the overlay (not the image), close
      if (e.target === overlay) closeViewer();
    });

  // ESC key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeViewer();
    }
  });
});

// ================================
// FULLSCREEN IMAGE VIEWER LOGIC
// ================================
document.querySelectorAll(".gallery-image").forEach((img) => {
  img.addEventListener("click", () => {
    const viewer = document.getElementById("viewer-overlay");
    const viewerImg = document.getElementById("viewer-img");

    viewerImg.src = img.src; // keep colors exact
    viewer.classList.add("active");
  });
});

// Close button
document.getElementById("viewer-close").addEventListener("click", () => {
  document.getElementById("viewer-overlay").classList.remove("active");
});

// Close on background click
document.getElementById("viewer-overlay").addEventListener("click", (e) => {
  if (e.target.id === "viewer-overlay") {
    document.getElementById("viewer-overlay").classList.remove("active");
  }
});

// ESC key closes viewer
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("viewer-overlay").classList.remove("active");
  }
});
