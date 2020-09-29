import classnames from 'classnames';
import {mapKeys} from 'lodash';

export default function getClassName({addOns, className, modifiers, rootClass}) {
    function getModifiers() {
        return modifiers
            ? mapKeys(modifiers, (modVal, modKey) => `${rootClass}--${modKey}`)
            : {};
    }

    function getChildClass(childClassName) {
        return `${rootClass}__${childClassName}`;
    }

    const rootClassName = classnames(
        {
            ...getModifiers(),
        },
        className,
        rootClass,
        addOns
    );

    return [rootClassName, getChildClass];
}
