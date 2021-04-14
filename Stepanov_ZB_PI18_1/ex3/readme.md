# Лабоаторная работа №3. Основы JSX

### Контрольные вопросы

1. Чем JSX отличается от JS?

> *JSX это JS код вместе с тегами HTML. JSX преобразуется в JavaScript транслятором (babel, typescript). JSX улучшает читабельность HTML кода. Ниже есть пример:*
```
//without JSX
render() {
    return React.createElement('div', { className: 'block'}, 'Text of block');
}

//with JSX
render() {
    return <div className='block'>
        Text of block
    </div>;
}
```

### Дополнительные задания

1. [Изменить стиль реакт-компонентов и добавьте новые на html-страницу](extra "Изменить стиль реакт-компонентов и добавьте новые на html-страницу")