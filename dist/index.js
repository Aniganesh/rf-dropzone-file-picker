'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactForms = require('react-forms');
var core = require('@material-ui/core');
var Box = _interopDefault(require('@material-ui/core/Box/Box'));
var clsx = _interopDefault(require('clsx'));
var reactDropzone = require('react-dropzone');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var MUIDropFile = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var classes = useStyles(fieldProps);
    var _c = React.useState([]), files = _c[0], setFiles = _c[1];
    var handleDisplay = function (files) {
        return React.createElement(Box, { display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }, files.map(function (file, index) {
            return React.createElement(Box, { className: classes.acceptedFile, m: 1, p: 2, key: file.name + index }, file.name);
        }));
    };
    var accept = fieldProps.accept, onDropFile = fieldProps.onDropFile, _d = fieldProps.multiple, multiple = _d === void 0 ? true : _d, _e = fieldProps.defaultClass, defaultClass = _e === void 0 ? classes.defaultClass : _e, _f = fieldProps.activeClass, activeClass = _f === void 0 ? classes.activeClass : _f, _g = fieldProps.label, label = _g === void 0 ? "Drag and drop a file/files here" : _g, readAs = fieldProps.readAs, loadFiles = fieldProps.loadFiles, _h = fieldProps.encoding, encoding = _h === void 0 ? 'utf-8' : _h, _j = fieldProps.renderAccepted, renderAccepted = _j === void 0 ? handleDisplay : _j, _k = fieldProps.fullWidth, fullWidth = _k === void 0 ? true : _k, acceptedFileArea = fieldProps.acceptedFileArea, rest = __rest(fieldProps, ["accept", "onDropFile", "multiple", "defaultClass", "activeClass", "label", "readAs", "loadFiles", "encoding", "renderAccepted", "fullWidth", "acceptedFileArea"]);
    var wrapWith = function (input) { return (React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", minWidth: 700, width: fullWidth ? '100%' : 600 },
        React.createElement(Box, __assign({ m: 2 }, getRootProps(), { className: clsx(defaultClass, isDragActive ? activeClass : ""), display: "flex", alignItems: "center", justifyContent: "center" }),
            React.createElement(core.Typography, null, label),
            input),
        React.createElement(Box, { width: 300, className: acceptedFileArea }, renderAccepted(files)))); };
    var handleDrop = function (files) {
        if (loadFiles) {
            var resPromises = loadFiles === null || loadFiles === void 0 ? void 0 : loadFiles(files);
            Promise.all(resPromises).then(function (resFiles) {
                reactForms.setValue(resFiles, formikProps, fieldProps);
                setFiles(resFiles);
            });
            return;
        }
        reactForms.setValue(files, formikProps, fieldProps);
        reactForms.processFilesWithCallback(files, function (prop) {
            var imgs = prop.imgs, rem = prop.rem;
            onDropFile === null || onDropFile === void 0 ? void 0 : onDropFile(imgs, rem);
            setFiles(rem.concat(imgs));
        }, readAs, encoding);
    };
    var onDrop = React.useCallback(handleDrop, []);
    var _l = reactDropzone.useDropzone({ onDrop: onDrop }), isDragActive = _l.isDragActive, getRootProps = _l.getRootProps, getInputProps = _l.getInputProps;
    return (React.createElement(reactForms.MUIFileInput, { fieldProps: __assign(__assign({}, rest), { multiple: multiple, wrapWith: wrapWith, accept: accept, readAs: readAs, nativeInputProps: __assign({}, getInputProps()) }), formikProps: formikProps }));
};
var useStyles = core.makeStyles(function (theme) {
    return (core.createStyles({
        defaultClass: {
            border: '1px dashed grey', borderRadius: 8, minWidth: 400, height: 300, background: 'lightgrey', position: 'relative', flex: 1,
            width: function (_a) {
                var fullWidth = _a.fullWidth;
                return fullWidth ? '100%' : 400;
            }
        },
        activeClass: { backgroundColor: 'transparent' },
        acceptedFile: { background: 'lightgrey', border: '1px dashed grey', margin: theme.spacing(1), padding: theme.spacing(1), minWidth: 200 }
    }));
});

reactForms.attachField('drop-file', React.createElement(MUIDropFile, null));

var index = './lib';

exports.MUIDropFile = MUIDropFile;
exports.default = index;
//# sourceMappingURL=index.js.map
