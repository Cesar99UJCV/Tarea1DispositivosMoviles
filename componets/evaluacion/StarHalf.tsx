import React from "react";
import { SvgXml } from "react-native-svg";
import { StarProp } from "./Evaluacion";
import { Pressable } from "react-native";

const xml = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" width="800px" height="800px" viewBox="0 0 24 24"><path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z"/></svg>
`;

const StarHalf = (props: StarProp) => {
    const handleOnPress = () => {
        props.onClick(props.posicion);
    };

    return (
        <Pressable onPress={handleOnPress}>
            <SvgXml xml={xml} width={50} height={50} />
        </Pressable>
    );
};

export default StarHalf;
