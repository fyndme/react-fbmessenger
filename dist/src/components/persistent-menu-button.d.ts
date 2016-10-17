/// <reference types="react" />
import * as React from 'react';
export interface Props {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => any;
    isMenuOpen: boolean;
}
export default function PersistentMenuButton(props: Props): JSX.Element;
