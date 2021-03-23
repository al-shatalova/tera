class Hello extends React.Component {
  render() {
    return <div>
            <h2>Name: {this.props.name} <br/>
            Age: {this.props.age}</h2>
    </div>;
  }
}

ReactDOM.render(
              <Hello name="Alexandr" age="21" />,
              document.getElementById("bt")
              )


class ClickButton extends React.Component {
             
           constructor(props) {
               super(props);
               this.state = {class: "section-btn-1", label: "Press"};
                 
               this.press = this.press.bind(this);
           }
           press(){
               let className = (this.state.class==="section-btn-1")?"section-btn-2":"section-btn-1";
               this.setState({class: className});
           }
           render() {
               return <button class="section-btn" onClick={this.press} className={this.state.class}>{this.state.label}</button>;
           }
       }
         
       ReactDOM.render(
           <ClickButton />,
           document.getElementById("bt2")
           )