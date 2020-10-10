import React from 'react';
import { IFieldProps, TFile, ReadAsType } from 'react-forms';
export interface DropFileFieldProps {
    onDropFile?: (imgFiles: TFile[], remFiles?: File[]) => void;
    loadFiles?: (files: File[]) => Promise<any>[];
    readAs?: ReadAsType;
    multiple?: boolean;
    label?: string | JSX.Element;
    accept?: string;
    encoding?: string;
    activeClass?: string;
    defaultClass?: string;
    fullWidth?: boolean;
    acceptedFileArea?: string;
    renderAccepted?: (files: File[]) => JSX.Element;
}
export interface DropFileProps extends IFieldProps {
    fieldProps?: DropFileFieldProps;
}
export declare const MUIDropFile: React.FC<DropFileProps>;
