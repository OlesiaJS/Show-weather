import { BsSun } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsFillCloudHailFill } from "react-icons/bs";
import { CiCloudMoon } from "react-icons/ci";

function GetSvgCondition({ myCondition }) {
    let myConditional = myCondition;
    let сonditionSVG = '';
    switch (true) {
        case (myConditional === 'Sunny' || myConditional === 'Clear'):
            сonditionSVG = < BsSun />;
            break;
        case (myConditional === 'Partly cloudy' || myConditional === 'cloudy'):
            сonditionSVG = < BsCloudSun />;
            break;
        case (myConditional === 'Rain'):
            сonditionSVG = < BsFillCloudHailFill />;
            break;
        default:
            сonditionSVG = < CiCloudMoon />;
            break;
    }
    return сonditionSVG;
}

export default GetSvgCondition;