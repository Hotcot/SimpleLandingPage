import replace from "gulp-replace"; //search and change
import plumber from "gulp-plumber"; // error processing
import notify from "gulp-notify"; // message(hints)
import browsersync from "browser-sync"; // local server
import newer from "gulp-newer"; //check update
import ifPlugin from "gulp-if";// условное ветвление

//export's object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}