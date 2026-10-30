// بيشغّل أي فيديو متحرك في الصفحة (أي عنصر class="intro" وعليه data-durations)
(function () {
  var videos = document.querySelectorAll(".intro[data-durations]");

  videos.forEach(function (intro) {
    var durations = intro.getAttribute("data-durations").split(",").map(Number);
    var scenes = intro.querySelectorAll(".scene");
    var playBtn = intro.querySelector(".play-btn");
    var bar = intro.querySelector(".intro-progress div");
    var audio = intro.querySelector("audio");
    var timers = [];

    function showScene(i) {
      scenes.forEach(function (s, j) {
        s.classList.toggle("show", j === i);
      });
    }

    function clearTimers() {
      timers.forEach(function (t) { clearTimeout(t); });
      timers = [];
    }

    function play() {
      clearTimers();
      intro.classList.add("playing");
      intro.classList.remove("ended");

      // الصوت (لو الملف مش موجود مفيش مشكلة)
      if (audio) {
        audio.currentTime = 0;
        var p = audio.play();
        if (p) { p.catch(function () {}); }
      }

      // المشاهد واحد ورا التاني
      var total = 0;
      durations.forEach(function (d, i) {
        timers.push(setTimeout(function () { showScene(i); }, total));
        total = total + d;
      });

      // شريط التقدم
      bar.style.transition = "none";
      bar.style.width = "0%";
      void bar.offsetWidth;
      bar.style.transition = "width " + total + "ms linear";
      bar.style.width = "100%";

      // النهاية
      timers.push(setTimeout(function () {
        intro.classList.remove("playing");
        intro.classList.add("ended");
        playBtn.textContent = "↻ شغّل تاني";
        if (audio) { audio.pause(); }
      }, total));
    }

    showScene(0);
    playBtn.addEventListener("click", play);
  });
})();
