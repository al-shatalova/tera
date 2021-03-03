class WishList extends React.Component {
    render() {
      return (
        <div className="bth-list">
          <h1>Список пожелашек на {this.props.name}</h1>
          <ul>
            <li>Наушники</li>
            <li>Телефон</li>
            <li>Курс по исскуству</li>
          </ul>
        </div>
      );
    }
  }
  
ReactDOM.render(
    <WishList name={'ДР'}></WishList>,
    document.getElementById("app")
)
