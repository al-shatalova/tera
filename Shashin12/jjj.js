const Block = ({ HeaderTag = 'h2', headerText, className = '', children }) => (
  <div className={className}>
    <HeaderTag>{headerText}</HeaderTag>
    {children}
  </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
  <Block headerText="Country" className="country">
    <select onChange={onChange} value={value}>
      <option value="">-- Country --</option>
      {countries.map(n => <option key={n}>{n}</option>)}
    </select>
  </Block>
);

const SizeFilter = ({ value, onChange, sizes }) => (
  <Block headerText="Size">
    {sizes.map(n => (
      <label key={n} className="size">
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
  <Block headerText="Price">
    <PriceInput value={value[0]} onChange={onChange} index="0" />
    &nbsp;-&nbsp;
    <PriceInput value={value[1]} onChange={onChange} index="1" />
    &nbsp;usd&nbsp;
  </Block>
);

const GoodsList = ({ goods }) => (
  <div className="goodslist">
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
    "name" : "Кигуруми «Пикачу»",
    "cost" : 1690,
    "country" : "france",
    "image" : "https://nyapi.ru/thumb/2/9xphnN_htUaFwJB11zIPTg/350r350/d/16-design-spring-and-summer-short-sleeve-pajamas-costume-animal-onesie.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Кигуруми «Стич»",
    "cost" : 1200,
    "country" : "turkey",
    "image" : "https://nyapi.ru/thumb/2/N9O---3zSP8U9X9_SpYoMw/350r350/d/s1200_1.jpg",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Кигуруми «Риллакума»",
    "cost" : 1690,
    "country" : "china",
    "image" : "https://nyapi.ru/thumb/2/bBVfT0dwM1qxXFdimK5ADA/350r350/d/photo.jpg",
    "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Кигуруми «Лунная кошка»",
    "cost" : 2000,
    "country" : "turkey",
    "image" : "https://nyapi.ru/thumb/2/zLheXqwo5v7qZJuFDUG0jw/350r350/d/904cf9339c9294dda1f98913bf214cc4.jpg",
     "size": "XL"
  },
  {
    "sex" : "male",
    "name" : "Свитшот «Данганронпа»",
    "cost" : 4500,
    "country" : "Russia",
    "image" : "https://nyapi.ru/thumb/2/NxyorOKYSmz-XstxaMdnrQ/r/d/59951.jpg",
    "size":"XXL"
  },
  {
    "sex" : "male",
    "name" : "Толстовка «Атака Титанов»",
    "cost" : 3970,
    "country" : "Russia",
    "image" : "https://nyapi.ru/thumb/2/xkrITen8_yWRhAR9kJPu_g/350r350/d/71483.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Толстовка «Ванпанчмен»",
    "cost" : 2700,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/7wznBxY3FUa1jjVYbFMHpw/350r350/d/44094.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Толстовка «Наруто»",
    "cost" : 3970,
    "country" : "Poland",
    "image" : "https://nyapi.ru/thumb/2/UVXAbZ6283HxaS2zz7-OXA/350r350/d/70673.jpg",
     "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Футболка «Волейбол»",
    "cost" : 690,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/CPNXQ6Sm2NLHDcXKNDQpJQ/350r350/d/21_41.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Футболка  «Тетрадь Смерти»",
    "cost" : 690,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/K3rQBMy-j7Pg-QBXoS3UMA/350r350/d/95.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Футболка  «Наруто»",
    "cost" : 690,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/0hgYrgy9ydlHe3POLZG81g/350r350/d/82_118.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Футболка «ДжоДжо»",
    "cost" : 690,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/RDiWnLkkJUlcpXYsoMDceg/350r350/d/9_1880.jpg",
     "size": "XXL"
  },
  {
    "sex" : "male",
    "name" : "Аниме рюкзак  «Хеллсинг»",
    "cost" : 1470,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/vZPtnbchACOPG5-AaAOVSw/350r350/d/dsc0121_9.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Рюкзак по аниме «Блич»",
    "cost" : 1470,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/ZzsQDixhXTOLOyOx4THVlg/350r350/d/dsc0122_8.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Рюкзак   «Атака Титанов»",
    "cost" : 1470,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/JOQsKmkkQ078Hj-6dFGa7Q/350r350/d/dsc0127_7.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Рюкзак «Данганронпа»",
    "cost" : 1900,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/KxE5JDEmCPQchch7F0zz-A/350r350/d/1510_399.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Кепка Пикачу ",
    "cost" : 900,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/LNJa9rCkZ_6bGH1egTelgQ/r/d/dsc1638_0.jpg",
     "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Кепка  ДжоДжо",
    "cost" : 900,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/F6-P0N2WdnRRX_eK6UvP7w/350r350/d/13908_big.jpg",
     "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Кепка Андертейл",
    "cost" : 900,
    "country" : "Ukraine",
    "image" : "https://nyapi.ru/thumb/2/mH9SrptFPLNTsXZ3KSUbIA/350r350/d/dsc1637_1.jpg",
     "size": "S"
  },
    {
    "sex" : "male",
    "name" : "Кепка БТС",
    "cost" : 900,
    "country" : "Poland",
    "image" : "https://nyapi.ru/thumb/2/aZ2JDOsXsb7nQA8I7trftA/350r350/d/dsc1639_1.jpg",
     "size": "S"
  },
].map((n, i) => ({ ...n, id: i + 1 }));

 var slideIndex = 1;
        showSlides(slideIndex);

      
        function plusSlides(n) {
             showSlides(slideIndex += n);
          }

      
             function currentSlide(n) {
                 showSlides(slideIndex = n);
               }

           function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1} 
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
         }
          for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
           }
         slides[slideIndex-1].style.display = "block"; 
         dots[slideIndex-1].className += " active";
       }

ReactDOM.render(<App goods={DATA} />, document.getElementById('app'))