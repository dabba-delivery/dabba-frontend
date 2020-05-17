import React from "react";

import Header from "./header.js";
import Menu from "./menu";
import SortBlock from "./sort";
import MapBlock from "./map";



export default class MainPart extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: "#f7f7f7",
                }}
            >
                <Header data={this.props.data} />
                <MapBlock />
                <SortBlock />
                <Menu dishes={this.props.data.dishes} />
            </div>
        );
    }
}
