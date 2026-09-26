"use strict";

const exerciseData = {
  1: [
    { id: "p1q1", prompt: "giocare → ______", answer: "giocato", explanation: "-are 的规则过去分词以 -ato 结尾。" },
    { id: "p1q2", prompt: "studiare → ______", answer: "studiato", explanation: "-are 的规则过去分词以 -ato 结尾。" },
    { id: "p1q3", prompt: "finire → ______", answer: "finito", explanation: "-ire 的规则过去分词以 -ito 结尾。" },
    { id: "p1q4", prompt: "dormire → ______", answer: "dormito", explanation: "-ire 的规则过去分词以 -ito 结尾。" },
    { id: "p1q5", prompt: "fare → ______", answer: "fatto", explanation: "fare 的过去分词是不规则形式 fatto。" },
    { id: "p1q6", prompt: "vedere → ______", answer: "visto", explanation: "vedere 的过去分词是不规则形式 visto。" },
    { id: "p1q7", prompt: "prendere → ______", answer: "preso", explanation: "prendere 的过去分词是不规则形式 preso。" },
    { id: "p1q8", prompt: "venire → ______", answer: "venuto", explanation: "venire 的过去分词是 venuto。" },
  ],
  2: [
    { id: "p2q1", prompt: "Maria ______ al supermercato. (andare)", answer: "B", answerText: "è andata", explanation: "andare 使用 essere；Maria 是阴性单数，所以是 è andata。", wrong: { A: "助动词错误：andare 使用 essere。", C: "助动词错误：andare 使用 essere。" } },
    { id: "p2q2", prompt: "Noi ______ la pasta. (mangiare)", answer: "B", answerText: "abbiamo mangiato", explanation: "mangiare 在这里使用 avere，过去分词保持 mangiato。", wrong: { A: "助动词错误：mangiare 在这里使用 avere。", C: "participio passato 错误：使用 avere 时这里应是 mangiato。" } },
    { id: "p2q3", prompt: "Luca e Marco ______ a casa tardi. (tornare)", answer: "B", answerText: "sono tornati", explanation: "tornare 使用 essere；两位男性是阳性复数，所以是 tornati。", wrong: { A: "助动词错误：tornare 使用 essere。", C: "essere 后性数配合错误：Luca e Marco 是阳性复数，应使用 -i。" } },
    { id: "p2q4", prompt: "Giulia ______ con le sue amiche. (uscire)", answer: "B", answerText: "è uscita", explanation: "uscire 使用 essere；Giulia 是阴性单数，所以是 uscita。", wrong: { A: "助动词错误：uscire 使用 essere。", C: "essere 后性数配合错误：Giulia 是阴性单数，应使用 -a。" } },
    { id: "p2q5", prompt: "Io ______ molto ieri sera. (studiare)", answer: "A", answerText: "ho studiato", explanation: "studiare 使用 avere，过去分词保持 studiato。", wrong: { B: "助动词错误：studiare 使用 avere。", C: "participio passato 错误：使用 avere 时这里应是 studiato。" } },
    { id: "p2q6", prompt: "Anna e Sara ______ a Roma. (andare)", answer: "C", answerText: "sono andate", explanation: "andare 使用 essere；Anna e Sara 是阴性复数，所以是 andate。", wrong: { A: "助动词错误：andare 使用 essere。", B: "essere 后性数配合错误：Anna e Sara 是阴性复数，应使用 -e。" } },
  ],
  3: [
    { id: "p3q1", prompt: "Ieri io (avere + fare) ______ colazione alle 8.", answer: "ho fatto", explanation: "fare 使用 avere，过去分词是不规则形式 fatto。" },
    { id: "p3q2", prompt: "Anna (essere + andare) ______ al supermercato.", answer: "è andata", explanation: "andare 使用 essere；Anna 是阴性单数，所以是 andata。" },
    { id: "p3q3", prompt: "Ieri sera noi (avere + guardare) ______ la televisione.", answer: "abbiamo guardato", explanation: "noi + avere 是 abbiamo，过去分词是 guardato。" },
    { id: "p3q4", prompt: "Marco e Luca (essere + uscire) ______ con gli amici.", answer: "sono usciti", explanation: "uscire 使用 essere；阳性复数使用 usciti。" },
    { id: "p3q5", prompt: "Giulia e Sara (essere + tornare) ______ a casa alle 11.", answer: "sono tornate", explanation: "tornare 使用 essere；阴性复数使用 tornate。" },
    { id: "p3q6", prompt: "Tu (avere + dormire) ______ molto?", answer: "hai dormito", explanation: "tu + avere 是 hai，过去分词是 dormito。" },
    { id: "p3q7", prompt: "Paolo (avere + finire) ______ di lavorare alle 18.", answer: "ha finito", explanation: "Paolo + avere 是 ha，过去分词是 finito。" },
    { id: "p3q8", prompt: "Noi (avere + mangiare) ______ tutti insieme.", answer: "abbiamo mangiato", explanation: "noi + avere 是 abbiamo，过去分词是 mangiato。" },
  ],
  4: [
    { id: "p4q1", prompt: "Marta si è alzata presto.", answer: "falso", answerText: "Falso", explanation: "短文说 Marta si è alzata tardi，不是 presto。" },
    { id: "p4q2", prompt: "Che cosa ha fatto la mattina?", answer: "B", answerText: "Ha fatto colazione e ha pulito la casa.", explanation: "短文说她早上吃了早餐并打扫了房子。" },
    {
      id: "p4q3",
      prompt: "Con chi è andata in centro?",
      answer: "con un'amica",
      acceptedAnswers: [
        "con un'amica",
        "con una amica",
        "è andata in centro con un'amica",
        "è andata in centro con una amica",
        "marta è andata in centro con un'amica",
        "marta è andata in centro con una amica",
      ],
      explanation: "Marta è andata in centro con un’amica。",
    },
    {
      id: "p4q4",
      prompt: "Che cosa hanno fatto in centro?",
      answer: "Hanno fatto un giro e hanno bevuto un caffè.",
      acceptedAnswers: [
        "hanno fatto un giro e hanno bevuto un caffè",
        "hanno fatto un giro e bevuto un caffè",
        "hanno fatto un giro e poi hanno bevuto un caffè",
        "hanno fatto un giro e poi bevuto un caffè",
        "in centro hanno fatto un giro e hanno bevuto un caffè",
        "in centro hanno fatto un giro e bevuto un caffè",
        "in centro hanno fatto un giro e poi hanno bevuto un caffè",
        "in centro hanno fatto un giro e poi bevuto un caffè",
        "hanno bevuto un caffè e hanno fatto un giro",
        "hanno bevuto un caffè e fatto un giro",
        "hanno fatto un giro e hanno bevuto un caffè in centro",
        "hanno bevuto un caffè e hanno fatto un giro in centro",
        "marta e un'amica hanno fatto un giro e hanno bevuto un caffè",
        "marta e una amica hanno fatto un giro e hanno bevuto un caffè",
        "marta e la sua amica hanno fatto un giro e hanno bevuto un caffè",
        "marta e un'amica hanno bevuto un caffè e hanno fatto un giro",
        "marta e una amica hanno bevuto un caffè e hanno fatto un giro",
        "marta e la sua amica hanno bevuto un caffè e hanno fatto un giro",
        "loro hanno fatto un giro e hanno bevuto un caffè",
        "loro hanno bevuto un caffè e hanno fatto un giro",
      ],
      explanation: "回答需要包含两个核心信息：fare un giro 和 bere un caffè。",
    },
    {
      id: "p4q5",
      prompt: "Che cosa ha fatto Marta la sera?",
      answer: "È tornata a casa e ha guardato la televisione.",
      acceptedAnswers: [
        "è tornata a casa e ha guardato la televisione",
        "marta è tornata a casa e ha guardato la televisione",
        "la sera è tornata a casa e ha guardato la televisione",
        "la sera marta è tornata a casa e ha guardato la televisione",
        "marta la sera è tornata a casa e ha guardato la televisione",
        "marta è tornata a casa e la sera ha guardato la televisione",
        "è tornata a casa e ha guardato la tv",
        "marta è tornata a casa e ha guardato la tv",
        "la sera è tornata a casa e ha guardato la tv",
        "la sera marta è tornata a casa e ha guardato la tv",
        "marta la sera è tornata a casa e ha guardato la tv",
        "dopo essere tornata a casa ha guardato la televisione",
        "marta dopo essere tornata a casa ha guardato la televisione",
        "la sera dopo essere tornata a casa ha guardato la televisione",
        "dopo essere tornata a casa ha guardato la tv",
        "marta dopo essere tornata a casa ha guardato la tv",
      ],
      explanation: "回答需要包含两个核心信息：tornare a casa 和 guardare la televisione。",
    },
  ],
};

const state = {
  currentStep: 1,
};

function normalizeAnswer(value) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("it-IT")
    .replace(/[’‘`´]/gu, "'")
    .replace(/\s*'\s*/gu, "'")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function getQuestionElement(id) {
  return document.querySelector(`[data-question-id="${id}"]`);
}

function getStudentAnswer(item) {
  const element = getQuestionElement(item.id);
  const radio = element.querySelector("input[type='radio']:checked");
  const textInput = element.querySelector("input[type='text']");
  return radio ? radio.value : textInput ? textInput.value : "";
}

function isCorrect(item, value) {
  if (item.acceptedAnswers) {
    const normalized = normalizeAnswer(value);
    return item.acceptedAnswers.some((answer) => normalizeAnswer(answer) === normalized);
  }
  if (getQuestionElement(item.id).querySelector("input[type='radio']")) {
    return value === item.answer;
  }
  return normalizeAnswer(value) === normalizeAnswer(item.answer);
}

function clearQuestionState(element) {
  element.classList.remove("is-correct", "is-wrong");
  const feedback = element.querySelector(".item-feedback");
  if (feedback) feedback.textContent = "";
}

function markQuestion(item, rawAnswer, correct) {
  const element = getQuestionElement(item.id);
  const feedback = element.querySelector(".item-feedback");
  element.classList.toggle("is-correct", correct);
  element.classList.toggle("is-wrong", !correct);

  if (correct) {
    feedback.textContent = "✓ Corretto｜正确";
    return;
  }

  if (item.wrong && item.wrong[rawAnswer]) {
    feedback.textContent = item.wrong[rawAnswer];
  } else if (item.id === "p4q1" || item.id === "p4q2") {
    feedback.textContent = "再读一次短文，找到对应的信息。";
  } else if (item.acceptedAnswers) {
    feedback.textContent = "核心信息或意大利语形式还需要修改，请再读短文。";
  } else {
    feedback.textContent = "再检查一下这个形式。";
  }
}

function checkPart(partNumber) {
  const items = exerciseData[partNumber];
  const answers = items.map((item) => ({
    item,
    raw: getStudentAnswer(item),
  }));
  const firstEmpty = answers.find(({ raw }) => !raw.trim());
  const partFeedback = document.getElementById(`parte-${partNumber}-feedback`);

  if (firstEmpty) {
    partFeedback.textContent = "请先完成这一部分的所有题目，再一起检查。";
    partFeedback.classList.add("is-error");
    const element = getQuestionElement(firstEmpty.item.id);
    element.classList.add("is-wrong");
    element.querySelector("input")?.focus();
    return;
  }

  const results = answers.map(({ item, raw }) => ({
    item,
    raw,
    correct: isCorrect(item, raw),
  }));

  results.forEach(({ item, raw, correct }) => markQuestion(item, raw, correct));
  const allCorrect = results.every((result) => result.correct);
  const continueButton = document.querySelector(`[data-next-part="${partNumber + 1}"]`);

  partFeedback.classList.toggle("is-error", !allCorrect);
  if (allCorrect) {
    partFeedback.textContent = "Bravissimo/a! Tutto corretto! 🎉";
    continueButton.hidden = false;
    continueButton.focus({ preventScroll: true });
  } else {
    partFeedback.textContent = "有几处需要修改。请根据提示订正后，再点击 Controlla。";
    continueButton.hidden = true;
    getQuestionElement(results.find((result) => !result.correct).item.id)
      .querySelector("input:checked, input[type='text']")
      ?.focus({ preventScroll: true });
  }
}

function showStep(step) {
  document.querySelectorAll(".part").forEach((part) => {
    const isTarget = part.id === (step === 6 ? "result" : `parte-${step}`);
    part.hidden = !isTarget;
    part.classList.toggle("is-active", isTarget);
  });

  state.currentStep = step;
  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");
  if (step <= 5) {
    progressText.textContent = `Parte ${step} di 5`;
    progressFill.style.width = `${step * 20}%`;
  } else {
    progressText.textContent = "Completato｜已完成";
    progressFill.style.width = "100%";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function finishExercise() {
  const writing = document.getElementById("free-writing");
  const feedback = document.getElementById("parte-5-feedback");
  if (!writing.value.trim()) {
    feedback.textContent = "先写下你的 3–5 句话吧。这一部分不评分，可以放心表达。";
    feedback.classList.add("is-error");
    writing.focus();
    return;
  }
  feedback.textContent = "";
  feedback.classList.remove("is-error");
  document.getElementById("my-text-output").textContent = writing.value;
  showStep(6);
}

function restartExercise() {
  document.querySelectorAll("input").forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") input.checked = false;
    else input.value = "";
  });
  document.getElementById("free-writing").value = "";
  document.getElementById("help-panel").open = false;
  document.querySelectorAll(".question").forEach(clearQuestionState);
  document.querySelectorAll(".part-feedback").forEach((feedback) => {
    feedback.textContent = "";
    feedback.classList.remove("is-error");
  });
  document.querySelectorAll(".continue-button").forEach((button) => {
    button.hidden = true;
  });
  document.getElementById("my-text-output").textContent = "";
  showStep(1);
  document.querySelector("#parte-1 input")?.focus({ preventScroll: true });
}

document.querySelectorAll(".check-button").forEach((button) => {
  button.addEventListener("click", () => checkPart(Number(button.dataset.checkPart)));
});

document.querySelectorAll(".continue-button").forEach((button) => {
  button.addEventListener("click", () => showStep(Number(button.dataset.nextPart)));
});

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") event.preventDefault();
  });
  input.addEventListener("input", () => clearQuestionState(input.closest(".question")));
  input.addEventListener("change", () => clearQuestionState(input.closest(".question")));
});

document.getElementById("finish-button").addEventListener("click", finishExercise);
document.getElementById("restart-button").addEventListener("click", restartExercise);

window.exerciseApp = {
  exerciseData,
  normalizeAnswer,
  isCorrect,
  state,
  checkPart,
  showStep,
  restartExercise,
};
