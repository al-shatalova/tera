const App = () => {
	return (
		<div className="wrapper">
			<Navbar />
			<TourList tours={DATA} />
			<Footer />
		</div>
	);
};

const DATA = [
	{ id: 0, city: 'New York', desc: 'New York Bridge Tour', price: 100000, imgPath: 'img1' },
	{ id: 1, city: 'Paris', desc: 'Paris Lights Tour', price: 200000, imgPath: 'img2' },
	{ id: 2, city: 'London', desc: 'London Royal Place Tour', price: 150000, imgPath: 'img3' },
	{ id: 3, city: 'Tokyo', desc: 'Tokyo Sushi Tour', price: 50000, imgPath: 'img4' },
];

const TourList = ({ tours }) => {
	return (
		<div className="tours-wrapper">
			{tours.map((tour) => (
				<div key={tour.id} className="tour">
					<img src={'assets/' + tour.imgPath + '.jpg'} alt="" />
					<div>
						<h3>{tour.city}</h3>
						<p>{tour.desc}</p>
						<span>{tour.price} ₽</span>
					</div>
				</div>
			))}
		</div>
	);
};

const Footer = () => {
	return <footer>Logo &copy; Lab9 | FIO</footer>;
};

const Navbar = () => {
	return (
		<header>
			<a href="#" className="logo">
				Logo
			</a>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Tour</li>
			</ul>
		</header>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
