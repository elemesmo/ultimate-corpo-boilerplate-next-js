import merge from 'deepmerge';

import { commonTheme } from './common';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export const LightTheme = merge(lightTheme, commonTheme);
export const DarkTheme = merge(darkTheme, commonTheme);
