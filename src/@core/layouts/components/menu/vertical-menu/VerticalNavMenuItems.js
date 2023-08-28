// ** Vertical Menu Components
import VerticalNavMenuLink from './VerticalNavMenuLink';
import VerticalNavMenuGroup from './VerticalNavMenuGroup';
import VerticalNavMenuSectionHeader from './VerticalNavMenuSectionHeader';

// ** Utils
import {
  // canViewMenuItem,
  // canViewMenuGroup,
  resolveVerticalNavMenuItemComponent as resolveNavItemComponent,
} from '@layouts/utils';

import { AbilityContext } from '@src/utility/context/Can';
import { useContext } from 'react';

const VerticalMenuNavItems = props => {
  // ** Components Object
  const Components = {
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
    VerticalNavMenuSectionHeader,
  }

  const ability = useContext(AbilityContext);

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map((item, index) => {

    if (item && item.resource && item.action && !ability.can(item.action, item.resource)) {
      return null;
    }

    const TagName = Components[resolveNavItemComponent(item)]
    if (item.children) {
      return <TagName item={item} index={index} key={item.id} {...props} />
    }
    return <TagName key={item.id || item.header} item={item} {...props} />
  })

  return RenderNavItems;
}

export default VerticalMenuNavItems;
