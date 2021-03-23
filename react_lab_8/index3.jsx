class ClickButton extends React.Component {

            constructor(props) {
                super(props);
                this.state = {class: "section-btn-1", label: "CLICK"};

                this.press = this.press.bind(this);

                console.log("constructor");
            }
            componentWillReceiveProps(nextProps) {
                console.log("componentWillReceiveProps()");
            }
            componentWillMount(){
                console.log("componentWillMount()");
            }

            press(){
                var className = (this.state.class==="section-btn-1")?"section-btn-2":"section-btn-1";
                this.setState({class: className});
            }
            render() {
                console.log("render()");
                return <button class="section-btn-1" onClick={this.press} className={this.state.class}>{this.state.label}</button>;
            }
       shouldComponentUpdate(){
                console.log("shouldComponentUpdate()");
                return true;
            }
       componentWillUpdate(){
                console.log("componentWillUpdate()");
            }
       componentDidUpdate(){
                console.log("componentDidUpdate()");
            }


        }
        ReactDOM.render(
            <ClickButton />,
            document.getElementById("app1")
        )


 class Clock extends React.Component {
             constructor(props) {
               super(props);
               this.state = {date: new Date()};
               this.unmount = this.unmount.bind(this);
             }
             unmount(){
                 ReactDOM.unmountComponentAtNode(document.getElementById("app2"));
             }
             componentDidMount() {
               this.timerId = setInterval(
                 ()=> this.tick(),
                 1000
               );
               console.log("componentDidMount()");
             }

             componentWillUnmount() {
               clearInterval(this.timerId);
               console.log("componentWillUnmount()");
             }

             tick() {
               this.setState({
                 date: new Date()
               });
             }

             render() {
               return (
                 <div>
                   <h2>Текущее время {this.state.date.toLocaleTimeString()}.</h2>
                   <button class="section-btn-1" onClick={this.unmount}>HIDE</button>
                 </div>
               );
             }
           }
           ReactDOM.render(
               <Clock />,
               document.getElementById("app2")
           )


 const propsValues = {
     title: "Список группы",
     items: [
    "Demosthenes Akinyi",
    "Cihan Cecilia",
    "Seanna Renard"
     ]
 };

 class Item extends React.Component {
     render() {
         return <li>{this.props.name}</li>;
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
         return <input class="input" placeholder="Поиск" onChange={this.onTextChanged} />;
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
                 <ul>
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