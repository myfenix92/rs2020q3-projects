// eslint-disable-next-line import/prefer-default-export
export const htmlText = {

  level_1: {
    id: 1,
    selector: `#sun`,
    text: `&lt;div class="space"&gt;
    <div>&lt;star id="sun" /&gt;</div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>`,
    levelText: `Выбрать звезду в Солнечной системе - Солнце.
    <p>Например: <span>#test</span>  - выберет элемент, у которого id="test".</p>`,
    factsText: `<p>Интересный факт про <span>Солнце</span></p>
    С 1 на 2 сентября 1859 года произошла крупнейшая за всю историю геомагнитная буря, вызванная вспышкой на Солнце.
    В ходе бури произошёл отказ телеграфных систем по всей Европе и Северной Америке; северные сияния наблюдались по всему миру, даже над Карибами.`,
  },

  level_2: {
    id: 2,
    selector: `planet`,
    text: `&lt;div class="space"&gt;
    <div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth" /&gt;</div>
    <div>&lt;planet class="mars" /&gt;</div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>`,
    levelText: `Выбрать только те космические тела, которые являются планетами.
    <p>Например: <span>div</span>  - выберет все теги div.</p>`,
    factsText: `<p>Интересный факт про <span>Меркурий</span></p>
    Из-за того что железное ядро ​​планеты охлаждается и сжимается, поверхность планеты стала морщинистой.
    Ученые называют эти «морщины» эскарпами. Эскарпы могут быть очень высокими и достигать сотен километров.`,
  },

  level_3: {
    id: 3,
    selector: `planet satellite`,
    text: `&lt;div class="space"&gt;
    <div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;planet class="mars"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>`,
    levelText: `Выбрать все спутники разных планет.
    <p>Например: <span>div p</span>  - выберет все теги p, которые лежат в div.</p>`,
    factsText: `<p>Интересный факт про <span>Венеру</span></p>
    Во всей Солнечной системе только Уран и Венера вращаются вокруг своей оси с востока на запад.`,
  },

  level_4: {
    id: 4,
    selector: `.small`,
    text: `&lt;div class="space"&gt;
    <div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury small" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;planet class="mars small"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>`,
    levelText: `Выбрать маленькие планеты в Солнечной системе.
    <p>Например: <span>.test</span>  - выберет все элементы, у которых есть класс test.</p>`,
    factsText: `<p>Интересный факт про <span>Землю</span></p>
    Одна-единственная молния разогревает воздух до температуры в 30 000 градусов по Целью. В результате воздух взрывается,
    появляется ударная волна, а с ней и звук, который мы знаем как удар грома. Бонусный факт: каждую минуту на Земле регистрируется до 6 000 вспышек молний!`,
  },

  level_5: {
    id: 5,
    selector: `.earth:visited`,
    text: `&lt;div class="space"&gt;
    <div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;planet class="mars"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>`,
    levelText: `Выбрать планету, на которой Вы точно были.
    <p>Например: <span>a:visited</span>  - выберет все посещенные пользователем ссылки.</p>`,
    factsText: `<p>Интересный факт про <span>Марс</span></p>
    Кора Марса — цельная, в отличие от земной коры, состоящей из отдельных тектонических плит.`,
  },

  level_6: {
    id: 6,
    selector: `.giant_group > planet`,
    text: `&lt;div class="space"&gt;<div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div></div>
    <div>&lt;planet class="mars"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;div class="giant_group"&gt;
    <div>&lt;planet class="jupiter" /&gt;</div>
    <div>&lt;planet class="saturn" /&gt;</div>
    <div>&lt;planet class="uranus" /&gt;</div>
    <div>&lt;planet class="neptune" /&gt;</div>
    &lt;/div&gt;</div></div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>
    <div class="circle jupiter giant_group"></div>
    <div class="circle saturn giant_group">
      <div class="rings"></div>
    </div>
    <div class="circle uran giant_group"></div>
    <div class="circle neptune giant_group"></div>`,
    levelText: `Выбрать все планеты-гиганты Солнечной системы.
    <p>Например: <span>ul>li</span>  - выберет все дочерние теги li, лежащие внутри тега ul.</p>`,
    factsText: `<p>Интересный факт про <span>Юпитер</span></p>
    Юпитер обладает многочисленным спутниковым семейством, которое часто называют «Солнечной системой в миниатюре».
    К настоящему времени астрономам известно о 69 лунах газового гиганта.`,
  },

  level_7: {
    id: 7,
    selector: `planet[rings]`,
    text: `&lt;div class="space"&gt;<div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div></div>
    <div>&lt;planet class="mars"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;div class="giant_group"&gt;
    <div>&lt;planet class="jupiter" /&gt;</div>
    <div>&lt;planet class="saturn" rings="yes" /&gt;</div>
    <div>&lt;planet class="uranus" /&gt;</div>
    <div>&lt;planet class="neptune" /&gt;</div>
    &lt;/div&gt;</div></div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>
    <div class="circle jupiter giant_group"></div>
    <div class="circle saturn giant_group">
      <div class="rings"></div>
    </div>
    <div class="circle uran giant_group"></div>
    <div class="circle neptune giant_group"></div>`,
    levelText: `Выбрать планету с кольцами вокруг орбиты.
    <p>Например: <span>div[attr]</span>  - выберет тег div с атрибутом attr.</p>`,
    factsText: `<p>Интересный факт про <span>Сатурн</span></p>
    Два раза в 29 лет кольца Сатурна при наблюдении с Земли не видны совсем — человеческий глаз видит только «ребро» колец,
    которое можно едва рассмотреть с помощью мощного телескопа.`,
  },

  level_8: {
    id: 8,
    selector: `planet:not(.inhabited)`,
    text: `&lt;div class="space"&gt;<div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth inhabited"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div></div>
    <div>&lt;planet class="mars"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;div class="giant_group"&gt;
    <div>&lt;planet class="jupiter" /&gt;</div>
    <div>&lt;planet class="saturn" /&gt;</div>
    <div>&lt;planet class="uranus" /&gt;</div>
    <div>&lt;planet class="neptune" /&gt;</div>
    &lt;/div&gt;</div></div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>
    <div class="circle jupiter giant_group"></div>
    <div class="circle saturn giant_group">
      <div class="rings"></div>
    </div>
    <div class="circle uran giant_group"></div>
    <div class="circle neptune giant_group"></div>`,
    levelText: `Выбрать все необитаемые планеты в Солнечной системе.
    <p>Например: <span>p:not(.test)</span>  - выберет все теги p, кроме того, у которого есть класс test.</p>`,
    factsText: `<p>Интересный факт про <span>Уран</span></p>
    Из всех планет-гигантов в нашей системе только Уран выделяет тепла меньше, чем получает от Солнца.`,
  },

  level_9: {
    id: 9,
    selector: `planet:nth-child(5)`,
    text: `&lt;div class="space"&gt;<div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div></div>
    <div>&lt;planet class="mars"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;div class="giant_group"&gt;
    <div>&lt;planet class="jupiter" /&gt;</div>
    <div>&lt;planet class="saturn" /&gt;</div>
    <div>&lt;planet class="uranus" /&gt;</div>
    <div>&lt;planet class="neptune" /&gt;</div>
    &lt;/div&gt;</div></div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>
    <div class="circle jupiter giant_group"></div>
    <div class="circle saturn giant_group">
      <div class="rings"></div>
    </div>
    <div class="circle uran giant_group"></div>
    <div class="circle neptune giant_group"></div>`,
    levelText: `Выбрать 5-ю планету Солнечной системы.
    <p>Например: <span>p:nth-child(3)</span>  - выберет 3 тег p.</p>`,
    factsText: `<p>Интересный факт про <span>Нептун</span></p>
    Нептун был единственной планетой, открытой благодаря математическим расчётам, а не благодаря телескопу.`,
  },

  level_10: {
    id: 10,
    selector: `planet:last-child`,
    text: `&lt;div class="space"&gt;<div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth"&gt;
    <div>&lt;satellite class="moon" /&gt;</div>
    &lt;/planet&gt;</div></div>
    <div>&lt;planet class="mars"&gt;
    <div>&lt;satellite class="fobos" /&gt;</div>
    <div>&lt;satellite class="deimos" /&gt;</div>
    &lt;/planet&gt;</div>
    <div>&lt;div class="giant_group"&gt;
    <div>&lt;planet class="jupiter" /&gt;</div>
    <div>&lt;planet class="saturn" /&gt;</div>
    <div>&lt;planet class="uranus" /&gt;</div>
    <div>&lt;planet class="neptune" /&gt;</div>
    &lt;/div&gt;</div></div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>
    <div class="circle mercury earth_group"></div>
    <div class="circle venus earth_group"></div>
    <div class="circle earth earth_group"></div>
    <div class="circle mars earth_group"></div>
    <div class="circle moon satellite"></div>
    <div class="circle fobos satellite"></div>
    <div class="circle deimos satellite"></div>
    <div class="circle jupiter giant_group"></div>
    <div class="circle saturn giant_group">
      <div class="rings"></div>
    </div>
    <div class="circle uran giant_group"></div>
    <div class="circle neptune giant_group"></div>`,
    levelText: `Выбрать последнюю планету в Солнечной системе.
    <p>Например: <span>a:last-child</span>  - выберет последнюю ссылку.</p>`,
    factsText: `<p>Интересный факт про <span>Плутон</span></p>
    Плутон состоит приблизительно наполовину из скал и льда. Подобное относится ко многим скалистым кометам Солнечной системы.
    Если бы Плутон смог еще более приблизиться к Солнцу, то тогда у него «вырос» хвост, и он превратился в комету.`,
  },

};
