const Block = ({ HeaderTag = 'h2', headerText, className = '', children }) => (
  <div className={className}>
    <HeaderTag>{headerText}</HeaderTag>
    {children}
  </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
  <Block headerText="Бренд">
    <select onChange={onChange} value={value}>
      <option value="">По брендам</option>
      {countries.map(n => <option key={n}>{n}</option>)}
    </select>
  </Block>
);

const SizeFilter = ({ value, onChange, sizes }) => (
  <Block headerText="По размеру">
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
  <Block headerText=" По цене">
    <PriceInput value={value[0]} onChange={onChange} index="0" />
    &nbsp;-&nbsp;
    <PriceInput value={value[1]} onChange={onChange} index="1" />
    &nbsp;rub&nbsp;
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
    "name" : "Джинсы",
    "cost" : 1000,
    "country" : "О'stin",
    "image" : "https://img.shopsy.com.ua/i/p/98/b0/98b0d4922eebcb2d22cb10027a9171a8_medium.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Брюки",
    "cost" : 1200,
    "country" : "oodji",
    "image" : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8QEBAPDw8QDw8PDxUPDg8PDxAVFREWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0dFR8rKy0tLSstLS0rLS0tLS0tLS0rLS0tLS0rLSstKysrLS0tLTc3LTctNy0rKy0tNy0rK//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHAwUGBAj/xABIEAACAQMABAoFBwkHBQAAAAAAAQIDBBEFEiExBgciQVFhcYGRwRMUUqGxIyQyQnKSsjNiZHOCorPC0TRDU2N0o+EVNUTw8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgMAAgIDAQAAAAAAAAABAjEDESESMgQiM0FRE//aAAwDAQACEQMRAD8AsMRIQCDAwAiBIQCK64xdGOnJ14LkVYyU+qaXmvgWMa3hHYesWteljMnTbh9pbY/Arnj3GnFn8cu2x0bH5O1n00Y/gibx7V2Gtt7d07e2hvdOnTi+6GGbGnLYn1G0ZXbHXhlJr6UXleaMyxOKY8EKS1XjmYQdOfMyZGrDnIIDI2QcWw2k4yAkthgnNyerHdzscpOT1VsXOzLCCisIDzXsFGm4rn39201BubhZfUkahorVo5ThrRw6FVfnU3+JeZrdfkZ5sI6HhhS1rVvnhUpyXfLVfukctGb9FPONkWzh55+z0/xL3g2vAWny7h9UI+9s645jgEs0q8ud1UvCC/qdQdHFOsI4vyL3yUgGM1YpiJCICAYMCIDABDgstLrQCdxCly6jcYLe9WUsduEINtVSwkOhsyubejUw4WaNk3H120TW9TrQg13SPfbX9vU2069Gf2K1OS9zNFXr3A2Tik9zz2bR6gCTISiTUAcWBBEJvmW8yST5gp0sbXvAcI6qwEpJbyTRB0k3t2geWdVNS37d2x4NdNbX2m3uqsILM5Rgl7coxXvNNG4p1czpThUg20pU5Kccp4ayusipjwaehrWtdf5cn4bfI4ydPFKT3tx3Hb6aWbeulvdOSRyl7shLCxhYRxfk7j0fwtVs+AkMW8/1z/BE6Q0XAyjq2zfNKrNrsWI/FM3xvx/WOTm/kpAMDRkkAwICEMAEIkIBEkIEBS3GnKL0lNYwo0KCeEltak23je9q8Dj1Sg/qw74xz8Dp+MetraUu/wA10afhRg/5mc2jqxnjO316bWvUp/k6k6a/y6k6f4WjbUOFWkKaShe3K7a05fiyaaCXQDgW6iO3U0uMLSsF/bJy+3ToS/kPXS41dLR2Opaz+1a7f3Zo4hwFqkfCf4ntYMeNzSSim6djJuUl+RrRWEl0VOsVXjZ0pqxlixjrZ2K1rPGH0uqcLO3lq0sLKkpvY9i5S39C3bzJer6EW/oQjF825JeOEinxlT3XS3HGjpWf/kU4fqbanH3y1jVXXDDSdZNTvLjD6Kno/wAGDS+kit20lrMv8YjtGs5VJa1T5SWN9RupLxllly8Vk86PS9mtWXZlp+bKbLj4qmvUGudV6mevZFlOSfqmbbrTV1hwo+0tefYns8Wvcam6p5T2bzLpaS9bqZlyvQ0cLoXL80zz2F7CtGSjt1ZSi+54PK5vcnrfjz44RuODMvkHD2Kk14vW8zbmh4Oy1alWGd6Ul3PHmb86uK94xw8865KQiQF2SQDABCJCAQiQsAIMDBAfP/DWrr6Rvpb07iSX7MYw/lNOj38JH88u3+k3H8WRr4yOuaZV6IoTZHOzeRkpe0/cWQcpyMTqNbyM889THbqoyaN0fVuqjp0M1ZqE6rSwkowWZPPh4orcuk9M9xeyShCMsasUty2PqZ5G4fWm2zzSrRbzJN56zJTuKS+rj3lZYtXohOP1Yyfdgnl+zjvIRrQlueO3YTcOh57y6ojvLg4pl8yqf6iX4IFPxLq4raeNHRftVqz8JY8inJ9U47T4Qyj62ovGfVo9r+UnjzDSdhTt6tJ0aapxnSq66gsJuLjhvrxJkeFkIU68a0tXXdvqUk6kYObjOTccP7S2mtnpqrWTncRp0nhwoxg5PY8Ntt73sXgebyeXJ6nFLZhZqdtxwajKdSdR7FHW79bYl4LPgdKa/QFq6dFOSxObc5JrDWdkV91I2Jtx49YuTmz+WdpAPAGjFIAYEJIAYAAAACAYAfOnCVYvLtdFzcfxZGuija8Lo6t/erouq3vm35mrgdc0yTwKUV0DyBYY3Tj7K8Cx+J7RalUuq8ksKkrZPo13rT90Y+JXe3ZheSL24vNFu20fRUl8pVzXqbMPM9sV3Q1V3GXLeotioHSVk6NevRlvpValJ719Cbjnvwn3mGnFHbcbOjlR0jKaWy5pQq8+2WNSX4V4nForjorLHsJKK5tnYKCJpGsQnBF7cXFLV0Zbfnemn96rPBRVPm7S/wDgNT1dGaPX6JRk/wBqOt5lOXScdsenODfrVenWdVxVOGoo6iaWW22n0vZv6D1WGgKFF62r6Sp7VTEmvsrdHuNsBy/Gd9tv+mXXx78RwGCQF2aOAHgYEWAAQkgAAAAAIAAASoHh9T1dJ36/z4y+9Rpy8zQwOr406ajpOs/bpW8n26mP5UcpFHVjqM7tkAQ0WQ9+g7P1i5t6HNVr0oS+y5LX/dUj6KSS2LYlsXUUdxb0dfSVt+Z6Sfeqcv6l5Iw5r6virLjsss07Kus8ipVoy6MTUZLPfTfiVNgvjjVt/SaMqv2KlCf+4k/dIohraMNFZIInsIxJI2iqWHh4383afSmjKCp0KFNLChRpQS6NWCR876Gt3UuLen7dejHxqRR9JYMuW6TiQDAxWIBgAgGAEBAIJMQAADIjAYCAClONjH/Up/qLfPbiX/ByCN/xg1nPSd63zVo011KFCmvjnxNBE6cNRndpIYCNEO24pqDlf6yXJp0KspPoctWMfHb4MuVFccTNpild1+edSlRXZTi5fGo/Asc5uS95L46c/wAYFPW0Xf8A5tvKa7YNS8j57lvZ9F8M/wDtukf9FdfwpHzrU3scZU4mRrBjgZVtN4pW94CQUtJ2Ce71jPhTnJe9I+gChOL+GdKWOOatNvsVCqy+jHl2viYABkkAAAAAAGIQAEgAEwHkMkQAlkCIwPn3hdV9JfXkum5rbn0TcfhFGpidxxu04K9pasIxnKgpVHFYc3rNJy6XhHDxZ04XuM7tNkUSyiGuk8vct5dC5uKSOLBvGM3FX3KK8jtjRcCrJ0NH2kJR1ZujGpUT3qdTlyz3yN2cmW2keLT9p6e0uqOceltq9NPo1qbSPmtyzh9KT9x9QTWU10prxWD5n0jZyoVJ0ZZUqU5U5Z35i8eRfBFYqT6dxnWOY81NmXWa5jaVWrL4ntEqVSveP+6+b0/tSipTf3XFd7LUK04ndIrVubbnclcx+7GnJfuxfeWUY8n2Wx0kBEDNKQCGAAAAYAAQSYgyIgMQAADECYFE8YGlvWb6vJLEafzen04pyabfbLW7sHOI9+mHF3FeS+i69eUevNWTXuPBnJ1SeM6cXtR0fAjgzU0hXTwlb0ZxdeT5+fUiueTx3J5ObZbHE1P5vdrm9YhLvdKKf4SM71CbWGiRDI8nO0SR848KrlVby7qR3Sua3uqNeSPo1M+dOFNKCvrxU/yfrNXV+89b97W9xfDaK1dNqWx7zPBvDW8wSl0DhUlF5aNpVK77igt5yvp1PqU7aopds5RS/Cy48le8Tmq7e7kly/WYxb/NVGDivGU/EsDJjyfZbHSWQEMolLIEQAkBHIAYsiyLIgk8hkiGSA8hkjkMgSFVfJk+iL+AsintTXSmvcB831pZk31v4mPBluIOM5rnUpJ+JjOpmGthYnE1Vl6W7hnkeipza5sqbSfgyvEWbxOUMK8n10YeGs/NEcn1JtZQxAczQqk1GMpPYoxcnncsLJ81XNXXnKXtzlP70s+ZefGLV1dG3W3GuqdN42ZUqkU13rJRMZM141ckcGWnhppi1uoIvqZsqsriWuMeu0c/4NX8UX7lEtFFUcT1CTuLmovoqhCL7ZT2fhZaxhnP2XmksjIgUSYAADAAA84mwIgPIhAQGLICbAMjTINkVID5+0v/AGi4/XVfxs8Z6tI/lqye9VaqfaqkkeU6ozMtXiefze7fP6zH+BD/AJKqLU4nl83u3+kxX+xD+pHJ9U47WBkeSIznXcfxr1MaP1c41riivBuXkUuW1xw1cW1rD2rlt9ajSl5tFSm2GlanBk0Yosz01uNIrVwcU1ooWMqmOVWuKkn2QShFdnJb72dsaDgLQ9Ho60XTT1/vycvM3xz5Xu1eaSAQyoYAASAACUPOJk2iLRCUGIk0IBEWSZFgRZFkmRZAojhNT1Ly6XRcV/fNyXukjVtG/wCHdPV0jeLH0qlOa7JUIeaZoorcdOOozol0FucVFs4WMpvK9NcVKi2Y5MYxpp9+o2VFN4Un0Jv3H0DoW0jQt6FKONWnSpxWOfkrL8SvLU4tgmSRBE0Yrqs45LlutaUluhRrVH0ZnKKXuhIro7HjPruekaizsp0qVPs5Ot/Ocfg3xnilCR6Iy1YuXRFy8FnyMUUeywoekq0qbWVUrUaWOnXqRT92S889RX0Loy39FQo0/wDDo04eEEj1De9jwcy5IYYHgBCJAEkAwCGNoi0ZnEi0QMLRFoytEWgMLQmibQmgMbRDBlaDVCVMcZkcaQq9dC3l8V5HKQlzHZcaySvlt2yt6OexSnj4nFZjzNeJvj5FK9Tjldqwy8OBt76extp5y/RqnL7VPkP4FFU6yWzK8S0OKW+UqdxQ1s6s41oLoU1qyx1Zin+0OTqzsx8qwEyaIpE4LcYLqG4a1/SX97LOfnEoL9hKHxT8DRpHq0pV17i5n7Vzcy8a035nn1dh0zShax0nAS29LpGyXMqjqyz0QjJr4I51LmO74o7XX0hVnzULWS76k4xXujPxGXkR/a4Eh4JJDwc66OB4HgeAI4DBLBJIJY8AZMAEINCaMuBYAwuJBxPRgi4geWSIs9EoGGcCBACEmR9IBWXHBo75W3rpLl0p05OWxch5W3sk/Ar2NpB73S7m15H0bUtqdxinVpwqxb3ThGa6M4fVk2cNFW+FT9DRUEtkfQ08dyx1F8b4PmOVnD2qb73/AELG4o9Davp7rHJwqFNr6MtqlNp8+OSu3PQWq9CWqT+bW+Nv9xT/AKGClbRhFRhGMIr6KilGK7EicshhFOWE30Jv3GSpE88p4M0vnCrN72nt2+JFXK3PK7UbzSOgq7vqtrRpupJ3FSNJRWxxlJyjv3JRa27thDSnBm7tW4V6MoNLLahUqUmulTjFxx3m/avTU5b3YfYWzxNWeI3lfG2cqNLq5MXJ475lSxt2uVHVa6actaPgX9xaWSpaMtX9atB3Eu2o8pd0dVdxGd8JPXTpDwNIeDJKOAwSwAEcDAYCAYwAMDABYFgkAEHAjKkZcDwB4qlvk8Veg0brBCpTWAPBoag8ym9y2LzNrTe/HueUQoQ5KS2LqMkIJc3jKT8xASfJb6nzPzPKo7D1VVsfXsMaiB4a0DXXDwbydLJr7vR7e4hLWaG0TRVxO81flpw9E292rs2pdeEu46WlTjHMoqMcrlYSWV19nmaqykopRlsa2f8A021CWUTKhynC/gTQvYSdONK3uXiUK0IKLbT2qSX0k14HQWNsqVOnTj9GnCNNc2yMUl8D2zzhZzs+y8mKLTzjm38zRNDBjEQAAEAAAAABgCRMB4AgIB4DACAeB4ARGccprdlE8BgDBbTcdktjW/O59aPX6XZ9UxjUV0LwRCUJtv8A92DJMjgkAwAIeO+sFU2xbjPpXP29ItH1HGKUsay343bD3JmOpQT2rky6V5ojpLPHVfQE4pc/ga6frcPoRtqi6Z1KtN+CjL4mN+vy3u0prnwq1V+/VHZ09yeR4CnBpJN5fO8Yz1ksEoRwLBPAYJEMBgngMAQwBPAgGAgIDAAAYAAAAASAYAQAiAAMAABIkAAMAAJIAAIIAAAAAAAAAP/Z",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Джинсы сс",
    "cost" : 1700,
    "country" : "nike",
    "image" : "data:image/jpeg;base64,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",
    "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Джинсы от бога",
    "cost" : 2000,
    "country" : "Gap",
    "image" : "data:image/jpeg;base64,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",
     "size": "XL"
  },
  {
    "sex" : "male",
    "name" : "Узкие джинсы",
    "cost" : 1850,
    "country" : "beefree",
    "image" : "https://cdn.anscommerce.com/image/tr:h-550,w-415,cm-pad_resize/data/celio/2d-images/NORABO_NAVY_1.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Мешок",
    "cost" : 2000,
    "country" : "adidas",
    "image" : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/h_373,q_80,w_280/v1/assets/images/5387860/2019/12/4/5da10a2f-8120-488e-acc3-fd353940ec201575437800181-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Regular-Trousers-93715754-1.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Красота",
    "cost" : 1500,
    "country" : "Puma",
    "image" : "https://img.shopsy.com.ua/i/p/4a/4e/4a4ec3eb4d99f9a4971709eb5d382866_medium.jpg",
    "size": "XXL"
  },
].map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render(<App goods={DATA} />, document.getElementById('app'));
