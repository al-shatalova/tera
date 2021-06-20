class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', count: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col s12 m12 l12">
            <h3 class="light">Трекер ваших задач</h3>
            <TodoList items={this.state.items} />
            </div>
        </div>
        <div class="row">
          <div class="col s12 m12 l12 card grey lighten-5">
            <div class="card-content">
            <span class="card-title">Новая задача</span>
            <span class="grey-text">Введите сведения о новой задаче</span>
            <form onSubmit={this.handleSubmit}>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button class="btn purple white-text waves-effect waves-light">
                <i class="material-icons left">add</i>
                Добавить #{this.state.items.length + 1}
              </button>
            </form>
            </div>
          </div>
        </div>
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
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div class="row">
        {this.props.items.map(item => (
          <div class="col s12 m12 l12 card grey lighten-5 hoverable">
            <div class="card-content">
              <span class="card-title purple-text">Задача #{item.id}</span>
              {item.text}
            </div>
            </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);
