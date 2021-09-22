// For CSS
declare module '*.css' {
    const css: {[key: string]: string}
    export default css;
}

// For LESS
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}