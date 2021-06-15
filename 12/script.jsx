const Block = ({ HeaderTag = 'h2', headerText, className = '', children }) => (
  <div className={className}>
    <HeaderTag>{headerText}</HeaderTag>
    {children}
  </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
  <Block headerText="Категория">
    <select onChange={onChange} value={value}>
      <option value="">-- Категория --</option>
      {countries.map(n => <option key={n}>{n}</option>)}
    </select>
  </Block>
);

const SizeFilter = ({ value, onChange, sizes }) => (
  <Block headerText="Size">
    {sizes.map(n => (
      <label className="size" key={n}>
        <input
          type="checkbox"
          value={n}
          checked={value.includes(n)}
          onChange={onChange}
        />
        {n}
      </label>
    ))}
  </Block>
);

const PriceInput = ({ index, ...props }) => (
  <input className="price-input" data-index={index} {...props} />
);

const PriceFilter = ({ value, onChange }) => (
  <Block headerText="Цена (от - до)">
    <PriceInput value={value[0]} onChange={onChange} index="0" />
    &nbsp;-&nbsp;
    <PriceInput value={value[1]} onChange={onChange} index="1" />
    &nbsp;₽&nbsp;
  </Block>
);

const GoodsList = ({ goods }) => (
  <div>
    {goods.map(n => (
      <Block className="good" HeaderTag="h3" headerText={n.name} key={n.id}>
        <img src={n.image} />
        <p>Цена: {n.cost}</p>
        <button data-art={n.name}>Купить</button>
      </Block>
    ))}
  </div>
);

const App = ({ goods }) => {
  const countries = React.useMemo(() => [...new Set(goods.map(n => n.country))], [ goods ]);
  const sizes = React.useMemo(() => [...new Set(goods.map(n => n.size))], [ goods ]);

  const [ country, setCountry ] = React.useState('');
  const [ size, setSize ] = React.useState([]);
  const [ price, setPrice ] = React.useState([ '', '' ]);

  const onCountryChange = e => setCountry(e.target.value);
  const onSizeChange = ({ target: { checked, value } }) => {
    setSize((!size.includes(value) && checked)
      ? [ ...size, value ]
      : size.filter(n => n !== value)
    );
  };
  const onPriceChange = ({ target: { value, dataset: { index } } }) => {
    setPrice(price.map((n, i) => i === +index ? value : n));
  };

  const filteredGoods = goods.filter(n => (
    (!country || n.country === country) &&
    (!size.length || size.includes(n.size)) &&
    (!price[0] || price[0] <= n.cost) &&
    (!price[1] || price[1] >= n.cost)
  ));

  return (
    <div>
      <div className="filters">
        <CountryFilter value={country} onChange={onCountryChange} countries={countries} />
        <SizeFilter value={size} onChange={onSizeChange} sizes={sizes} />
        <PriceFilter value={price} onChange={onPriceChange} />
      </div>
      <GoodsList goods={filteredGoods} />
    </div>
  );
}

const DATA = [
  {
    "sex" : "male",
    "name" : "Cat",
    "cost" : 1000,
    "country" : "france",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/879900/img-56db87c2-dcea-4e8d-8ff3-d4f8646b80d1.png/optimize",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Koleco",
    "cost" : 1200,
    "country" : "turkey",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1357599/img-b7902be5-5bde-4d64-9125-1dfc1e377a9b.png/optimize",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Dog",
    "cost" : 1700,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1357599/img-28abd66c-e9d1-44ab-ab4b-2cf43b02a445.png/optimize",
    "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Dior",
    "cost" : 2000,
    "country" : "turkey",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1779479/img-8b711237-43ff-492a-bd81-3642c38dbcb1.png/optimize",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "YA.Alice",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1668019/img-b1d61df2-06bf-4dbc-ac76-c7cd5d67dbfc.png/optimize",
     "size": "XXL"
  },
  {
    "sex" : "female",
    "name" : "Acer",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1532570/img-9f32e069-1cd0-4c1d-9b1a-591f75809de5.png/optimize",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Chaynik",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1534436/img-1075382d-7fd3-4cbd-b866-45611f790b00.png/optimize",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Shetka",
    "cost" : 3500,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/944743/img-765543d4-ec5d-4476-a047-d9e379302565.png/optimize",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Stul",
    "cost" : 3500,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1779479/img-8b4fd5c7-10f0-4f0a-b78e-0c19e61ab372.png/optimize",
     "size": "L"
  },
  {
    "sex" : "female",
    "name" : "Metabo",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/1357599/img-2f61627b-1b97-4205-9036-8f5f7cb6a740.png/optimize",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Мяч",
    "cost" : 3500,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-marketcms/475644/img-712e5752-2894-4d0c-9b6e-58e297a5c9dc.png/optimize",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "AirPods Pro",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-mpic/3614670/img_id1271146742177048795.jpeg/300x300",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "USB to mini-j",
    "cost" : 3500,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-mpic/1592982/img_id9109949474157991773.jpeg/300x300",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Choco",
    "cost" : 3500,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-mpic/4936002/img_id782200899720255184.png/600x600",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "SSD Samsung",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-mpic/4377400/img_id2181900765745091829.png/600x600",
     "size": "S"
  },
  {
    "sex" : "female",
    "name" : "MacBook",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-mpic/4944925/img_id5544713746159542779.jpeg/600x600",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "SDcard",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-mpic/4367383/img_id4253851035534944205.jpeg/600x600",
     "size": "S"
  },
  {
    "sex" : "female",
    "name" : "Kinder",
    "cost" : 3500,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-mpic/4721581/img_id3673451531642467819.jpeg/600x600",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Bosch",
    "cost" : 3500,
    "country" : "china",
    "image" : "https://avatars.mds.yandex.net/get-mpic/1767151/img_id4310959726540952950.jpeg/600x600",
     "size": "XXL"
  },
  {
    "sex" : "female",
    "name" : "SSD Circular",
    "cost" : 3500,
    "country" : "Электроника",
    "image" : "https://avatars.mds.yandex.net/get-mpic/2017118/img_id5715898302707536998.jpeg/600x600",
     "size": "S"
  }
].map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render(<App goods={DATA} />, document.getElementById('app'));
















/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

