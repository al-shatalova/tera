class TodoApp extends React.Component {
  constructor(props) {
    super(props);
      if (this.props.value == "Home") {
            this.state = { items: [{text: "Купить хлеб", id: 0, status: "checked"}, {text: "Повесить телевизор", id: 1, status: "checked"}], text: '' };
      } else if (this.props.value == "Job") {
        this.state = { items: [{text: "Подготовить отчеты", id: 0, status: "checked"}, {text: "Собрание 25.07 в 16:00", id: 1, status: "checked"}], text: '' };
      } else if (this.props.value == "Education") {
        this.state = { items: [{text: "Подготовиться к зачету", id: 0, status: "checked"}, {text: "Начать писать диплом", id: 1, status: "checked"}, {text: "Поправить удаление дел из списка", id: 2, status: false}], text: '' };
      } else if (this.props.value == "Chill") {
          this.state = { items: [{text: "Спланировать отпуск", id: 0, status: "checked"}, {text: "Купить билеты", id: 1, status: "checked"}], text: '' };
      } else{
          this.state = { items: [], text: '' };
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo"> 
          </label>
          <input
            placeholder={this.props.value}
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Добавить
          </button>
        </form>
      </div>
    );
  }

    

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
    
  

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: this.state.items.length,
      status: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
     constructor(props) {
     super(props);
     this.handleDel = this.handleDel.bind(this);
  }
     handleDel(e) {
        delete this.props.items[e.target.id];
        this.setState({ text: e.target.id });
  }
  render() {
    return (
      <ul>
        {this.props.items.map(item => (<li>
                <label class="ios7-switch">
                    <input type="checkbox"></input>
            <span></span>
          <span> {item.text}</span>
               </label> <button class="btn" id={item.id} onClick={this.handleDel}></button></li> 
        ))}  
      </ul>     
    );
  }  
}
ReactDOM.render(
  <TodoApp value="Home" />,
  document.getElementById('home')
);

ReactDOM.render(
  <TodoApp value="Job" />,
  document.getElementById('job')
);

ReactDOM.render(
  <TodoApp value="Education" />,
  document.getElementById('ed')
);

ReactDOM.render(
  <TodoApp value="Chill" />,
  document.getElementById('chill')
);


const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
    });
  }