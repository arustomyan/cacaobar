const body = document.querySelector("body");

const openPopup = (valueObj) => {
  let titlePopup = document.querySelector(".popup__promo");
  let buttonPopup = document.querySelector(".popup__wrapper button");

  let sectionInputNamePopup = document.querySelector(
    ".popup__wrapper .popup__form"
  ).elements["section-name-text"];
  let sectionButtonNamePopup = document.querySelector(
    ".popup__wrapper .popup__form"
  ).elements["section-btn-text"];
  let sectionNamePopup = document.querySelector(".popup__wrapper .popup__form")
    .elements["section-name"];

  sectionInputNamePopup.defaultValue = valueObj.sectionNameText;
  sectionInputNamePopup.value = valueObj.sectionNameText;
  sectionButtonNamePopup.defaultValue = valueObj.button;
  sectionButtonNamePopup.value = valueObj.button;
  sectionNamePopup.defaultValue = "Закрытая";
  sectionNamePopup.value = "Закрытая";

  titlePopup.innerHTML = valueObj.title;
  buttonPopup.innerHTML = valueObj.button;
  $(`#image-popup`).removeClass();
  $(`#image-popup`).addClass(valueObj.image);

  $("#popup").addClass("popup_open");
  body.style.marginRight = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  body.style.overflow = `hidden`;
  $(document).off("mouseleave");
};

const closePopup = (popup) => {
  $(popup).removeClass("popup_open");
  body.style.marginRight = `0px`;
  body.style.overflow = `auto`;
};

const titleGetPlan = `
      <h2 class="popup__title">
        Станьте франчайзинговым партнером Cacao Bar.
        <span class="text_green"
          >Получите презентацию и другие материалы о франшизе на вашу
          почту</span
        >
      </h2>`;

const titleOrderCall = `
      <h2 class="popup__title popup__order-call-title">
        <span class="text_green"
          >Наш менеджер по сопровождению партнёров свяжется с вами </span
        ><span class="popup__title-br"> и ответим на все вопросы</span
        ><span class="popup__title-br"> в ближайшее рабочее время</span> в
        телефонном звонке
      </h2>`;

const titleLeave = `
      <h2 class="popup__title popup__leave-title">
        <span class="text_green"
          >Уже покидаете страницу? Не упустите возможность стать франчайзинговым
          партнером кофейни Cacao Bar.</span
        >Оставьте контакты и наш менеджер свяжется с вами, чтобы подробнее
        рассказать о франшизе
      </h2>`;

const titleFindDetails = `
      <h2 class="popup__title">
        <span class="text_green">Узнайте детали бизнес-модели</span>
        какао-бара и предложения <br />о партнёрстве
      </h2>`;

const titleJoinFr = `
      <h2 class="popup__title">
        <span class="text_green">Откройте собственный бизнес</span>
        в индустрии HoReCa по франшизе Cacao Bar
      </h2>`;

const titleAboutLoyalty = `
      <h2 class="popup__title">
        <span class="text_green">Оставляйте заявку на звонок менеджера</span>
        и узнайте все методы повышения лояльности клиентов
      </h2>`;

const titleLearnDetails = `
      <h2 class="popup__title">
        Узнайте все подробности<br />
        открытия какао-бара за 59 дней
      </h2>`;

const nextArrowRewiews = `
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" class="reviews__slider-next" xmlns="http://www.w3.org/2000/svg">
    <rect width="29" height="29" fill="#016349"/>
    <path d="M7 15H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 8L21 15L14 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const prevArrowRewiews = `
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" class="reviews__slider-prev" xmlns="http://www.w3.org/2000/svg">
    <rect width="29" height="29" transform="matrix(-1 0 0 1 29 0)" fill="#016349"/>
    <path d="M22 15H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 8L8 15L15 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const popupValue = {
  GetPlan: {
    title: titleGetPlan,
    image: "image__get-plan",
    button: "Получить документы",
    sectionNameText: "Станьте франчайзинговым партнером Cacao Bar.",
    valueInput: "Закрытая",
  },
  OrderCall: {
    title: titleOrderCall,
    image: "image__order-call",
    button: "Заказать звонок менеджера",
    sectionNameText: "Наш менеджер по сопровождению партнёров свяжется с вами",
    valueInput: "Закрытая",
  },
  Leave: {
    title: titleLeave,
    image: "image__leave",
    button: "Заказать бесплатный звонок",
    sectionNameText:
      "Не упустите возможность стать франчайзинговым партнером кофейни Cacao Bar",
    valueInput: "Закрытая",
  },
  FindDetails: {
    title: titleFindDetails,
    image: "image__find-details",
    button: "Узнать детали",
    sectionNameText:
      "Узнайте детали бизнес-модели какао-бара и предложения о партнёрстве",
    valueInput: "Закрытая",
  },
  JoinFr: {
    title: titleJoinFr,
    image: "image__join-fr",
    button: "Присоединиться<br/>к франшизе",
    sectionNameText:
      "Откройте собственный бизнес в индустрии HoReCa по франшизе Cacao Bar",
    valueInput: "Закрытая",
  },
  AboutLoyalty: {
    title: titleAboutLoyalty,
    image: "image__about-loyalty",
    button: "Подробнее<br/>о лояльности",
    sectionNameText:
      "Оставляйте заявку на звонок менеджера и узнайте все методы повышения лояльности клиентов",
    valueInput: "Закрытая",
  },
  LearnDetails: {
    title: titleLearnDetails,
    image: "image__learn-details",
    button: "Ознакомиться<br/>с подробностями",
    sectionNameText: "Узнайте все подробности открытия какао-бара за 59 дней",
    valueInput: "Закрытая",
  },
};

if ($("#main-body").length > 0) {
  new WOW().init();

  $("#btn_GetPlan").click((e) => {
    openPopup(popupValue.GetPlan);
  });
  $("#btn_OrderCall").click((e) => {
    openPopup(popupValue.OrderCall);
  });
  $("#btn_Leave").click((e) => {
    openPopup(popupValue.Leave);
  });
  $("#btn_FindDetails").click((e) => {
    openPopup(popupValue.FindDetails);
  });
  $("#btn_JoinFr").click((e) => {
    openPopup(popupValue.JoinFr);
  });
  $("#btn_AboutLoyalty").click((e) => {
    openPopup(popupValue.AboutLoyalty);
  });
  $("#btn_LearnDetails").click((e) => {
    openPopup(popupValue.LearnDetails);
  });
  $(".order-call__button").click((e) => {
    openPopup(popupValue.OrderCall);
  });

  // Открытие модального окна при уходе
  const modalExit = () => {
    $(document).mouseleave(() => {
      let posMouse = null;
      $(document).mousemove((e) => {
        posMouse = e.clientY;
        console.log(e.clientY);
      });

      setTimeout(() => {
        if (posMouse === null || posMouse < 10) {
          openPopup(popupValue.Leave);
          $(document).off("mouseleave");
        }

        $(document).off("mousemove");
      }, 1000);
    });
  };
  modalExit();

  $(document).ready(() => {
    // support slider
    $(".support__content-title").click((e) => {
      $(`.support__right-block-content`).removeClass(
        "support__right-block-content_open"
      );
      $(`.support__content-title`).removeClass("support__content-title_active");

      $(`#support-content_${e.currentTarget.id.split("_")[1]}`).addClass(
        "support__right-block-content_open"
      );

      $(`#${e.currentTarget.id}`).addClass("support__content-title_active");
    });

    $(".reviews__slider").slick({
      prevArrow: prevArrowRewiews,
      nextArrow: nextArrowRewiews,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 2,
      // arrows: false,
      responsive: [
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            adaptiveHeight: true,
          },
        },
      ],
    });

    $(".format__staff-list-slider").slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      variableWidth: true,
      centerMode: true,
    });

    $(".overview__slider").slick({
      prevArrow: prevArrowRewiews,
      nextArrow: nextArrowRewiews,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      // arrows: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });

    $(".bullets_slider").slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      dots: true,
      adaptiveHeight: true,
    });

    $(".support__content-slider-wrapper .support__right-block").slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      dots: true,
      adaptiveHeight: true,
    });

    $(".support__content-slider-wrapper .support__right-block").on(
      "beforeChange",
      (a, b, c, d) => {
        $(
          `.support__content-slider-wrapper .support__content-title`
        ).removeClass("support__content-titles-slider_active");
        $(`#support-slider_${d}`).addClass(
          "support__content-titles-slider_active"
        );
      }
    );

    $(".format__assortment-list-slider").slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
          },
        },
      ],
    });

    $(window).resize(function () {
      $(".reviews__slider").slick("refresh");
      $(".format__staff-list-slider").slick("refresh");
      $(".overview__slider").slick("refresh");
      $(".bullets_slider").slick("refresh");
      $(".format__assortment-list-slider").slick("refresh");
      $(".support__content-slider-wrapper .support__right-block").slick(
        "refresh"
      );
    });

    let obj = {
      count: 0,
      cheque: 0,
    };

    const calculateProfit = ({ count, cheque }) => {
      return Math.round(count * cheque);
    };

    const calculateRevenue = (calculateRevenue) => {
      return Math.round(calculateRevenue * 0.141);
    };

    const changePrice = (data) => {
      obj = { ...obj, [data.input[0].name]: data.from };

      let profit = document.querySelector("#profit");
      let revenue = document.querySelector("#revenue");

      profit.innerHTML = `${calculateProfit(obj).toLocaleString(
        "ru-RU"
      )} <span class="rub">q</span>`;

      revenue.innerHTML = `${calculateRevenue(
        calculateProfit(obj)
      ).toLocaleString("ru-RU")} <span class="rub">q</span>`;
    };

    $(
      ".calculation__toddler-block:nth-child(1) .calculation__toddler"
    ).ionRangeSlider({
      min: 2880,
      max: 2960,
      step: 20,
      grid: true,
      from: 2920,
      grid_snap: true,
      hide_min_max: true,
      onChange: (data) => {
        changePrice(data);
      },
      onStart: (data) => {
        changePrice(data);
      },
    });
    $(
      ".calculation__toddler-block:nth-child(2) .calculation__toddler"
    ).ionRangeSlider({
      min: 245,
      max: 295,
      step: 10,
      grid: true,
      from: 285,
      grid_snap: true,
      hide_min_max: true,
      onChange: (data) => {
        changePrice(data);
      },
      onStart: (data) => {
        changePrice(data);
      },
    });
  });

  $(document).ready(function () {
    $(".input_phone").inputmask("+7 (999) 999-99-99");
  });

  // Сброс валидации
  const inputs = document.querySelectorAll("input");

  for (const input of inputs) {
    input.onfocus = (e) => {
      e.target.classList.remove("input_error");
    };
  }
}

function newDate() {
  let dateNow = new Date().getFullYear();
  let dateText = document.querySelector(".date-now");

  if (dateNow !== 2022) {
    dateText.innerHTML = `2022 - ${dateNow}`;
  } else {
    dateText.innerHTML = dateNow;
  }
}

newDate();

$(".button__policy, .politicy").click((e) => {
  $("#popup_policy").addClass("popup_open");
  body.style.marginRight = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  body.style.overflow = `hidden`;
  $(document).off("mouseleave");
});

$(".popup__overlay").click((e) => {
  closePopup(e.target.parentElement);
});

// $(".popup__btn-close").click((e) => {
//   closePopup(e.target.parentElement.parentElement);
// });

$("#popup-policy__close").click((e) => {
  closePopup("#popup_policy");
});

if ($("#thanks1-body").length > 0) {
  let thanksName = document.querySelector(".thanks__title");
  let nameValue = localStorage.getItem("lpg3746_name");

  if (nameValue == null) {
    thanksName.innerHTML = `Благодарим Вас за обращение <br />
                            в компанию Cacao Bar®`;

    document.title = `Cпасибо, Ваша заявка принята 👍`;
  } else {
    thanksName.innerHTML = `<span class="text_yellow">
                              <span class="thanks_name">${nameValue},</span></span>
                            благодарим Вас<span class="thanks_title-br">за обращение в компанию</span> Cacao Bar®`;
    document.title = `${nameValue}, спасибо, Ваша заявка принята 👍`;
  }
}

if ($("#thanks2-body").length > 0) {
  let thanksName = document.querySelector(".thanks__title");
  let nameValue = localStorage.getItem("lpg3746_name");
  let cityValue = localStorage.getItem("lpg3746_city");

  if (nameValue == null && cityValue == null) {
    thanksName.innerHTML = `Благодарим Вас за обращение <br />
                            в компанию Cacao Bar®`;
    document.title = `Cпасибо, Ваша заявка принята 👍`;
  } else if (cityValue == null && nameValue != null) {
    thanksName.innerHTML = `<span class="text_yellow">
                              <span class="thanks_name">${nameValue},</span></span>
                            благодарим Вас<span class="thanks_title-br">за обращение в компанию</span> Cacao Bar®`;
    document.title = `${nameValue}, спасибо, Ваша заявка принята 👍`;
  } else if (nameValue == null) {
    thanksName.innerHTML = `Благодарим Вас<span class="thanks_title-br">
                            за заявку на город ${cityValue}</span>
                            <span class="thanks_title-br">на франшизу <span class="title_wrap">Cacao Bar®</span></span>`;
    document.title = `Cпасибо, Ваша заявка принята 👍`;
  } else {
    thanksName.innerHTML = `<span class="text_yellow">
                              <span class="thanks_name">${nameValue}, </span></span>благодарим Вас
                              <span class="thanks_title-br">
                              за заявку на город ${cityValue} </span>
                            <span class="thanks_title-br">на франшизу <span class="title_wrap">Cacao Bar®</span></span>`;
    document.title = `${nameValue}, спасибо, Ваша заявка принята 👍`;
  }
}
