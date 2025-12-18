/* ======================================================
   Craftomon Pixel Portfolio - JS (collapsible + viewer)
   Updated 2025-12-10: fixed navigation and zoom behavior
   ====================================================== */

console.log("✅ script.js is connected and running!");

// Gallery data (same as before)
const galleryData = {
  characters: [
    { src: "HERO_DAMP-walk_down1.png", alt: "HERO DAMP 1" },
    { src: "HERO_DAMP-walk_down2.png", alt: "HERO DAMP 2" },
    { src: "HERO_GROWTH-walk_down1.png", alt: "HERO GROWTH 1" },
    { src: "HERO_GROWTH-walk_down2.png", alt: "HERO GROWTH 2" },
    { src: "HERO_WARMTH-walk_down1.png", alt: "HERO WARMTH 1" },
    { src: "HERO_WARMTH-walk_down2.png", alt: "HERO WARMTH 2" },
    { src: "HoopaHAND2_-1Hoop_shiny.png", alt: "Hoopa Hand2 shiny -1 ring" },
    { src: "HoopaHAND2_-1Hoop.png", alt: "Hoopa Hand2 -1 ring" },
    { src: "HoopaHAND2_-2Hoops_shiny.png", alt: "Hoopa Hand2 shiny -2 rings" },
    { src: "HoopaHAND2_-2Hoops.png", alt: "Hoopa Hand2 -2 rings" },
    { src: "HoopaHAND2.png", alt: "Hoopa Hand2" },
    { src: "HoopaHAND3_-1Hoop_shiny.png", alt: "Hoopa Hand3 shiny -1 ring" },
    { src: "HoopaHAND3_-1Hoop.png", alt: "Hoopa Hand3 -1 ring" },
    { src: "HoopaHAND3_-2Hoops_shiny.png", alt: "Hoopa Hand3 shiny -2 rings" },
    { src: "HoopaHAND3_-2Hoops.png", alt: "Hoopa Hand3 -2 rings" },
    { src: "HoopaHAND3.png", alt: "Hoopa Hand3" },
    { src: "HoopaHAND4_-1Hoop_shiny.png", alt: "Hoopa Hand4 shiny -1 ring" },
    { src: "HoopaHAND4_-1Hoop.png", alt: "Hoopa Hand4 -1 ring" },
    { src: "HoopaHAND4_-2Hoops_shiny.png", alt: "Hoopa Hand4 shiny -2 rings" },
    { src: "HoopaHAND4_-2Hoops.png", alt: "Hoopa Hand4 -2 rings" },
    { src: "HoopaHAND4.png", alt: "Hoopa Hand4" },
    { src: "HoopaHANDleft.png", alt: "Hoopa Hand left" },
    { src: "HoopaHurt.png", alt: "Hoopa hurt" },
    { src: "Necrozma_The_Roaring_Knight_1.png", alt: "Necrozma 1" },
    { src: "Necrozma_The_Roaring_Knight_2.jpeg", alt: "Necrozma 2" },
    { src: "Ultra_Necrozma_Penumbra_Phantasm_1.png", alt: "Ultra Necrozma 1" },
    { src: "Ultra_Necrozma_Penumbra_Phantasm_2.jpeg", alt: "Ultra Necrozma 2" },
    { src: "Torch_REVAMPED_hurt.png", alt: "Torch hurt" },
    { src: "Torch_REVAMPED_shiny_hurt.png", alt: "Torch shiny hurt" },
    {
      src: "Zamazenta(CROWNED)_middle_frame_shiny.png",
      alt: "Zamazenta Crowned shiny",
    },
    { src: "Zamazenta(CROWNED)_middle_frame.png", alt: "Zamazenta Crowned" },
  ],
  items: [
    /* (items list continued as before) */
    { src: "ACT_symbol.png", alt: "ACT symbol" },
    { src: "CONTINUE_OR_GIVE_UP-left.png", alt: "Continue or Give Up left" },
    {
      src: "CONTINUE_OR_GIVE_UP-middle.png",
      alt: "Continue or Give Up middle",
    },
    { src: "CONTINUE_OR_GIVE_UP-right.png", alt: "Continue or Give Up right" },
    { src: "CONTINUE_OR_GIVE_UP-soul.png", alt: "Continue or Give Up soul" },
    { src: "DiscordProfile.png", alt: "Discord Profile" },
    { src: "FIGHT_symbol.png", alt: "FIGHT symbol" },
    { src: "GAME_OVER_text.png", alt: "Game Over text" },
    { src: "IDIOT.png", alt: "Idiot" },
    { src: "IS_THE_WILL_OF_THE_SOUL.png", alt: "Is the Will of the Soul" },
    {
      src: "Necrozma+The_Roaring_Knight_(profile)1.png",
      alt: "Necrozma profile 1",
    },
    {
      src: "Necrozma+The_Roaring_Knight_(profile)2.jpeg",
      alt: "Necrozma profile 2",
    },
    {
      src: "Necrozma+The_Roaring_Knight_(profile)3.png",
      alt: "Necrozma profile 3",
    },
    {
      src: "Necrozma+The_Roaring_Knight_(profile)4.jpeg",
      alt: "Necrozma profile 4",
    },
    { src: "PFP_TypeSymbol-Steel.png", alt: "PFP Type Symbol Steel" },
    { src: "Rusted_Sword.png", alt: "Rusted Sword" },
    { src: "Rusted_Shield.png", alt: "Rusted Shield" },
    { src: "Star_bullet1.png", alt: "Star bullet 1" },
    { src: "Star_bullet2.png", alt: "Star bullet 2" },
    { src: "THE_ABILITY_TO_PROCEED.png", alt: "THE ABILITY TO PROCEED" },
    { src: "THEN.png", alt: "THEN" },
    { src: "TypeSymbol-Bug.png", alt: "Bug" },
    { src: "TypeSymbol-Dark.png", alt: "Dark" },
    { src: "TypeSymbol-Dragon.png", alt: "Dragon" },
    { src: "TypeSymbol-Electric.png", alt: "Electric" },
    { src: "TypeSymbol-Fairy.png", alt: "Fairy" },
    { src: "TypeSymbol-Fighting.png", alt: "Fighting" },
    { src: "TypeSymbol-Fire.png", alt: "Fire" },
    { src: "TypeSymbol-Flying.png", alt: "Flying" },
    { src: "TypeSymbol-Ghost.png", alt: "Ghost" },
    { src: "TypeSymbol-Grass.png", alt: "Grass" },
    { src: "TypeSymbol-Ground.png", alt: "Ground" },
    { src: "TypeSymbol-Ice.png", alt: "Ice" },
    { src: "TypeSymbol-Normal.png", alt: "Normal" },
    { src: "TypeSymbol-Poison.png", alt: "Poison" },
    { src: "TypeSymbol-Psychic.png", alt: "Psychic" },
    { src: "TypeSymbol-Rock.png", alt: "Rock" },
    { src: "TypeSymbol-Steel.png", alt: "Steel" },
    { src: "TypeSymbol-Water.png", alt: "Water" },
    { src: "TypeSymbolUNKNOWN.png", alt: "UNKNOWN" },
    {
      src: "Ultra_Necrozma+Penumbra_Phantasm_profile.jpeg",
      alt: "Ultra Necrozma profile",
    },
    {
      src: "Ultra_Necrozma+Penumbra_Phantasm_profile.png",
      alt: "Ultra Necrozma profile",
    },
    { src: "YOU_DIED_text.png", alt: "YOU DIED text" },
    { src: "YOU_FLED_THE_BATTLE....png", alt: "YOU FLED THE BATTLE..." },
  ],
  backgrounds: [
    { src: "10th-Background.jpeg", alt: "10th Background" },
    { src: "10th-Background2.0.jpeg", alt: "10th Background 2.0" },
    {
      src: "Deltamon_Battle_Concept-Controls_Screen.jpeg",
      alt: "Deltamon Battle Concept Controls Screen",
    },
    {
      src: "Deltamon_Battle_Concept-Start_Screen.jpeg",
      alt: "Deltamon Battle Concept Start Screen",
    },
    { src: "Type_Chart.jpeg", alt: "Type Chart" },
    { src: "YT_Banner.jpeg", alt: "YouTube Banner" },
  ],
  animations: [
    /*Undertale 10th Anniversary Animations*/
    { src: "10th-Alphys.gif", alt: "10th Alphys animation" },
    { src: "10th-Undyne.gif", alt: "10th Undyne animation" },
    { src: "10th-sans.gif", alt: "10th sans animation" },
    { src: "10th-Papyrus.gif", alt: "10th Papyrus animation" },
    /*Starters Animations*/
    { src: "Bulb.gif", alt: "Bulb animation" },
    { src: "Bulb1.gif", alt: "Bulb1 animation" },
    { src: "Bulb1_shiny.gif", alt: "Bulb1 shiny animation" },
    { src: "Torch.gif", alt: "Torch animation" },
    { src: "Torch_REVAMPED.gif", alt: "Torch REVAMPED animation" },
    { src: "Torch_REVAMPED_shiny.gif", alt: "Torch REVAMPED shiny animation" },
    { src: "Torch_REVAMPED_blink.gif", alt: "Torch REVAMPED blink animation" },
    {
      src: "Torch_REVAMPED_shiny_blink.gif",
      alt: "Torch REVAMPED shiny blink animation",
    },
    { src: "Toto.gif", alt: "Toto animation" },
    { src: "Toto_shiny.gif", alt: "Toto shiny animation" },
    { src: "Toto1.gif", alt: "Toto1 animation" },
    /*Hoopa Animations*/
    { src: "Hoopa.gif", alt: "Hoopa animation" },
    { src: "Hoop_animation_blink.gif", alt: "Hoop animation blink" },
    { src: "HoopaHAND1.gif", alt: "Hoopa Hand1" },
    { src: "HoopaHAND1_-1_Hoop.gif", alt: "Hoopa Hand1 -1 ring" },
    { src: "HoopaHAND1_-1_Hoops_shiny.gif", alt: "Hoopa Hand1 -1 rings shiny" },
    { src: "HoopaHAND1_-2_Hoops.gif", alt: "Hoopa Hand1 -2 rings" },
    { src: "HoopaHAND1_-2_Hoops_shiny.gif", alt: "Hoopa Hand1 -2 rings shiny" },
    { src: "HoopaHAND5.gif", alt: "Hoopa Hand5" },
    { src: "HoopaHAND5_-1_Hoop.gif", alt: "Hoopa Hand5 -1 ring" },
    { src: "HoopaHAND5_-1_Hoop_shiny.gif", alt: "Hoopa Hand5 -1 ring shiny" },
    { src: "HoopaHAND5_-2_Hoops.gif", alt: "Hoopa Hand5 -2 rings" },
    { src: "HoopaHAND5_-2_Hoops_shiny.gif", alt: "Hoopa Hand5 -2 rings shiny" },
    { src: "Hoop_animation_1.gif", alt: "Hoop animation 1" },
    {
      src: "Hoop_animation_2_part1_blue.gif",
      alt: "Hoop animation 2 part 1 blue",
    },
    {
      src: "Hoop_animation_2_part1_red.gif",
      alt: "Hoop animation 2 part 1 red",
    },
    {
      src: "Hoop_animation_2_part2_blue.gif",
      alt: "Hoop animation 2 part 2 blue",
    },
    {
      src: "Hoop_animation_2_part2_red.gif",
      alt: "Hoop animation 2 part 2 red",
    },
    /*Bike Lizards*/
    { src: "Cyclizar.gif", alt: "Cyclizar animation" },
    { src: "Cyclizar_shiny.gif", alt: "Cyclizar shiny animation" },
    { src: "Koraidon.gif", alt: "Koraidon animation" },
    { src: "Koraidon2.gif", alt: "Koraidon animation 2" },
    { src: "Koraidon_shiny.gif", alt: "Koraidon shiny animation" },
    { src: "Koraidon_shiny2.gif", alt: "Koraidon shiny animation 2" },
    { src: "Koraidon_attack.gif", alt: "Koraidon attack animation" },
    { src: "Miraidon.gif", alt: "Miraidon animation" },
    { src: "Miraidon_shiny.gif", alt: "Miraidon shiny animation" },
    { src: "Miraidon_attack.gif", alt: "Miraidon attack animation" },
    /*Zacian and Zamazenta Animations*/
    { src: "Zacian_jump_up_animation.gif", alt: "Zacian jump up animation" },
    {
      src: "Zacian_jump_up_animation_SHINY.gif",
      alt: "Zacian jump up animation SHINY",
    },
    {
      src: "Zacian(CROWNED)_in_air_animation.gif",
      alt: "Zacian Crowned in air animation",
    },
    {
      src: "Zacian(CROWNED)_in_air_animation_SHINY.gif",
      alt: "Zacian Crowned in air animation SHINY",
    },
    {
      src: "Zacian(CROWNED)_in_air_SWORD_animation.gif",
      alt: "Zacian Crowned in air SWORD animation",
    },
    {
      src: "Zacian(CROWNED)_in_air_SWORD_animation_SHINY.gif",
      alt: "Zacian Crowned in air SWORD animation SHINY",
    },
    { src: "Zacian_EYE_indicator.gif", alt: "Zacian EYE indicator animation" },
    {
      src: "Zacian(CROWNED)_spin_animation.gif",
      alt: "Zacian Crowned spin animation",
    },
    {
      src: "Zacian(CROWNED)_spin_animation_shiny.gif",
      alt: "Zacian Crowned spin animation shiny",
    },
    {
      src: "Zacian(CROWNED)_SWORD_slam_animation.gif",
      alt: "Zacian Crowned SWORD slam animation",
    },
    {
      src: "Zacian(CROWNED)_SWORD_slam_animation_shiny.gif",
      alt: "Zacian Crowned SWORD slam animation shiny",
    },
    { src: "Zacian_slash_animation.gif", alt: "Zacian slash animation" },
    {
      src: "Zacian_explosion_effect_animation.gif",
      alt: "Zacian explosion effect animation",
    },
    { src: "Zamazenta_run_animation.gif", alt: "Zamazenta run animation" },
    {
      src: "Zamazenta_run_animation_shiny.gif",
      alt: "Zamazenta run animation shiny",
    },
    {
      src: "Zamazenta(CROWNED)_pre-runleft_animation.gif",
      alt: "Zamazenta Crowned pre-runleft animation",
    },
    {
      src: "Zamazenta(CROWNED)_pre-runleft_animation_shiny.gif",
      alt: "Zamazenta Crowned pre-runleft animation shiny",
    },
    {
      src: "Zamazenta(CROWNED)_runleft_animation.gif",
      alt: "Zamazenta Crowned runleft animation",
    },
    {
      src: "Zamazenta(CROWNED)_runleft_animation_shiny.gif",
      alt: "Zamazenta Crowned runleft animation shiny",
    },
    /*Necrozma Animations*/
    {
      src: "Necrozma_The_Roaring_Knight_(animation)1.gif",
      alt: "Necrozma animation 1",
    },
    {
      src: "Necrozma_The_Roaring_Knight_(animation)2.gif",
      alt: "Necrozma animation 2",
    },
    {
      src: "Necrozma_The_Roaring_Knight_(animation)3.gif",
      alt: "Necrozma animation 3",
    },
    {
      src: "Necrozma_The_Roaring_Knight_(animation)4.gif",
      alt: "Necrozma animation 4",
    },
    {
      src: "Ultra_Necrozma_Penumbra_Phantasm_(animation)1.gif",
      alt: "Ultra Necrozma animation 1",
    },
    {
      src: "Ultra_Necrozma_Penumbra_Phantasm_(animation)2.gif",
      alt: "Ultra Necrozma animation 2",
    },
    {
      src: "Ultra_Necrozma_Penumbra_Phantasm_(animation)3.gif",
      alt: "Ultra Necrozma animation 3",
    },
    {
      src: "Ultra_Necrozma_Penumbra_Phantasm_(animation)4.gif",
      alt: "Ultra Necrozma animation 4",
    },
    /*Misc Animations*/
    {
      src: "Deltamon_Battle_Concept-Options_Screen.gif",
      alt: "Deltamon Battle Concept Options Screen",
    },
    { src: "Gerson_Carracosta.gif", alt: "Gerson Carracosta animation" },
  ],
};

// helper: build gallery DOM
function renderGallery(gallery, category) {
  const container = document.getElementById(`${category}-gallery`);
  if (!container) return;
  container.innerHTML = ""; // clear any previous content
  gallery.forEach((item, i) => {
    const img = document.createElement("img");
    img.className = "gallery-image";
    img.src = `assets/img/${category}/${item.src}`;
    img.alt = item.alt;
    img.dataset.index = i; // store index for navigation (per category)
    container.appendChild(img);
  });
}

/* IMAGE VIEWER */
function setupImageViewer() {
  const overlay = document.getElementById("viewer-overlay");
  const viewerImage = document.getElementById("viewer-image");
  const viewerClose = document.getElementById("viewer-close");
  const zoomInBtn = document.getElementById("zoom-in");
  const zoomOutBtn = document.getElementById("zoom-out");
  const zoomResetBtn = document.getElementById("zoom-reset");
  const zoomLevelDisplay = document.getElementById("zoom-level");
  const prevBtn =
    document.getElementById("viewer-prev") ||
    document.getElementById("viewer-prev");
  const nextBtn =
    document.getElementById("viewer-next") ||
    document.getElementById("viewer-next");
  // new: the arrow IDs in your HTML are viewer-prev/viewer-next or viewer-prev/viewer-next?
  // in the current HTML you used viewer-prev/viewer-next earlier; ensure IDs match.

  let currentZoom = 1;
  const minZoom = 0.5;
  const maxZoom = 4;
  const zoomStep = 0.25;

  // flat list of all current gallery images (live NodeList)
  function getAllGalleryImages() {
    return Array.from(document.querySelectorAll(".gallery-image"));
  }

  function updateZoomDisplay() {
    if (zoomLevelDisplay)
      zoomLevelDisplay.textContent = Math.round(currentZoom * 100) + "%";
    // apply transform scale to image; keep image-rendering pixelated
    viewerImage.style.transform = `scale(${currentZoom})`;
  }

  function openViewerWithIndex(index) {
    const imgs = getAllGalleryImages();
    if (!imgs.length) return;
    // clamp index
    if (index < 0) index = imgs.length - 1;
    if (index >= imgs.length) index = 0;

    const target = imgs[index];
    // set a canonical src (use same source the thumbnail points to)
    viewerImage.src = target.src;
    viewerImage.alt = target.alt || "Zoomed image";
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    currentZoom = 1;
    updateZoomDisplay();
    // store current index on overlay for nav
    overlay.dataset.currentIndex = index;
  }

  function closeViewer() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentZoom = 1;
    updateZoomDisplay();
    // remove src to release memory
    viewerImage.src = "";
    delete overlay.dataset.currentIndex;
  }

  // attach click handlers to thumbnails (delegation-friendly)
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.classList && t.classList.contains("gallery-image")) {
      // find flattened index among all .gallery-image elements
      const imgs = getAllGalleryImages();
      const index = imgs.indexOf(t);
      if (index >= 0) {
        e.preventDefault();
        openViewerWithIndex(index);
      }
    }
  });

  // zoom controls
  if (zoomInBtn)
    zoomInBtn.addEventListener("click", () => {
      if (currentZoom < maxZoom) {
        currentZoom = Math.round((currentZoom + zoomStep) * 100) / 100;
        updateZoomDisplay();
      }
    });
  if (zoomOutBtn)
    zoomOutBtn.addEventListener("click", () => {
      if (currentZoom > minZoom) {
        currentZoom = Math.round((currentZoom - zoomStep) * 100) / 100;
        updateZoomDisplay();
      }
    });
  if (zoomResetBtn)
    zoomResetBtn.addEventListener("click", () => {
      currentZoom = 1;
      updateZoomDisplay();
    });

  // wheel-to-zoom on viewer-container
  const container = document.getElementById("viewer-container");
  if (container) {
    container.addEventListener(
      "wheel",
      (e) => {
        if (!overlay.classList.contains("open")) return;
        e.preventDefault();
        if (e.deltaY < 0 && currentZoom < maxZoom)
          currentZoom = Math.min(maxZoom, currentZoom + zoomStep);
        if (e.deltaY > 0 && currentZoom > minZoom)
          currentZoom = Math.max(minZoom, currentZoom - zoomStep);
        updateZoomDisplay();
      },
      { passive: false }
    );
  }

  // close actions
  if (viewerClose)
    viewerClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeViewer();
    });
  if (overlay)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeViewer();
    });

  // keyboard navigation: esc to close; left/right arrows to navigate
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") {
      closeViewer();
      return;
    }
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "ArrowRight") changeImage(1);
  });

  // next/prev buttons (on-screen arrows)
  const prev =
    document.getElementById("viewer-prev") ||
    document.querySelector(".viewer-arrow-left");
  const next =
    document.getElementById("viewer-next") ||
    document.querySelector(".viewer-arrow-right");
  if (prev)
    prev.addEventListener("click", (e) => {
      e.stopPropagation();
      changeImage(-1);
    });
  if (next)
    next.addEventListener("click", (e) => {
      e.stopPropagation();
      changeImage(1);
    });

  function changeImage(direction) {
    const imgs = getAllGalleryImages();
    if (!imgs.length) return;
    let idx = parseInt(overlay.dataset.currentIndex || "-1", 10);
    if (isNaN(idx) || idx < 0) {
      // if no current index, find one from viewerImage.src
      idx = imgs.findIndex((i) => i.src === viewerImage.src);
    }
    idx += direction;
    if (idx < 0) idx = imgs.length - 1;
    if (idx >= imgs.length) idx = 0;
    openViewerWithIndex(idx);
  }
}

/* COLLAPSIBLES and initialization */
document.addEventListener("DOMContentLoaded", () => {
  // Update year
  const yearSpan = document.querySelector("#year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Render galleries
  renderGallery(galleryData.characters, "characters");
  renderGallery(galleryData.items, "items");
  renderGallery(galleryData.backgrounds, "backgrounds");
  renderGallery(galleryData.animations, "animations");

  // Setup viewer and controls
  setupImageViewer();

  // Collapsible sections
  document.querySelectorAll(".collapsible").forEach((button) => {
    const content = button.nextElementSibling;
    content.style.maxHeight = "0px";
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      content.style.maxHeight = button.classList.contains("active")
        ? content.scrollHeight + "px"
        : "0px";
    });
  });
});
