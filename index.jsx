const userClass = "user-info col-md-8 mx-auto " +
    "d-flex flex-row bd-highlight mb-3";
const userFieldsClass = "p-2 bd-highlight"
const styleDiv = {
    fontFamily:'Verdana',
    borderRadius: '50px',
    boxShadow: '0 0 5px rgba(122,122,122,0.5)'
};


const menu = {
    homePage : "Home page",
    guidelines: "Guidelines",
    about: "About",
};

function MenuBar() {
    return <div className={userClass}  style={styleDiv}>
        <div className={userFieldsClass}>{menu.homePage}</div>
        <div className={userFieldsClass}>{menu.guidelines}</div>
        <div className={userFieldsClass}>{menu.about}</div>
    </div>
}

var MainText =() => {
    return (
        <div>
            <h1>Spring Boot with Maven</h1>
            <p className="lead">Spring Boot provides a spring-boot-starter-security starter that aggregates Spring
                Security-related dependencies together. The simplest and preferred way to use the starter is to use
                Spring
                Initializr by using an IDE integration (Eclipse, IntelliJ, NetBeans) or through
                https://start.spring.io</p>
        </div>
    );
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Вы находитесь на этой странице: {this.state.seconds}
            </div>
        );
    }
}


ReactDOM.render(
    MenuBar(),
    document.getElementById("app")
);

ReactDOM.render(
    MainText(),
    document.getElementById("mainTextId")
)

ReactDOM.render(
    <Timer/>,
    document.getElementById("infoDiv")
)


