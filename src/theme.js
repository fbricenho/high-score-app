const mainTheme = {
    typography: {
        body1: {
            color: "#3c3c3b"
        },
        h4: {
            fontWeight: 600
        },
        caption: {
            color: "#9b9b9b"
        }
    },
    palette: {
        primary: {
            main: "#4000D0"
        },
        secondary: {
            main: "#18385f",
            light: "#e6e8f4",
            contrastText: "#fff"
        },
        success: {
            light: "#def4de",
            main: "#559355",
            dark: "#559355",
            contrastText: "#fff"
        },
        error: {
            light: "#feeaea",
            main: "#dd052b",
            dark: "#d92021",
            contrastText: "#fff"
        },
        text: {
            primary: "#3c3c3b",
            secondary: "#ffffff"
        },
        background: {
            paper: "#fff",
            default: "#f9faff"
        },
        custom: {
            input: {
                primary: "#fff",
                secondary: "#f8f8f8",
                border: "#d1d8df",
                disabled: "#eff0f5"
            },
            white: "#ffffff",
            snackbar: {
                shadow: "0 4px 5px 0 rgba(0, 0, 0, 0.1)",
                success: {
                    background: "#def4de",
                    border: "#559355",
                    text: "#559355"
                },
                warning: {
                    background: "#fef5e5",
                    border: "#ffa000",
                    text: "#e89200"
                },
                info: {
                    background: "#e7f1fa",
                    border: "#1776d1",
                    text: "#1776d1"
                },
                error: {
                    background: "#feeaea",
                    border: "#de3536",
                    text: "#d92021"
                }
            }
        }
    },
    shape: {
        borderRadius: 6
    },
    upShadows: ["0px -1px 1px -1px rgba(0,0,0,0.2), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px -1px 3px 0px rgba(0,0,0,0.12)"]
};

export default mainTheme;
