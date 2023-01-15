import { CssProps } from "../Utils/Inft";

const MdxComponents = {
    p: (css: string, data: string, rest: any) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <p style={{ ...cssPropertyAndValue }} {...rest}>
                {data}
            </p >
        );
    },

    h1: (css: string, data: string) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <h1 style={{ ...cssPropertyAndValue }}>
                {data}
            </h1 >
        );
    },
    h2: (css: string, data: string) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <h2 style={{ ...cssPropertyAndValue }}>
                {data}
            </h2 >
        );
    },
    h3: (css: string, data: string) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <h3 style={{ ...cssPropertyAndValue }}>
                {data}
            </h3 >
        );
    },
    h4: (css: string, data: string) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <h4 style={{ ...cssPropertyAndValue }}>
                {data}
            </h4 >
        );
    },
    h5: (css: string, data: string) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <h5 style={{ ...cssPropertyAndValue }}>
                {data}
            </h5 >
        );
    },
    h6: (css: string, data: string) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <h6 style={{ ...cssPropertyAndValue }}>
                {data}
            </h6 >
        );
    },

    span: (css: string, data: string) => {
        let cssPropertyAndValue: CssProps = {};
        // "width:100px; height:100; textWeight:30px;" = [width:100px;,height:100; textWeight:30px; ] = {}
        css.toString().split(";").map((pAv) => {
            const [key, val] = pAv.split(":");
            cssPropertyAndValue[key] = val
        });

        return (
            <span style={{ ...cssPropertyAndValue }}>
                {data}
            </span >
        );
    },



};

export default MdxComponents;