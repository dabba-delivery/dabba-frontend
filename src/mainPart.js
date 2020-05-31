import React from "react";

import Header from "./header.js";
import Menu from "./menu";
import SortBlock from "./sort";
import MapBlock from "./map";
import { Counter } from "./components/library.js";

// temp
export const place = {
    name: "Dodo Pizza",
    logoURL:
        "https://fontslogo.com/wp-content/uploads/2015/07/Pizza-Hut-Logo-Font-150x150.jpg",
    coords: {
        lat: 55.739741,
        lng: 37.652044,
    },
    radius: 0,
};
export default class MainPart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let coords = this.props.data.coords.split(",");
        place.name = this.props.data.name;
        place.logoURL = this.props.data.logoUrl;
        place.lat = coords[0];
        place.lng = coords[1];
        place.radius = this.props.data.serviceRadius;
    }

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
