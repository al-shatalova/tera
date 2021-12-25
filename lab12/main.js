const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main products={DATA}/>
		</div>
	);
}

const Header = () => {
	return (
		<header>
			<div className="upper_header">
				<nav>
					<a href="#">Главная</a>
					<a href="#">Мужчинам</a>
					<a href="#">Женщинам</a>
					<a href="#">Обувь</a>
				</nav>
				<div className="right_menu">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<div className="cartBtn">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
						</svg>
					</div>
					<div>
						Аккаунт
					</div>
				</div>
			</div>
			<div className="banner">
				<h1>Shop</h1>
			</div>
		</header>
	);
}

const Main = ({products}) => {

	const countries = React.useMemo(() => [...new Set(products.map(n => n.country))], [ products ]);
	const sizes = React.useMemo(() => [...new Set(products.map(n => n.size))], [ products ]);

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

	const filteredProducts = products.filter(n => (
		(!country || n.country === country) &&
		(!size.length || size.includes(n.size)) &&
		(!price[0] || price[0] <= n.cost) &&
		(!price[1] || price[1] >= n.cost)
	));

	return (
		<main>
			<div className="filters">
				<CountryFilter value={country} onChange={onCountryChange} countries={countries} />
				<SizeFilter value={size} onChange={onSizeChange} sizes={sizes}/>
				<PriceFilter value={price} onChange={onPriceChange} />
			</div>
			<div className="product_wrapper">
				<ProductList products={filteredProducts} />
			</div>
		</main>
	);
}

const CountryFilter = ({value, onChange, countries}) => {
	return (
		<div className="country-filter">
			<h3>Страна производитель</h3>
			<div>
				<select value={value} onChange={onChange}>
					<option value="">Все страны</option>
					{countries.map(item => <option key={item}>{item}</option>)}
				</select>
			</div>
		</div>
	);
}

const SizeFilter = ({value, onChange, sizes}) => {
	return (
		<div>
			<h3>Размер</h3>
			<div className="size-filter">
				{sizes.map(size => (
					<label className="size">
						<input type="checkbox" value={size} checked={value.includes(size)} onChange={onChange} />
						{size}
					</label>
				))}
			</div>
		</div>
	);
}

const PriceFilter = ({value, onChange}) => {
	return (
		<div className="price-wrapper">
			<h3>Ценна</h3>
			<div className="price-filter">
				<input type="number" onChange={onChange} value={value[0]} data-index="0" placeholder="от"/>
				-
				<input type="number" onChange={onChange} value={value[1]} data-index="1" placeholder="до"/>
				₽
			</div>
		</div>
	);
}

const ProductList = ({products}) => {
	return (
		<div className="product_list">
			{products.map(item => (
				<div key={item.id}>
					<div className="img_wrapper">
						<img src={item.image} width="100%" height="100%"/>
						<div className="buyBtn">
							<div className="icon-wrapper">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="product_info">
						<span>{item.country}</span>
						<p className="product_info--title">{item.name}</p>
						<p className="product_info--cost">{item.cost} ₽</p>
					</div>
				</div>
			))}
		</div>
	);
}





const DATA = [
	{
		"sex" : "male",
		"name" : "Мужская худи",
		"cost" : 1000,
		"country" : "france",
		"image" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ec51e9c-4f3e-4211-8d69-1bdf1803f4c5/%D1%85%D1%83%D0%B4%D0%B8-%D1%81-%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B5%D0%B9-%D0%B2%D0%BE-%D0%B2%D1%81%D1%8E-%D0%B4%D0%BB%D0%B8%D0%BD%D1%83-sportswear-tech-fleece-Rhmk1c.png",
		"size": "S"
	},
	{
		"sex" : "male",
		"name" : "Мужская худи",
		"cost" : 1200,
		"country" : "turkey",
		"image" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7fea3bbb-f6f4-42c1-b4a6-0846d88bd6d4/%D1%85%D1%83%D0%B4%D0%B8-%D1%81-%D0%BC%D0%BE%D0%BB%D0%BD%D0%B8%D0%B5%D0%B9-%D0%B2%D0%BE-%D0%B2%D1%81%D1%8E-%D0%B4%D0%BB%D0%B8%D0%BD%D1%83-sportswear-HPVcK0.png",
		"size": "M"
	},
	{
		"sex" : "male",
		"name" : "Мужской свитшот",
		"cost" : 1700,
		"country" : "china",
		"image" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c948345-46be-4f59-9a24-a338b9c15420/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D1%81%D0%B2%D0%B8%D1%82%D1%88%D0%BE%D1%82-%D1%81-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%BE%D0%B9-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-dri-fit-8bjQFD.png",
		"size": "L"
	},
	{
		"sex" : "male",
		"name" : "Мужская флисовая худи",
		"cost" : 2000,
		"country" : "turkey",
		"image" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e410edc-7f16-4d5b-b1d5-a8a5d06a0377/%D1%84%D0%BB%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D1%8F-%D1%85%D1%83%D0%B4%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D1%80%D0%BE%D1%8F-sportswear-kz857l.png",
		"size": "XL"
	},
	{
		"sex" : "male",
		"name" : "Мужской флисовый свитшот",
		"cost" : 2100,
		"country" : "russia",
		"image" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17359b16-3577-4d3e-a5db-485a88377032/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D1%84%D0%BB%D0%B8%D1%81%D0%BE%D0%B2%D1%8B%D0%B9-%D1%81%D0%B2%D0%B8%D1%82%D1%88%D0%BE%D1%82-sportswear-swoosh-hbVzwc.png",
		"size": "XXL"
	}
].map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render(<App />, document.getElementById('app'));