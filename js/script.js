// =====================================================
// 1) البيانات: المراحل والمواقف (نفس اللي في النوت بتاعتك)
// =====================================================
const stages = [
  {
    name: "الليلة قبلها",
    scenarios: [
      {
        text: "هتلبس إيه؟",
        choices: [
          { text: "أي حاجة مريحة، اللبس مش مهم", points: -2, reason: "المظهر أول انطباع، واللبس المرتب بيوصّل إنك جاد." },
          { text: "لبس رسمي بسيط ونضيف", points: 2, reason: "ده الأنسب، ومش لازم يكون غالي." },
          { text: "أحلى لبس عندي بألوان صارخة", points: 0, reason: "كويس إنك مهتم، بس الأفضل الهدوء." }
        ]
      },
      {
        text: "هتجهز إيه؟",
        choices: [
          { text: "نسخ من الـ CV وبطاقتي، وأدوّر على معلومات عن الشركة", points: 2, reason: "كده أنت جاهز ومعاك معلومات تتكلم بيها." },
          { text: "الـ CV بس", points: 0, reason: "كويس، بس معرفتك بالشركة هتفرق في إجاباتك." },
          { text: "هشوف الصبح", points: -2, reason: "التأجيل بيزوّد التوتر وممكن تنسى حاجات." }
        ]
      },
      {
        text: "هتنام إمتى؟",
        choices: [
          { text: "أسهر أذاكر الأسئلة لحد الفجر", points: -2, reason: "قلة النوم بتأثر على تركيزك." },
          { text: "أراجع ساعة وأنام بدري", points: 2, reason: "مراجعة خفيفة ونوم كفاية أحسن من الإجهاد." },
          { text: "أنام من غير ما أراجع", points: 0, reason: "النوم حلو، بس مراجعة بسيطة كانت هتساعدك." }
        ]
      }
    ]
  },
  {
    name: "الصبح",
    scenarios: [
      {
        text: "الانترفيو الساعة 9، والمواصلات واقفة في الزحمة. هتوصل متأخر 15 دقيقة. هتعمل إيه؟",
        choices: [
          { text: "أكمل طريقي وأوصل بعد الميعاد من غير ما أبلّغ", points: -2, reason: "التأخير من غير إبلاغ بيدّي انطباع إنك مش مسؤول." },
          { text: "أبعت رسالة قصيرة محترمة أبلّغ فيها بالتأخير", points: 2, reason: "الإبلاغ بدري بيثبت إنك مسؤول ومحترم لوقتهم." },
          { text: "أرجع البيت وأتصل أعتذر", points: 0, reason: "الاعتذار كويس، بس كان الأحسن تحاول تحضر." }
        ]
      },
      {
        text: "وصلت قبل الميعاد بساعة كاملة. هتعمل إيه؟",
        choices: [
          { text: "أدخل فورًا وأقعد في الاستقبال ساعة", points: 0, reason: "حماسك واضح، بس ممكن يضايقهم." },
          { text: "أتمشى وأراجع ورقي وأدخل قبل الميعاد بـ10 دقايق", points: 2, reason: "ده التوقيت المثالي." },
          { text: "أدخل بعد الميعاد بشوية عشان ما أبانش متلهف", points: -2, reason: "التأخير المتعمد بيضيّع عليك الفرصة." }
        ]
      },
      {
        text: "اكتشفت إنك نسيت الـ CV. هتعمل إيه؟",
        choices: [
          { text: "أرجع البيت أجيبه", points: -2, reason: "هتتأخر وتتوتر." },
          { text: "أدوّر على مكان قريب من الشركة وأطبع نسخة", points: 2, reason: "حل سريع بيبيّن إنك بتتصرف." },
          { text: "أدخل من غير نسخة وأقولهم هبعتها إيميل", points: 0, reason: "مقبول، بس نسخة ورق كانت هتبقى أحسن." }
        ]
      }
    ]
  },
  {
    name: "الاستقبال",
    scenarios: [
      {
        text: "الموظفة في الاستقبال بتسألك عن اسمك وميعادك. هترد إزاي؟",
        choices: [
          { text: "أبتسم وأقول اسمي وميعادي بوضوح", points: 2, reason: "الاحترام مع كل الناس جزء من التقييم." },
          { text: "أرد وأنا مركّز في الموبايل", points: -2, reason: "بيدّي انطباع عدم اهتمام." },
          { text: "أرد باختصار من غير ما أبص لها", points: 0, reason: "مقبول، بس الابتسامة كانت هتفرق." }
        ]
      },
      {
        text: "مرشح تاني قاعد جنبك وبيكلمك. هتعمل إيه؟",
        choices: [
          { text: "أتكلم معاه بود وبصوت واطي", points: 2, reason: "بتبيّن إنك اجتماعي ومحترم للمكان." },
          { text: "أتجاهله وأفضل على الموبايل", points: 0, reason: "مفيش مشكلة، بس فوّت فرصة تهدّي بيها توترك." },
          { text: "أتكلم بصوت عالي وأنتقد الشركة", points: -2, reason: "كل اللي حواليك بيسمعك، وده بيتحسب عليك." }
        ]
      },
      {
        text: "موبايلك بيرن وإنت مستني في الاستقبال. هتعمل إيه؟",
        choices: [
          { text: "أسيبه يرن", points: -2, reason: "ده إزعاج للي حواليك." },
          { text: "أعمله صامت قبل ما أدخل", points: 2, reason: "بيوريهم إنك مركّز ومحترم." },
          { text: "أرد وأقول هكلمك بعدين بصوت واطي", points: 0, reason: "الأحسن كان تقفله من الأول." }
        ]
      }
    ]
  },
  {
    name: "المقابلة",
    scenarios: [
      {
        text: "المحاور سألك: معندكش خبرة، ليه نختارك؟",
        choices: [
          { text: "أقول إني بتعلم بسرعة وأذكر مثال أو مشروع عملته", points: 2, reason: "الأمثلة الحقيقية بتقنعهم أكتر من الكلام." },
          { text: "أقول معلش مفيش وأسكت", points: -2, reason: "كده بتفوّت فرصة تثبت نفسك." },
          { text: "أقول إني بتعلم بسرعة من غير أمثلة", points: 0, reason: "الكلام العام مش بيقنع." }
        ]
      },
      {
        text: "المحاور سألك: إيه نقطة ضعفك؟",
        choices: [
          { text: "أقول معنديش نقاط ضعف", points: -2, reason: "مفيش حد من غير نقاط ضعف، والإجابة دي بتبان مش صادقة." },
          { text: "أقول نقطة حقيقية وبشتغل على تحسينها", points: 2, reason: "الصدق مع خطة تحسين هو المطلوب." },
          { text: "أقول إني بشتغل كتير زيادة", points: 0, reason: "إجابة متكررة وبتبان إنك بتتهرّب." }
        ]
      },
      {
        text: "المحاور سألك: عايز مرتب كام؟",
        choices: [
          { text: "أقول رقم كبير من غير تفكير", points: -2, reason: "ممكن يطلع غير واقعي." },
          { text: "أقول رقم مناسب بعد ما أكون بحثت، وأوضح إني مرن", points: 2, reason: "بيبيّن إنك عارف قيمتك وواقعي." },
          { text: "أقول اللي تدوهولي", points: 0, reason: "كده بتخسر فرصة تتفاوض." }
        ]
      }
    ]
  },
  {
    name: "بعدها",
    scenarios: [
      {
        text: "حسيت إنك غلطت في إجابة أثناء المقابلة. هتعمل إيه؟",
        choices: [
          { text: "أكتب ملاحظة عشان أتعلم منها في المرة الجاية", points: 2, reason: "كل انترفيو درس." },
          { text: "أبعت رسالة أعيد فيها الإجابة كاملة", points: 0, reason: "تصحيح بسيط ممكن يفيد، لكن الإطالة لأ." },
          { text: "أفضل أعيدها وأتضايق وأقرر مش هقدّم تاني", points: -2, reason: "غلطة واحدة مش نهاية الطريق." }
        ]
      },
      {
        text: "رجعت البيت بعد المقابلة. هتعمل إيه بخصوص رسالة الشكر؟",
        choices: [
          { text: "أبعت رسالة شكر قصيرة ومحترمة تاني يوم", points: 2, reason: "بتفكّرهم بيك بشكل لطيف." },
          { text: "ما أبعتش حاجة", points: 0, reason: "مقبول، بس فرصة ضاعت." },
          { text: "أبعت 5 رسايل في نفس اليوم", points: -2, reason: "الإلحاح بيضايق." }
        ]
      },
      {
        text: "عدّى أسبوع من غير أي رد. هتعمل إيه؟",
        choices: [
          { text: "أتصل بيهم كل يوم", points: -2, reason: "كده بتبان ضاغط." },
          { text: "أبعت رسالة متابعة مهذبة وأكمّل أقدّم في أماكن تانية", points: 2, reason: "متابعة محترمة مع خطة بديلة." },
          { text: "أستنى من غير أي حركة", points: 0, reason: "الصبر كويس، بس المتابعة المهذبة مفيدة." }
        ]
      }
    ]
  }
];

// نصايح بتظهر في نافذة التوتر
const calmTips = [
  "التوتر طبيعي، ومعناه إنك مهتم بالفرصة.",
  "خد وقتك. ثانيتين تفكير أحسن من إجابة متسرّعة.",
  "ركّز في السؤال اللي قدامك بس، مش في الانترفيو كله.",
  "ابتسم وأرخي كتافك، جسمك لما يهدى عقلك بيهدى.",
  "لو ماعرفتش الإجابة، قول بصراحة وبيّن إزاي هتتعلمها."
];

// =====================================================
// 2) صفحة المحاكاة (بتشتغل بس لو الصفحة فيها choices)
// =====================================================
function initSimulation() {
  const TIME_PER_SCENARIO = 30;       // ثواني لكل موقف

  let currentStage = 0;               // رقم المرحلة (من 0)
  let currentScenario = 0;            // رقم الموقف (من 0)
  let impression = 50;                // مؤشر الانطباع من 0 لـ 100
  let totalPoints = 0;                // مجموع النقاط
  let stagePoints = [0, 0, 0, 0, 0];  // نقاط كل مرحلة
  let timeLeft = TIME_PER_SCENARIO;
  let timerId = null;
  let answered = false;
  let breathId = null;

  // نجيب العناصر من الـ HTML
  const scenarioText = document.getElementById("scenario-text");
  const choicesBox = document.getElementById("choices");
  const reasonBox = document.getElementById("reason");
  const nextBtn = document.getElementById("next-btn");
  const meterFill = document.getElementById("meter-fill");
  const timerBox = document.getElementById("timer");
  const nervousBtn = document.getElementById("nervous-btn");
  const breathing = document.getElementById("breathing");
  const breathText = document.getElementById("breath-text");
  const tipText = document.getElementById("tip-text");
  const closeBreath = document.getElementById("close-breath");

  // ----- شريط المراحل: المرحلة الحالية منوّرة والمنتهية خضراء -----
  function updateStageBar() {
    for (let i = 0; i < stages.length; i++) {
      const span = document.getElementById("stage-" + (i + 1));
      span.classList.remove("active", "done");
      if (i < currentStage) {
        span.classList.add("done");
      } else if (i === currentStage) {
        span.classList.add("active");
      }
    }
  }

  // ----- المؤشر: الحجم واللون -----
  function updateMeter() {
    meterFill.style.width = impression + "%";
    if (impression < 35) {
      meterFill.style.background = "#DC2626";
    } else if (impression < 65) {
      meterFill.style.background = "#F59E0B";
    } else {
      meterFill.style.background = "#16A34A";
    }
  }

  // ----- العدّاد -----
  function showTime() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    timerBox.textContent = "0" + m + ":" + (s < 10 ? "0" + s : s);
  }

  function stopTimer() {
    clearInterval(timerId);
    timerId = null;
  }

  function startTimer() {
    stopTimer();
    showTime();
    timerId = setInterval(function () {
      timeLeft = timeLeft - 1;
      showTime();
      if (timeLeft <= 0) {
        stopTimer();
        timeIsUp();
      }
    }, 1000);
  }

  // ----- عرض الموقف والاختيارات -----
  function showScenario() {
    const scenario = stages[currentStage].scenarios[currentScenario];

    answered = false;
    scenarioText.textContent = scenario.text;
    choicesBox.innerHTML = "";
    reasonBox.classList.add("hidden");
    nextBtn.classList.add("hidden");

    updateStageBar();
    updateMeter();

    scenario.choices.forEach(function (choice) {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = choice.text;
      btn.onclick = function () {
        chooseAnswer(choice, btn);
      };
      choicesBox.appendChild(btn);
    });

    timeLeft = TIME_PER_SCENARIO;
    startTimer();
  }

  // ----- تطبيق النتيجة (نقاط + مؤشر + سبب) -----
  function applyResult(points, reason) {
    answered = true;
    stopTimer();

    const allButtons = choicesBox.querySelectorAll(".choice");
    allButtons.forEach(function (b) {
      b.disabled = true;
    });

    totalPoints = totalPoints + points;
    stagePoints[currentStage] = stagePoints[currentStage] + points;

    impression = impression + points * 5;
    if (impression > 100) impression = 100;
    if (impression < 0) impression = 0;
    updateMeter();

    reasonBox.textContent = reason;
    reasonBox.classList.remove("hidden");

    // آخر موقف في آخر مرحلة؟ الزر يقول شوف النتيجة
    const lastStage = currentStage === stages.length - 1;
    const lastScenario = currentScenario === stages[currentStage].scenarios.length - 1;
    nextBtn.textContent = lastStage && lastScenario ? "شوف النتيجة" : "التالي";
    nextBtn.classList.remove("hidden");
  }

  // ----- لما المستخدم يختار -----
  function chooseAnswer(choice, btn) {
    if (choice.points > 0) {
      btn.classList.add("good");
    } else if (choice.points < 0) {
      btn.classList.add("bad");
    } else {
      btn.classList.add("ok");
    }
    applyResult(choice.points, choice.reason);
  }

  // ----- لما الوقت يخلص من غير اختيار -----
  function timeIsUp() {
    applyResult(-2, "الوقت خلص! في الانترفيو الحقيقي التردد الطويل بيضيع الفرصة، فحاول ترد في وقت مناسب.");
  }

  // ----- زر التالي -----
  nextBtn.onclick = function () {
    currentScenario = currentScenario + 1;

    if (currentScenario >= stages[currentStage].scenarios.length) {
      currentStage = currentStage + 1;
      currentScenario = 0;
    }

    if (currentStage >= stages.length) {
      finishGame();
    } else {
      showScenario();
    }
  };

  // ----- نهاية اللعبة: نحفظ النتيجة ونروح لصفحة النتيجة -----
  function finishGame() {
    const data = {
      total: totalPoints,
      stagePoints: stagePoints
    };
    try {
      localStorage.setItem("interviewResult", JSON.stringify(data));
    } catch (e) {
      console.log("مقدرناش نحفظ النتيجة", e);
    }
    window.location.href = "result.html";
  }

  // ----- زر أنا متوتر -----
  nervousBtn.onclick = function () {
    stopTimer(); // نوقف العدّاد وإنت بتهدى
    breathing.classList.remove("hidden");
    tipText.textContent = calmTips[Math.floor(Math.random() * calmTips.length)];

    const steps = ["شهيق... 4 ثواني", "احبس النفس... 4 ثواني", "زفير... 4 ثواني"];
    let i = 0;
    breathText.textContent = steps[0];
    breathId = setInterval(function () {
      i = (i + 1) % steps.length;
      breathText.textContent = steps[i];
    }, 4000);
  };

  closeBreath.onclick = function () {
    clearInterval(breathId);
    breathing.classList.add("hidden");
    if (!answered) {
      startTimer(); // نكمّل العدّاد من حيث وقف
    }
  };

  // نبدأ
  showScenario();
}

// =====================================================
// 3) صفحة النتيجة (بتشتغل بس لو الصفحة فيها score-percent)
// =====================================================
function initResult() {
  const scoreBox = document.getElementById("score-percent");
  const messageBox = document.getElementById("score-message");
  const list = document.getElementById("stage-results");

  let data = null;
  try {
    data = JSON.parse(localStorage.getItem("interviewResult"));
  } catch (e) {
    data = null;
  }

  if (!data) {
    scoreBox.textContent = "--";
    messageBox.textContent = "لسه مجرّبتش المحاكاة. اضغط جرّب تاني وابدأ التدريب.";
    return;
  }

  // أقصى نقاط: 15 موقف × 2 = 30، وأقل: -30
  const percent = Math.round(((data.total + 30) / 60) * 100);
  scoreBox.textContent = percent + "%";

  if (percent >= 80) {
    messageBox.textContent = "أداء ممتاز! أنت جاهز بشكل كبير للانترفيو.";
  } else if (percent >= 60) {
    messageBox.textContent = "أداء جيد، وراجع الأخطاء عشان تبقى أقوى.";
  } else if (percent >= 40) {
    messageBox.textContent = "محتاج تتدرب أكتر، وجرّب المحاكاة تاني.";
  } else {
    messageBox.textContent = "ماتقلقش، دي بداية. اقرأ صفحة النصايح وجرّب تاني.";
  }

  // نتيجة كل مرحلة (كل مرحلة من -6 لـ 6)
  for (let i = 0; i < stages.length; i++) {
    const p = Math.round(((data.stagePoints[i] + 6) / 12) * 100);
    const li = document.createElement("li");
    li.textContent = stages[i].name + ": " + p + "%";
    list.appendChild(li);
  }
}

// =====================================================
// 4) نشغّل الجزء المناسب حسب الصفحة
// =====================================================
if (document.getElementById("choices")) {
  initSimulation();
}
if (document.getElementById("score-percent")) {
  initResult();
}