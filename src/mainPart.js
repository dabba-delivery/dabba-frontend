import React from "react";

import { Header } from "./header.js";
import { Menu } from "./menu";
import { SortBlock } from "./sort";
import { MapBlock } from "./map";
import { Navigation } from "./components";

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

/**
 * Main Part represents the left part of user interface with map, positions etc
 */
export class MainPart extends React.Component {
    /**
     * Preparing map data for transfering to Map component
     */
    componentDidMount() {
        const {
            data: {
                coordinates = "55.6105187,37.7337732",
                name,
                logoUrl = "",
                serviceRadius,
            },
        } = this.props;

        const coords = coordinates.split(",");
        place.name = name;
        place.logoURL = logoUrl;
        place.coords.lat = coords[0];
        place.coords.lng = coords[1];
        place.radius = serviceRadius;
    }

    render() {
        const { data } = this.props;

        return (
            <div
                style={{
                    backgroundColor: "#f7f7f7",
                }}
            >
                <Navigation classNamesBox="app-appear" />
                <Header data={data} />
                {/* <MapBlock /> */}
                <SortBlock />
                <Menu dishes={data.dishes} />
            </div>
        );
    }
}
