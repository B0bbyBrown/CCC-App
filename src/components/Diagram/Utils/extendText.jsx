import { extend } from "@react-three/fiber";
import { Text } from "troika-three-text";

const extendText = () => {
  extend({ Text });
};

export default extendText;
