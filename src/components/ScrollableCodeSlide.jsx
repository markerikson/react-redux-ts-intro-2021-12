import React, {useState, useEffect} from "react";
import CodeSurfer from "code-surfer";


export const ScrollableCodeSlide = ({code, steps = [], theme=monokaiTheme, ...props}) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const currentStep = steps[currentStepIndex];


    useEffect(() => {
        const keyListener = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                case "ArrowUp": {
                    // Left pressed
                    if(currentStepIndex > 0) {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentStepIndex(currentStepIndex - 1);
                    }

                    break;
                }
                case "ArrowRight":
                case "ArrowDown": {
                    if(currentStepIndex < (steps.length - 1)) {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentStepIndex(currentStepIndex + 1);
                    }
                    // Right pressed
                    break;
                }
                default: break;
            }
        }

        document.addEventListener("keydown", keyListener);

        return () => {
            document.removeEventListener("keydown", keyListener)
        }
    })

    const {notes = " "} = currentStep;

    return (
        <div className="scrollable-code-slide">
            <p style={{margin : 5}}>{notes}</p>
            <CodeSurfer
                code={code}
                step={currentStep}
                theme={theme}
                {...props}
            />
        </div>
    )
}


export const monokaiTheme = {
    plain : {
        color: "#f8f8f2",
        fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
        fontSize : "0.9em !important",
        MozTabSize: "2",
        OTabSize: "2",
        tabSize: "2",
        backgroundColor: "#272822"
    },
    styles : [
        {
            types : ["comment"],
            style : {
                color : "#c3c3c3",
            }
        },
        {
            types : ["blockquote", "shebang"],
            style : {
                color : "#75715e",
            }
        },
        {
            types : ["operator", "important", "keyword", "rule", "tag", "selector", "prolog"],
            style : {
                color : "#f92672",
            }
        },
        {
            types : ["property", "entity", "code"],
            style : {
                color : "#66d9ef",
            }
        },
        {
            types : ["regex"],
            style : {
                color : "#fd971f",
            }
        },
        {
            types : ["function"],
            style : {
                color : "#66d9ef",
            }
        },
        {
            types : ["pseudo-element", "id", "class", "class-name", "pseudo-class", "namespace", "symbol", "attr-name"],
            style : {
                color : "#a6e22e",
            }
        },
        {
            types : ["string", "url", "list", "attr-value"],
            style : {
                color : "#e6db74",
            }
        },
        {
            types : ["constant", "hexcode", "builtin", "number", "boolean"],
            style : {
                color : "#ae81ff",
            }
        },
        {
            types : ["doctype", "punctuation", "variable"],
            style : {
                color : "#f8f8f2",
            }
        },
        {
            types : ["bold"],
            style : {
                fontWeight : "bold",
            }
        },
        {
            types : ["italic"],
            style : {
                fontStyle : "italic"
            }
        },
    ]
}