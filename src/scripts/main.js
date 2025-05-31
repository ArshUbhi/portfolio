document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('hero-video'); // Ensure the video has this ID
    if (video) {
        let isReversing = false;

        // Function to toggle playback direction
        function togglePlaybackDirection() {
            if (!isReversing) {
                video.playbackRate = 1; // Play forward
                video.play();
            } else {
                video.playbackRate = -1; // Play backward
                video.play();
            }
        }

        // Listen for time updates to reverse direction
        video.addEventListener('timeupdate', () => {
            if (!isReversing && video.currentTime >= video.duration - 0.1) {
                isReversing = true; // Switch to reverse
                togglePlaybackDirection();
            } else if (isReversing && video.currentTime <= 0.1) {
                isReversing = false; // Switch to forward
                togglePlaybackDirection();
            }
        });

        // Start the video in forward mode
        video.playbackRate = 1;
        video.play();
    }
});

   const projectTitles = [
      "Paris Olympics 2024 Data Engineering",
      "Payment System Application",
      "British Airways Data Analysis",
      "Runway Inspection & GeoAnalysis",
      "Forged Signature Detection System",
      "Pointer Pursuit",
      "SereneSignal Reminder App",
      "Dynamic Wallpaper Project"
    ];

    const projectImages = [
      "src/assets/images/DE.png",
      "src/assets/images/project2.png",
      "src/assets/images/project3.png",
      "src/assets/images/project4.png",
      "src/assets/images/project5.png",
      "src/assets/images/project6.png",
      "src/assets/images/project7.png",
    ];

    const projectDescriptions = [
      "End-to-end data pipeline using Azure tools to process Olympic datasets for real-time medal performance insights.",
      "A secure Python-based payment application with real-time Stripe integration and receipt tracking.",
      "Analyzed 16K+ reviews using Tableau to uncover sentiment and performance trends across British Airways global routes.",
      "A drone-based laser and GPS system to detect runway hazards and geolocate them with 30cm accuracy.",
      "Built a neural network system to identify forged signatures from scanned documents.",
      "Browser-based pointer-following game built with JS animations and real-time feedback loops.",
      "A soft-focus timer app for visual reminders and Pomodoro-style productivity tracking using Python Tkinter.",
    ];

    const projectLinks = [
      "projects/de.html",
      "projects/payment.html",
      "projects/airways.html",
      "projects/runway.html",
      "projects/signature.html",
      "projects/pointer.html",
      "projects/serene.html",
  ];

    let currentIndex = 0;

    const posterImage = document.getElementById("posterImage");
    const descriptionText = document.getElementById("projectDescription");
    const viewLink = document.getElementById("projectLink");
    const list = document.getElementById("projectList");

    function clampIndex(index) {
      return Math.max(0, Math.min(projectTitles.length - 1, index));
    }

    function renderProjects() {
      list.innerHTML = "";

      for (let i = -2; i <= 2; i++) {
        const index = currentIndex + i;
        if (index < 0 || index >= projectTitles.length) continue;
        const div = document.createElement("div");
        div.className = "project";
        if (i === 0) div.classList.add("focused");
        else if (Math.abs(i) === 1) div.classList.add("mid");
        div.textContent = projectTitles[index];
        list.appendChild(div);
      }

      posterImage.src = projectImages[currentIndex];
      descriptionText.textContent = projectDescriptions[currentIndex];
      viewLink.href = projectLinks[currentIndex];
    }

    function shiftWheel(direction) {
      const newIndex = clampIndex(currentIndex + direction);
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        renderProjects();
      }
    }

    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 20) shiftWheel(1);
      else if (e.deltaY < -20) shiftWheel(-1);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") shiftWheel(1);
      else if (e.key === "ArrowUp") shiftWheel(-1);
    });

    renderProjects();