import React from "react";

import Header from "./header.js";
import Menu from "./menu";
import SortBlock from "./sort";
import MapBlock from "./map";

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
        const { data } = this.props;

        let coords = data.coords.split(",");
        place.name = data.name;
        place.logoURL = data.logoUrl;
        place.lat = coords[0];
        place.lng = coords[1];
        place.radius = data.serviceRadius;
    }

    render() {
        const { data } = this.props;

        return (
            <div
                style={{
                    backgroundColor: "#f7f7f7",
                }}
            >
                <Header data={data} />
                <MapBlock />
                <SortBlock />
                <Menu dishes={data.dishes} />
            </div>
        );
    }
}
