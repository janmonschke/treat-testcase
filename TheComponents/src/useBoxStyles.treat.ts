import { styleMap, Style } from 'treat';
import { Properties } from 'csstype';

import mapValues from 'lodash/mapValues';
import { Theme } from './theme';

const mapToStyleProperty = <
  Key extends string | number,
  Value extends string | number
>(
  map: Record<Key, Value>,
  propertyName: keyof Properties,
  mapper?: (value: Value, propertyName: keyof Properties) => Style
) =>
  mapValues(map, (value: Value) =>
    mapper ? mapper(value, propertyName) : { [propertyName]: value }
  );

const spaceMapToCss = (
  theme: Theme,
  cssPropertyName: keyof Properties,
  breakpoint: keyof Theme['breakpoint']
) => {
  const spaceWithNone = {
    ...theme.space,
    none: 0,
  };

  return mapToStyleProperty(
    spaceWithNone,
    cssPropertyName,
    (value, propertyName) => {
      const styles = {
        [propertyName]: value * theme.grid,
      };

      const minWidth = theme.breakpoint[breakpoint];

      return minWidth === 0
        ? styles
        : {
            '@media': {
              [`screen and (min-width: ${minWidth}px)`]: styles,
            },
          };
    }
  );
};

export const margin = {
  top: styleMap((theme) => spaceMapToCss(theme, 'marginTop', 'mobile')),
  bottom: styleMap((theme) => spaceMapToCss(theme, 'marginBottom', 'mobile')),
  left: styleMap((theme) => spaceMapToCss(theme, 'marginLeft', 'mobile')),
  right: styleMap((theme) => spaceMapToCss(theme, 'marginRight', 'mobile')),
};
export const marginTablet = {
  top: styleMap((theme) => spaceMapToCss(theme, 'marginTop', 'tablet')),
  bottom: styleMap((theme) => spaceMapToCss(theme, 'marginBottom', 'tablet')),
  left: styleMap((theme) => spaceMapToCss(theme, 'marginLeft', 'tablet')),
  right: styleMap((theme) => spaceMapToCss(theme, 'marginRight', 'tablet')),
};
export const marginDesktop = {
  top: styleMap((theme) => spaceMapToCss(theme, 'marginTop', 'desktop')),
  bottom: styleMap((theme) => spaceMapToCss(theme, 'marginBottom', 'desktop')),
  left: styleMap((theme) => spaceMapToCss(theme, 'marginLeft', 'desktop')),
  right: styleMap((theme) => spaceMapToCss(theme, 'marginRight', 'desktop')),
};

export const padding = {
  top: styleMap((theme) => spaceMapToCss(theme, 'paddingTop', 'mobile')),
  bottom: styleMap((theme) => spaceMapToCss(theme, 'paddingBottom', 'mobile')),
  left: styleMap((theme) => spaceMapToCss(theme, 'paddingLeft', 'mobile')),
  right: styleMap((theme) => spaceMapToCss(theme, 'paddingRight', 'mobile')),
};
export const paddingTablet = {
  top: styleMap((theme) => spaceMapToCss(theme, 'paddingTop', 'tablet')),
  bottom: styleMap((theme) => spaceMapToCss(theme, 'paddingBottom', 'tablet')),
  left: styleMap((theme) => spaceMapToCss(theme, 'paddingLeft', 'tablet')),
  right: styleMap((theme) => spaceMapToCss(theme, 'paddingRight', 'tablet')),
};
export const paddingDesktop = {
  top: styleMap((theme) => spaceMapToCss(theme, 'paddingTop', 'desktop')),
  bottom: styleMap((theme) => spaceMapToCss(theme, 'paddingBottom', 'desktop')),
  left: styleMap((theme) => spaceMapToCss(theme, 'paddingLeft', 'desktop')),
  right: styleMap((theme) => spaceMapToCss(theme, 'paddingRight', 'desktop')),
};

