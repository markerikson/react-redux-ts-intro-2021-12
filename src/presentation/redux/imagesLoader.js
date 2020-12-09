import preloader from "spectacle/lib/utils/preloader";
import reduxLogo from "./images/redux.png";
import fluxFlow from "./images/flux-flow.png";
import fluxMvc from "./images/flux-mvc.png";
import reactReduxProvider from "./images/react-redux-provider.png";
import reduxDataFlowSync from "./images/ReduxDataFlowDiagram.gif";
import reduxDataFlowAsync from "./images/ReduxAsyncDataFlowDiagram.gif";

preloader([
  reduxLogo,
  fluxFlow,
  fluxMvc,
  reactReduxProvider,
  reduxDataFlowSync,
  reduxDataFlowAsync,
]);

export {
  reduxLogo,
  fluxFlow,
  fluxMvc,
  reactReduxProvider,
  reduxDataFlowSync,
  reduxDataFlowAsync,
};
