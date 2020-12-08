import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from "react";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export const requestFullscreen = (element = document.documentElement) => {
  const request =
    element.requestFullscreen ||
    element.webkitRequestFullscreen ||
    element.mozRequestFullScreen ||
    element.mozRequestFullScreen;

  if (typeof request === "function") {
    request.call(element);
  }
};

export const exitFullscreen = () => {
  const exit =
    document.exitFullscreen ||
    document.msExitFullscreen ||
    document.mozCancelFullScreen ||
    document.webkitExitFullscreen;

  if (typeof exit === "function") {
    exit.call(document);
  }
};

export const getFullscreenElement = () =>
  document.fullscreenElement ||
  document.mozFullScreenElement ||
  document.webkitFullscreenElement ||
  document.msFullscreenElement;

export const isFullscreen = () => !!getFullscreenElement();

export const toggleFullscreen = () => {
  if (isFullscreen()) {
    exitFullscreen();
  } else {
    requestFullscreen(document.documentElement);
  }
};

const Button = styled("button")`
  display: inline-block;
  appearance: none;
  background: none;
  border: none;
  outline: 0;
  color: inherit;
  padding: 0;
  cursor: pointer;
  > svg {
    height: 1.5em;
    width: 1.5em;
  }
`;

const FullscreenButton = ({ isFullscreen, ...props }) => (
  <Button aria-label="Toggle full screen" {...props}>
    <svg viewBox="0 0 512 512">
      <path
        fill={get(props, "styles.fill", "currentColor")}
        d={
          isFullscreen
            ? "M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z"
            : "M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"
        }
      />
    </svg>
  </Button>
);

FullscreenButton.propTypes = {
  isFullscreen: PropTypes.bool,
  styles: PropTypes.object,
};

export const defaultCode = `
/**
 * Sample React Component
 * Output domContainerNode is 'mountNode'
 */
const styles = {
  heading: {
    fontSize: "2.25rem",
    fontWeight: "bold"
  },
  copy: {
    fontSize: "1.5rem"
  }
}
const HelloWorld = ({ name }) => (
  <div>
    <h1 style={styles.heading}>
      Create Live Code Examples in {name}!
    </h1>
    <p style={styles.copy}>
      Supports Light and Dark Syntax Themes
    </p>
  </div>
)
render(<HelloWorld name="Spectacle" />)
`;

export const PlaygroundProvider = styled(LiveProvider)`
  border-radius: 0 0 6px 6px;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

const PlaygroundPreview = styled(({ className }) => (
  <LivePreview className={className} />
))`
  padding: 0.5rem;
  min-height: 100%;

  background: ${p => p.previewBackgroundColor || "#fff"};
`;

const PlaygroundEditor = styled(
  ({ syntaxStyles: _, prismTheme: __, ...rest }) => <LiveEditor {...rest} />
)`
  && {
    ${props => props.syntaxStyles} min-height: 100%;
    font-size: 1.25vw;

    &.builtin-prism-theme {
      ${props => props.prismTheme};
    }
  }
`;

const PlaygroundRow = styled("div")`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;

  /* NOTE: Comma separation doesn't seem to work here */

  &:-webkit-full-screen {
    height: 100%;
  }
  &:-moz-full-screen {
    height: 100%;
  }
  &:-ms-fullscreen {
    height: 100%;
  }
  &:fullscreen {
    height: 100%;
  }

  &:-webkit-full-screen > * {
    height: 100%;
  }
  &:-moz-full-screen > * {
    height: 100%;
  }
  &:-ms-fullscreen > * {
    height: 100%;
  }
  &:fullscreen > * {
    height: 100%;
  }
`;

const Title = styled("div")`
  position: relative;
  flex: 1;
  background: #ddd;
  border-bottom: 1px solid #999;
  color: #424242;
  display: block;
  font-family: "Roboto Mono", "Menlo", "Andale Mono", monospace;
  font-size: 1.15vw;
  padding: 0.4rem 0;
  text-transform: uppercase;

  &:last-child {
    border-left: 1px solid #999;
  }

  > button {
    position: absolute;
    right: 1em;
    margin-top: -0.1em;
  }

  ${props =>
    props.useDarkTheme &&
    css`
      background: #272822;
      border-bottom: 1px solid #000;
      color: #fff;
    `};
`;

const PlaygroundColumn = styled("div")`
  flex: 1;
  font-size: 1.25vw;
  margin: 0;
  position: relative;
  height: 60vh;
  overflow-y: scroll;
  &:last-child {
    border-left: 1px solid #999;
  }
`;

const PlaygroundError = styled(LiveError)`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
  white-space: pre-wrap;
  background: rgba(255, 35, 36, 0.8);
  color: white;
  padding: 0.5rem;
`;

const STORAGE_KEY = "spectacle-playground";

function getEnhancedScope(scope = {}) {
  return {
    Component,
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
    ...scope,
  };
}

export const ComponentPlayground = (
  {
    code,
    previewBackgroundColor,
    scope,
    theme = "external",
    transformCode,
    codePaneStyle = { flexGrow: 2 },
  },
  context
) => {
  const [actualCode, setCode] = useState(() => (code || defaultCode).trim());
  const [actualScope, setScope] = useState(() => getEnhancedScope(scope));

  const fullscreenRef = useRef(null);

  const useDarkTheme = theme === "dark";
  const externalPrismTheme = theme === "external";
  const className = `language-jsx ${
    externalPrismTheme ? "" : "builtin-prism-theme"
  }`;

  const onEditorChange = code => {
    setCode(code);
    localStorage.setItem(STORAGE_KEY, code);
  };

  const editorRequestFullscreen = () =>
    requestFullscreen(fullscreenRef.current);

  useLayoutEffect(() => {
    const syncCode = ({ key, newValue }) => {
      if (key === STORAGE_KEY) {
        setCode(newValue);
      }
    };

    window.addEventListener("storage", syncCode);
    return () => window.removeEventListener("storage", syncCode);
  }, []);

  const onKeyDown = e => e.stopPropagation();
  const onKeyUp = e => {
    e.stopPropagation();
    // Esc: When entering the editor or an input element the default esc-to-exit might not work anymore
    if (e.keyCode === 27 && isFullscreen()) {
      exitFullscreen();
    }
  };

  return (
    <PlaygroundProvider
      mountStylesheet={false}
      code={actualCode}
      scope={actualScope}
      transformCode={transformCode}
      noInline
    >
      <PlaygroundRow>
        <Title>Live Preview</Title>
        <Title useDarkTheme={useDarkTheme} style={codePaneStyle}>
          Source Code
          <FullscreenButton
            onClick={editorRequestFullscreen}
            isFullscreen={getFullscreenElement() === fullscreenRef.current}
          />
        </Title>
      </PlaygroundRow>

      <PlaygroundRow
        innerRef={fullscreenRef}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
      >
        <PlaygroundColumn>
          <PlaygroundPreview previewBackgroundColor={previewBackgroundColor} />
          <PlaygroundError />
        </PlaygroundColumn>

        <PlaygroundColumn style={codePaneStyle}>
          <PlaygroundEditor
            className={className}
            theme={undefined}
            onChange={onEditorChange}
          />
        </PlaygroundColumn>
      </PlaygroundRow>
    </PlaygroundProvider>
  );
};

ComponentPlayground.contextTypes = {
  styles: PropTypes.object,
};

class ComponentPlaygroundOld extends Component {
  constructor() {
    super(...arguments);
    this.onRef = this.onRef.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.requestFullscreen = this.requestFullscreen.bind(this);
    this.syncCode = this.syncCode.bind(this);

    this.state = {
      code: (this.props.code || defaultCode).trim(),
      scope: getEnhancedScope(this.props.scope),
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const updatedState = {};
    if (
      typeof nextProps.code !== "undefined" &&
      nextProps.code !== prevState.code
    ) {
      const code = (nextProps.code || defaultCode).trim();
      updatedState.code = code;
    } else {
      updatedState.code = prevState.code;
    }
    if (
      typeof nextProps.scope !== "undefined" &&
      nextProps.scope !== prevState.scope
    ) {
      const scope = getEnhancedScope(nextProps.scope);
      updatedState.scope = scope;
    } else {
      updatedState.scope = prevState.scope;
    }
    return isEmpty(updatedState) ? null : updatedState;
  }

  componentDidMount() {
    localStorage.setItem(STORAGE_KEY, this.state.code);
    window.addEventListener("storage", this.syncCode);
  }

  componentDidUpdate() {
    this.playgroundSetState();
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.syncCode);
  }

  playgroundSetState() {
    if (this.props.code) {
      const code = (this.props.code || defaultCode).trim();
      this.setState({ code });
    }
    if (this.props.scope) {
      const scope = getEnhancedScope(this.props.scope);
      this.setState({ scope });
    }
  }
  onKeyUp(evt) {
    evt.stopPropagation();

    // Esc: When entering the editor or an input element the default esc-to-exit might not work anymore
    if (evt.keyCode === 27 && isFullscreen()) {
      exitFullscreen();
    }
  }

  onKeyDown(evt) {
    evt.stopPropagation();
  }

  onRef(node) {
    this.node = node;
  }

  onEditorChange(code) {
    this.setState({ code });
    localStorage.setItem(STORAGE_KEY, code);
  }

  requestFullscreen() {
    requestFullscreen(this.node);
  }

  syncCode({ key, newValue }) {
    if (key === STORAGE_KEY) {
      this.setState({ code: newValue });
    }
  }

  render() {
    const {
      previewBackgroundColor,
      theme = "dark",
      transformCode,
    } = this.props;

    const useDarkTheme = theme === "dark";
    const externalPrismTheme = this.props.theme === "external";
    const className = `language-jsx ${
      externalPrismTheme ? "" : "builtin-prism-theme"
    }`;

    return (
      <PlaygroundProvider
        mountStylesheet={false}
        code={this.state.code}
        scope={this.state.scope}
        transformCode={transformCode}
        noInline
      >
        <PlaygroundRow>
          <Title>Live Preview</Title>
          <Title useDarkTheme={useDarkTheme}>
            Source Code
            <FullscreenButton
              onClick={this.requestFullscreen}
              isFullscreen={getFullscreenElement() === this.node}
            />
          </Title>
        </PlaygroundRow>

        <PlaygroundRow
          innerRef={this.onRef}
          onKeyUp={this.onKeyUp}
          onKeyDown={this.onKeyDown}
        >
          <PlaygroundColumn>
            <PlaygroundPreview
              previewBackgroundColor={previewBackgroundColor}
            />
            <PlaygroundError />
          </PlaygroundColumn>

          <PlaygroundColumn>
            <PlaygroundEditor
              className={className}
              syntaxStyles={this.context.styles.components.syntax}
              prismTheme={
                this.context.styles.prism[useDarkTheme ? "dark" : "light"]
              }
              onChange={this.onEditorChange}
            />
          </PlaygroundColumn>
        </PlaygroundRow>
      </PlaygroundProvider>
    );
  }
}

ComponentPlaygroundOld.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object,
};

ComponentPlaygroundOld.propTypes = {
  code: PropTypes.string,
  previewBackgroundColor: PropTypes.string,
  scope: PropTypes.object,
  theme: PropTypes.oneOf(["dark", "light", "external"]),
  transformCode: PropTypes.func,
};

ComponentPlaygroundOld.defaultProps = {
  theme: "dark",
};

export default ComponentPlaygroundOld;
