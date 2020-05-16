import React from "react";
import "./sort.css";

// внутри каждой кнопки сортировки есть func - сюда нужно
// вставлять функцию сортировки от компонентов выше
// позже выведу

export default class SortBlock extends React.Component {
    render() {
        return (
            <div className="sort">
                <h5 className="sort__text">Показать</h5>
                <SortButton name="Новинки" func={() => alert("It works")} />
                <SortButton name="Популярное" func={() => alert("It works")} />
            </div>
        );
    }
}

class SortButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.func();
    }

    render() {
        return (
            <button onClick={this.handleClick} className="sort__button">
                {this.props.name}
            </button>
        );
    }
}
