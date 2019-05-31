import React from "react";
import {ComponentPlayground} from "spectacle";

import {transformCode} from "utils/transformCode";

const BabelPlayground = (props) => <ComponentPlayground {...props} transformCode={transformCode} />;

export default BabelPlayground;