import React from "react";
import ReactDOM from "react-dom";
import { Deck} from 'spectacle';
import styled from 'react-emotion';

import 'prismjs/components/prism-core';
import "prismjs/components/prism-markup-templating"
import "spectacle/lib/utils/prism-import";

import './components/presentationTheme';

import "typeface-montserrat";

import "./monokai.css";
import "./pure-tables.css";

require("normalize.css");

const OverridePresentationStyles = styled("div")`
    .spectacle-slide {
        margin : 0 !important;
    }
    
    .spectacle-content {
        padding : 20px;
    }
    
    code {
        color: black;
        font-family: monospace;
        background-color: rgba(0, 0, 0, 0.15);
        font-size: 1.1em;
        margin: 0.25rem auto;
        padding: 0px 5px;
        border-radius: 3px;
    }
    
    p, ul li, ol li {
      font-size: 2.5rem;
    }
    
    li ul li, li ul li p, li ol li, li ol li p,  ol li p {
        font-size: 2.25rem;
    }
    
    a {
        text-decoration : none;
        color: blue;
    }
    
    li > p {
        display: inline;
    }
    
    .spectacle-content p, .spectacle-content ol, .spectacle-content ul {
        text-align: left;
    }
    
    div > ul, div > ol {
        margin-block-start: 20px;
    }

    a > code {
        color : blue;
    }

    table, table th, table td {
        font-size: 1.75rem;
    }

    table thead td {
        text-align: center;
    }
    
    .spectacle-content .scrollable-code-slide pre.prism-code {
        max-height: 750px !important;
        min-height: 750px !important;
    }
`


const render = () => {
    require('prismjs/components/prism-core');
    require("prismjs/components/prism-markup-templating");
    require("spectacle/lib/utils/prism-import");
    const newTheme = require("./components/presentationTheme").default;
    const newSlides = require("./presentation/slideContents").default;

    ReactDOM.render(
        <OverridePresentationStyles>
            <Deck
                theme={newTheme}
                progress="number"
                contentWidth={1600}
                contentHeight={1000}
                showFullscreenControl={false}
            >
                {newSlides.map((S, i) => {
                    // HACK Incredibly ugly hack here:
                    // - We want to apply IDs to certain slides so that we can jump to them
                    // - Due to the multiple layers of nesting, that's buried within actual slide rendering calls
                    // - Spectacle needs to read those IDs off the top-level components
                    // - So, we fake-execute these to grab that ID, then apply it to the top-level component here
                    const tempStuff = S({components : []});
                    const {Layout} = tempStuff.props;
                    const layoutProps = Layout({}).props;
                    const {id} = layoutProps;

                    return <S  key={`slide-${i}`} id={id} />;
                })}
            </Deck>
        </OverridePresentationStyles>
        ,document.getElementById("root"),
    );
}

render()

if (module.hot) {
  module.hot.accept(() => {
   render()
  });
}
