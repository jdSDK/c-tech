import { Image } from "lucide-react";
import * as Styled from "./PlaceholderImage.styled";

const ImagePlaceholder = () => {
    return (
        <Styled.PlaceholderBackground title="No Image Available" aria-label="Image Placeholder">
            <Image />
        </Styled.PlaceholderBackground>
    );
};
export default ImagePlaceholder;
