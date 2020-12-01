// eslint-disable-next-line import/prefer-default-export
export const htmlText = {

  1:
  {
    id: 1,
    selector: `#sun`,
    text: `&lt;div class="space"&gt;
    <div>&lt;star id="sun" /&gt;</div>
    &lt;/div&gt;`,
    layoutCode: `<div class="circle sun"></div>`,
    levelText: `Выбрать элемент, у которого есть определенный ID.
    <p>Например: <span>#test</span>  - выберет элемент, у которого id="test".</p>`,
  },

  2:
  {
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
    levelText: `Выбрать элементы, у которых есть определенный тег.
    <p>Например: <span>div</span>  - выберет все теги div.</p>`,
  },

  3:
  {
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
    levelText: `Выбрать элементы, которые лежат внутри другого элемента.
    <p>Например: <span>div p</span>  - выберет все теги p, которые лежат в div.</p>`,
  },

  4:
  {
    id: 4,
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
    levelText: `Выбрать элемент, у которого есть псевдокласс "посещенный".
    <p>Например: <span>a:visited</span>  - выберет все посещенные пользователем ссылки.</p>`,
  },

  5:
  {
    id: 5,
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
    levelText: `Выбрать элементы по их классу.
    <p>Например: <span>.test</span>  - выберет все элементы, у которых есть класс test.</p>`,
  },

  6:
  {
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
    levelText: `Выбрать все прямые потомки элемента.
    <p>Например: <span>ul>li</span>  - выберет все дочерние теги li, лежащие внутри тега ul.</p>`,
  },

  7:
  {
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
    levelText: `Выбрать элемент, у которого есть атрибут.
    <p>Например: <span>div[attr]</span>  - выберет тег div с атрибутом attr.</p>`,
  },

  8:
  {
    id: 8,
    selector: `planet:not(.inhabitable)`,
    text: `&lt;div class="space"&gt;<div>&lt;star id="sun" /&gt;</div>
    <div>&lt;planet class="mercury" /&gt;</div>
    <div>&lt;planet class="venus" /&gt;</div>
    <div>&lt;planet class="earth inhabitable"&gt;
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
    levelText: `Выбрать все планеты, кроме той, которая является обитаемой планетой.
    <p>Например: <span>p:not(.test)</span>  - выберет все теги p, кроме того, у которого есть класс test.</p>`,
  },

  9:
  {
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
    levelText: `Выбрать элемент, который идет 5 в списке планет.
    <p>Например: <span>p:nth-child(3)</span>  - выберет 3 тег p.</p>`,
  },

  10:
  {
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
  },

};
