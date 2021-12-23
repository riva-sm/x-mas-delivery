/* ======================  MODAL ====================== */

// находим нужные нам элементы, кнопка заказать, оверлей, модальное окно заказа
const buttonsOrder = document.querySelectorAll(".product__button_order");
const overlayOrder = document.querySelector(".overlay_order");
const order = overlayOrder.querySelector(".modal__order");
const buttonConsultation = document.querySelector(".header__consultation");
const overlayConsultation = document.querySelector(".overlay_consultation");

/* ======================  Модальное окно Заказа ====================== */

/* получаем все кнопки заказать со страницы и перебираем их, по клику открываем модальное окно */
buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener("click", () => {
        overlayOrder.classList.add("overlay_active");
        order.value = buttonOrder.dataset.order;
    });
})

/* по нажатию на оверлей проверям, где было нажатие, если на оверлей или на крестик, мимо модального окна, закрываем модальное окно */
overlayOrder.addEventListener("click", (event) => {
    const target = event.target;
    if(target === overlayOrder || target.closest(".modal__close")) {
        overlayOrder.classList.remove("overlay_active");
    }
});
/* ======================  Модальное окно Консультация ====================== */

buttonConsultation.addEventListener("click", () => {
    overlayConsultation.classList.add("overlay_active");
})

overlayConsultation.addEventListener("click", (event) => {
    const target = event.target;
    if(target === overlayConsultation || target.closest(".modal__close")) {
        overlayConsultation.classList.remove("overlay_active");
    }
});
