# Дополнительные задания
## Изменить стиль реакт-компонентов и добавьте новые на html-страницу

#### Изменил сттили:
```
const styleObj = { 
    color:'darkblue',  
    fontFamily:'Tahoma',
    fontSize:40,
    fontWeight: 'bold'
}; 
```

#### Добавил вывод текущего времени с обновлением раз в секунду:

*Заголовок с временем*

`<h4>Current time: {new Date().toLocaleTimeString()}</h4>`

*Интервал обновления*

`setInterval(tick, 1000);`