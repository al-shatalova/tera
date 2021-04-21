const Block = ({ HeaderTag = 'h2', headerText, className = '', children }) => (
  <div className={className}>
    <HeaderTag>{headerText}</HeaderTag>
    {children}
  </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
  <Block headerText="Country">
    <select onChange={onChange} value={value}>
      <option value="">-- Country --</option>
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
  <Block headerText="Price">
    <PriceInput value={value[0]} onChange={onChange} index="0" />
    &nbsp;-&nbsp;
    <PriceInput value={value[1]} onChange={onChange} index="1" />
    &nbsp;usd&nbsp;
  </Block>
);

const GoodsList = ({ goods }) => (
  <div className="goodlist">
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
    <div className="form">
      
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
    "name" : "Майка №1",
    "cost" : 750,
    "country" : "russia",
    "image" : "https://kinash.ru/upload/iblock/ab7/ab747d4346fc917e7b56584793e07214.jpg",
     "size": "S"
  },
      {
    "sex" : "male",
    "name" : "Майка №2",
    "cost" : 950,
    "country" : "russia",
    "image" : "https://yooi.ru/userfiles/shop/itemimages/small/307891620190312181514.jpg",
     "size": "XXL"
  },
        {
    "sex" : "male",
    "name" : "Майка №3",
    "cost" : 1000,
    "country" : "russia",
    "image" : "https://svitshoty.ru/wa-data/public/shop/products/79/16/341679/images/837015/837015.750x0.jpg",
     "size": "XXL"
  },
      {
    "sex" : "female",
    "name" : "Майка №4",
    "cost" : 880,
    "country" : "russia",
    "image" : "https://basket-planet.ru/wa-data/public/shop/products/59/99/39959/images/40264/40264.970.jpg",
     "size": "XXL"
  },
      {
    "sex" : "male",
    "name" : "Майка №5",
    "cost" : 950,
    "country" : "russia",
    "image" : "https://svitshoty.ru/wa-data/public/shop/products/19/34/343419/images/838755/838755.750x0.jpg",
     "size": "M"
  },
      {
    "sex" : "male",
    "name" : "Майка №6",
    "cost" : 1100,
    "country" : "russia",
    "image" : "https://sun9-14.userapi.com/5iRei95bfNnJ3NGk_dOhXAl0JLKeHokXK-feCw/7mCqK9ud7Dk.jpg",
     "size": "XL"
  },
     {
    "sex" : "male",
    "name" : "Шорты №1",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://dealsport.ru/assets/images/products/45758/201809080013191.jpg",
     "size": "XL"
  },
       {
    "sex" : "male",
    "name" : "Шорты №2",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://dealsport.ru/assets/images/products/45758/201809080013191.jpg",
     "size": "XL"
  },
       {
    "sex" : "male",
    "name" : "Шорты №3",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://dealsport.ru/assets/images/products/45758/201809080013191.jpg",
     "size": "XL"
  },
       {
    "sex" : "male",
    "name" : "Шорты №4",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://dealsport.ru/assets/images/products/45758/201809080013191.jpg",
     "size": "XL"
  },
       {
    "sex" : "male",
    "name" : "Шорты №5",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://dealsport.ru/assets/images/products/45758/201809080013191.jpg",
     "size": "XL"
  },
       {
    "sex" : "male",
    "name" : "Куртка №1",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://sportride.ru/image/cache/catalog/images/tovary/sportivnayaodezhda/kurtki/kurtki-uteplennye/nike/645905-010-800x800.jpg",
     "size": "XL"
  },
         {
    "sex" : "male",
    "name" : "Куртка №2",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://sportride.ru/image/cache/catalog/images/tovary/sportivnayaodezhda/kurtki/kurtki-uteplennye/nike/645905-010-800x800.jpg",
     "size": "XL"
  },
         {
    "sex" : "male",
    "name" : "Куртка №3",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://sportride.ru/image/cache/catalog/images/tovary/sportivnayaodezhda/kurtki/kurtki-uteplennye/nike/645905-010-800x800.jpg",
     "size": "XL"
  },
         {
    "sex" : "male",
    "name" : "Куртка №4",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://sportride.ru/image/cache/catalog/images/tovary/sportivnayaodezhda/kurtki/kurtki-uteplennye/nike/645905-010-800x800.jpg",
     "size": "XL"
  },
         {
    "sex" : "male",
    "name" : "Куртка №5",
    "cost" : 500,
    "country" : "russia",
    "image" : "https://sportride.ru/image/cache/catalog/images/tovary/sportivnayaodezhda/kurtki/kurtki-uteplennye/nike/645905-010-800x800.jpg",
     "size": "XL"
  },
].map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render(<App goods={DATA} />, document.getElementById('app'));
