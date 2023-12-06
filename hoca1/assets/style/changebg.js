var bg = [
    './assets/images/bg1.png',
    './assets/images/bg2.jpg',
  ];
  let currentBgIndex = 0;
  
  function changeBackground(index) {
    currentBgIndex = index;
    console.log('Changing background to index:', index);
    document.getElementById('backgroundImage').src = bg[currentBgIndex];
  }
  
  function toggleSettings() {
    const backgroundOptions = document.getElementById('backgroundOptions');
    const displayStyle = getComputedStyle(backgroundOptions).display;
    console.log('Toggle settings. Current display style:', displayStyle);
  
    if (displayStyle === 'none') {
        backgroundOptions.style.display = 'block';
        backgroundOptions.addEventListener('mouseleave', closeMenuOnMouseLeave);
    } else {
        backgroundOptions.style.display = 'none';
    }
  }
  
  function closeMenuOnMouseLeave(event) {
    const backgroundOptions = document.getElementById('backgroundOptions');
    const isMouseInsideMenu = event.relatedTarget && backgroundOptions.contains(event.relatedTarget);
  
    if (!isMouseInsideMenu) {
        backgroundOptions.style.display = 'none';
        backgroundOptions.removeEventListener('mouseleave', closeMenuOnMouseLeave);
    }
  }
  
  function toggleMusic() {
    var musicOptions = document.getElementById("musicOptions");
    var displayStyle = getComputedStyle(musicOptions).display;
    console.log('Toggle music options. Current display style:', displayStyle);
  
    if (displayStyle === "none") {
        musicOptions.style.display = "block";
        musicOptions.addEventListener('mouseleave', closeMusicOptionsOnMouseLeave);
    } else {
        musicOptions.style.display = "none";
    }
  }
  
  function closeMusicOptionsOnMouseLeave(event) {
    var musicOptions = document.getElementById("musicOptions");
    const isMouseInsideMenu = event.relatedTarget && musicOptions.contains(event.relatedTarget);
  
    if (!isMouseInsideMenu) {
        musicOptions.style.display = "none";
        musicOptions.removeEventListener('mouseleave', closeMusicOptionsOnMouseLeave);
    }
  }
  
  function playMusic(source) {
    var audioSource = document.getElementById("audioSource");
    audioSource.src = source;
    var audio = document.getElementById("audio");
    audio.load();
    audio.play();
  }