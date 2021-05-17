class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};
          
        this.press = this.press.bind(this);
          
        console.log("constructor");
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()");
    }
}

const propsValues = {
    title: "Список группы",
    items: [
        "Студент 1", 
        "Студент 2", 
        "Студент 3", 
        "Студент 4", 
        "Студент 5", 
        "Студент 6"
    ]
};
              
class Item extends React.Component {
    render() {
        return (<li className="listItem">
            <svg xmlns="http://www.w3.org/2000/svg" className="userIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {this.props.name}
        </li>);
    }
}
         
class SearchPlugin extends React.Component{
             
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
             
    onTextChanged(e){
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }
             
    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged} />;
    }
}
                  
class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};
                          
        this.filterList = this.filterList.bind(this);
    }
             
    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        }); 
        this.setState({items: filteredList});
    }
              
    render() {
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul className="list">
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}
          
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)
