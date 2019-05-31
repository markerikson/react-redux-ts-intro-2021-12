import createSpectacleTheme from "spectacle/lib/themes/default";
import merge from 'deepmerge';

const createTheme = (colors, fonts, overrides = {}) => {
    let t = createSpectacleTheme(colors, fonts);
    t.screen = merge(t.screen, overrides);
    return t;
};


const colors = {
    primary : "white",
    secondary : "#1F2022",
    tertiary : "#03A9FC",
    quaternary : "black"
}

const theme = createTheme(colors, {
    primary: "Montserrat",
    secondary: "Helvetica"
  }, {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      },
      number: {
        color : colors.quaternary
      }
    },
    components: {

      heading: {
        h1: {
          //fontSize: '4rem',
          //textTransform: 'uppercase',
          color : colors.quaternary
        },
        h2: {
          //fontSize: '3.5rem',
          //textTransform: 'uppercase',
            color : colors.quaternary
        },
        h3: {
          //fontSize: '3rem',
          //textTransform: 'uppercase',
            color : colors.quaternary
        },
        h4: {
          //fontSize: '2.5rem',
          //textTransform: 'uppercase',
            color : colors.quaternary
        },
        h5: {
          //fontSize: '2rem',
          //textTransform: 'uppercase',
            color : colors.quaternary
        },
        h6: {
          //fontSize: '1.5rem',
          //textTransform: 'uppercase',
            color : colors.quaternary
        }

      },

      codePane: {
        fontSize: '2rem'
      },
      quote: {
          fontWeight: "normal",
          color : "black",
          backgroundColor : "#8080801a",
          borderLeft: "8px solid #337ab7",
          fontSize: "2.25rem !important",
      }
    }
  });

theme.screen.components.list.fontSize = "2.5rem";
delete theme.screen.components.listItem.fontSize;
theme.screen.components.codePane.fontSize = "1.5rem";
// Ignore the built-in dark theme and use the one we imported above
theme.screen.prism.dark = {};
//theme.screen.components.text.fontSize = "1.75rem";
delete theme.screen.components.list.padding;
delete theme.screen.components.syntax.fontFamily;


export default theme;