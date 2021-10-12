import { color } from './colors';
import { markdown } from './md';


type OptionsColor = Parameters<typeof color>[1];
type OptionsMd = Parameters<typeof markdown>[1];
type Options = OptionsMd | OptionsColor;

export function style(text: string, options: Options) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
