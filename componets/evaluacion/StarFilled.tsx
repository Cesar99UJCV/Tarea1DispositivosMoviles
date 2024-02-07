import { SvgXml } from "react-native-svg"
import { StarProp } from "./Evaluacion";
import { Pressable } from "react-native";

const xml = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" width="800px" height="800px" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
`;

const StarFilled = (props: StarProp) => {

    const  handleOnPress = () => {
        props.onClick(props.posicion);
    };

    return (
        <Pressable onPress={handleOnPress}>
     
           <SvgXml xml={xml} width={50} height={50} />
        </Pressable>
  
     );
      
  };
  
  
  export default StarFilled;