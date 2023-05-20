import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FungctionalComponent from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama="Richard Meha" />
                <FungctionalComponent nama="Rrichard Meha" />
            </div>
        )
    }
}