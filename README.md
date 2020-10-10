**Table of Contents**

- [rf-dropzone-file-picker](#rf-dropzone-file-picker)
	- [Dependencies](#dependencies)
	- [Installation](#installation)
	- [How to use](#how-to-use)

# rf-dropzone-file-picker

A package that runs on top of [react-forms](https://github.com/mithyalabs/react-forms) and provides a drag and drop file input.

## Dependencies

1. react-dropzone
2. react-forms
3. clsx
4. lodash
5. formik

## Installation

``` 
npm i https://github.com/mithyalabs/rf-dropzone-file-picker 
```

**dependencies installation** 

``` 
npm i https://github.com/mithyalabs/react-forms 
npm i react-dropzone clsx lodash formik
```

## How to use

In your config, add the following to get the basic dropzone file input:

``` 
{
	type: 'drop-file',
	valueKey: 'myValueKey',
	fieldProps: {}
}

```

fieldProps has the following type:

``` 
{
	onDropFile?: (imgFiles: TFile[], remFiles?: File[]) => void
	loadFiles?: (files: File[]) => Promise<any>[]
	readAs?: ReadAsType
	multiple?: boolean
	label?: string | JSX.Element
	accept?: string
	encoding?: string
	activeClass?: string
	defaultClass?: string
	fullWidth?: boolean
	renderAccepted?: (files: File[]) => JSX.Element
}
```

**Notes:**

* You can customise the look of the dropzone using activeClass and defaultClass props. Active class contains rules that will take effect on dragging a file over the area. Eg.: backgroundColor, textColor, etc., while defaultClass is for class with rules that will not be affected by dragging a file over the area. Eg.: height, width, border, borderRadius, etc.

* If there are common rules in both classes, CSS specificity will take over and the class defined later will take effect.

fullWidth sets the width to 100% with some space on the right to display a preview of the files that have been dropped & accepted(only when no defaultClass is provided).

* The renderAccepted function should take an array of files and display them within a container anyway you choose.
* By default only the file names are displayed with a dashed border and in a container with minWidth 200 on the right side of the dropzone.
* renderAccepted is used to show a preview of the file that has been dropped on the dropzone. By default only the file name will be visible within a rectangular container.
* LoadFiles takes a function that returns an array of promises. Each of which will resolve to give a file. If the resolved object does not implement the File interface, then you would also need to provide a function for renderAccepted.
