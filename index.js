import React from 'react';
import ReactDOM from 'react-dom';
import Post from "./Post";

ReactDOM.render(
    <React.StrictMode>
        <div className="centered">
            <Post post_url="http://brightmagazine.ru/old-move/"
                  img="http://brightmagazine.ru/wp-content/uploads/2022/02/Amelie-1052-600x400.jpg"
                  title="Пять фильмов, которым более 20 лет, но в это сложно поверить"
                  content="Есть фильмы, над которыми время не властно, ведь они могут оставить неизгладимый след в наших сердцах. Года бегут, а эти фильмы заслуженно называются представителями современной классики. Сегодня мы собрали для вас пять из них, читая названия которых, вы сильно удивитесь, что им в 2021 году исполняется более 20 лет.   "
            />
            <Post post_url="http://brightmagazine.ru/karden/"
                  img="http://brightmagazine.ru/wp-content/uploads/2021/02/pexels-anna-shvets-5019924-600x400.jpg"
                  title="Четыре идеи Пьера Кардена, которые изменили мир моды"
                  content="29 декабря в возрасте 98 лет скончался знаменитый дизайнер Пьер Карден, который придумал одежду пре-а-порте, сделал ставку на мини-юбки и футуристическую эстетику, заставив весь мир говорить о себе. Сегодня вспомним некоторые из его идей, которые изменили мир моды.  "
            />
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);