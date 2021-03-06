import Color from 'color';

export const PRIMARY = '#8A2BE2';
export const LIGHT_PRIMARY = Color(PRIMARY).lighten(0.5).string();
export const LIGHTEST_PRIMARY = Color(PRIMARY).lighten(0.8).string();
export const SECONDARY = '#2ecc71';
export const LIGHTEST_SECONDARY = Color(SECONDARY).lighten(0.8).string();
export const WHITE = '#ffffff';
export const BLACK = '#000';
export const GRAY = '#787878';
export const LIGHT_GRAY = Color(GRAY).lighten(0.5).string();
export const LIGHT_RED = '#ff6666';
export const LIGHTEST_RED = '#ffcccc';
export const LIGHTEST_GRAY = Color(GRAY).lighten(0.8).string();

