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
      <h1 className="header">Магазин всякой всячины</h1>
      <GoodsList goods={filteredGoods} />
    </div>
  );
}

const DATA = [
  {
    "sex" : "male",
    "name" : "Рубашка №1",
    "cost" : 1000,
    "country" : "france",
    "image" : "http://i.piccy.info/i9/9921ed03bf45751d45447b15e78be751/1566814909/19890/1334636/1.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Рубашка №2",
    "cost" : 1200,
    "country" : "turkey",
    "image" : "http://i.piccy.info/i9/acc4df9b14e48a42d7cd353e923673e7/1566814962/22015/1334636/2.jpg",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Рубашка №3",
    "cost" : 1700,
    "country" : "china",
    "image" : "http://i.piccy.info/i9/174610be67bfea39f99c956885ae3786/1566815027/25896/1334636/3.jpg",
    "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Рубашка №4",
    "cost" : 2000,
    "country" : "turkey",
    "image" : "http://i.piccy.info/i9/e2e5c6cb274121b9898b7d45a085130f/1566815049/29582/1334636/4.jpg",
     "size": "XL"
  },
  {
    "sex" : "male",
    "name" : "Цепь Арго",
    "cost" : 10000,
    "country" : "Russia",
    "image" : "https://cs5.pikabu.ru/post_img/2015/09/06/8/1441547004_684543769.jpg",
     "size": "XXL"
  },
  {
    "sex" : "male",
    "name" : "Супер тапок",
    "cost" : 500,
    "country" : "Russia",
    "image" : "https://icdn.lenta.ru/images/2018/06/16/17/20180616171527840/preview_a49807be93c9bf8cedf801d1321ee1a9.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Рубанок",
    "cost" : 50,
    "country" : "Ukraine",
    "image" : "https://www.castorama.ru/media/catalog/product/cache/image/1800x/040ec09b1e35df139433887a97daa66f/1/e/1e2ef2_544259_1.jpg",
     "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Рубильник",
    "cost" : 10,
    "country" : "Poland",
    "image" : "https://kabelprovod161.ru/image/cache/catalog/bda88d595a1d9cefac99cd90e5c34a7c-1200x800.png",
     "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Рубильник",
    "cost" : 10,
    "country" : "Poland",
    "image" : "https://kabelprovod161.ru/image/cache/catalog/bda88d595a1d9cefac99cd90e5c34a7c-1200x800.png",
     "size": "M"
  },
].map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render(<App goods={DATA} />, document.getElementById('app'));