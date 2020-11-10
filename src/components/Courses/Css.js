import React, {Suspense} from 'react';
import Iframe from 'react-iframe';

function Css() {
  return (
    <section className="course">
      <div className="container">
        <div className="row pt-4 justify-content-center">
          <div className="course__video col-md-12 pb-4 pr-md-0">
            <Iframe className="course__video-screen" id="screen" url="https://www.youtube.com/embed/IsZDtOYUWvk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
            <div className="course__content">
              <div className="course__content-wrapper">
                <h5 className="course__content-header">Основы CSS/CSS3</h5>
                <p className="course__content-author">Sorax</p>
                <ul className="course__content-list">
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-1"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 1. Введение
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-2"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 2. Основные понятия
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-3"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 3. Селекторы
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-4"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 4. Позиционирование элементов
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-5"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 5. Текст
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-6"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 6. Цвет
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-7"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 7. Рамки
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-8"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 8. Закругленные углы
                      (border-radius)
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-9"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 9. Треугольники
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-10"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 10. Фон и множественные фоны
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-11"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 11. Спрайты
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-12"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 12. Плавающие элементы (float) и
                      clearfix
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-13"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 13. Списки
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-14"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 14. Тени (box-shadow)
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-15"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 15. Плавные переходы
                      (transition)
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-16"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 16. Градиенты
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-17"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 17. Трансформации (transform)
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-18"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 18. Трехмерный куб на CSS3
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-19"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 19. Анимации (animation)
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-20"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 20. @font-face
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-21"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 21. Медиазапросы (media queries)
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-22"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 22. Верстка сайта с адаптивной
                      сеткой
                    </button>
                  </li>
                  <li>
                    <button className="course__content-link list-group-item-action" id="video-css-23"
                            onClick="videoSwitcherRu(this.id)">Уроки по CSS/CSS3. Часть 23. Многоколоночный текст
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="row justify-content-center">
          <div className="course__description col-md-12 pb-4 justify-content-center">
            <h5 className="course__description-header" id="header">Уроки по CSS/CSS3. Часть 1. Введение</h5>
            <hr />
              <p className="course__description-text" id="description">Введение в CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Css;
