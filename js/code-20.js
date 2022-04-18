let user20 = {
  init: () => {
    document.querySelector('.user-20').innerHTML = `
      <div class="user-20__container">
        <div class="user-20__container__header">
          <div class="user-20__container__header__title">
            <h1>User 20</h1>
          </div>
          <div class="user-20__container__header__button">
            <button class="user-20__container__header__button__button">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="user-20__container__body">
          <div class="user-20__container__body__content">
            <div class="user-20__container__body__content__title">
              <h2>User 20</h2>
            </div>
            <div class="user-20__container__body__content__text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
            <div class="user-20__container__body__content__button">
              <button class="user-20__container__body__content__button__button">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

user20.init();
