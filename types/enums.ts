(() => {
  enum AudioLevel {
    min = 11,
    medium,
    max = 10,
  }

  let currentAudio = AudioLevel.medium;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
