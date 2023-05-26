import React, {Component} from "react";

class AboutApp extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>О приложении</h1>
                    <p>
                        Это приложение «Список дел» версии 0.0.1.
                        Это часть учебного курса веб-разработки в рамках прохождения изучения React.js
                    </p>
            </React.Fragment>
        );
    }
}

export default AboutApp;