/* ======================  TIMER ====================== */

const declOfNum = (n, titles) => {
  return (
    n +
    " " +
    titles[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ]
  );
};

const timer = () => {
  /* создаём элементы на странице */
  const timer = document.createElement("div");
  const timerText = document.createElement("p");
  const timerCount = document.createElement("span");
  /* добавляем к созданным элементам классы */
  timer.classList.add("timer");
  timerText.classList.add("timer__text");
  timerCount.classList.add("timer__count");

  timerText.textContent = "До конца распродажи осталось ";

  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);
  /* Старт таймера */
  const startTimer = () => {
    /* дата, когда заканчивается время акции */
    const deadline = new Date(2022, 0, 1, 0, 0, 0);
    /* текущие дата и время */
    const now = new Date();
    /* разница времени между оставшимся и текущим временем */
    const timeRemaining = (deadline - now) / 1000;
    /* получаем количество секунд */
    const seconds = Math.floor(timeRemaining % 60);
    /* получаем количество минут */
    const minutes = Math.floor((timeRemaining / 60) % 60);
    /* получаем количество часов */
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    /* получаем количество дней */
    const days = Math.floor(timeRemaining / 60 / 60 / 24);

    const s = declOfNum(seconds, ["секунда", "секунды", "секунд"]);
    const m = declOfNum(minutes, ["минута", "минуты", "минут"]);
    const h = declOfNum(hours, ["час", "часа", "часов"]);
    const d = declOfNum(days, ["день", "дня", "дней"]);

    timerCount.textContent = `${d} ${h} ${m} ${s}`;

    /* если больше 0, тогда запускаем функцию старт таймера, иначе удаляем таймер со страницы */
    if (timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      timer.remove();
    }
  };

  startTimer();
};

timer();
