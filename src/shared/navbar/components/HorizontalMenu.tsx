// ** React Imports
import { useState } from 'react';

// ** Horizontal Menu Array
// import navigation from '../../../navigation/horizontal';

// ** Horizontal Menu Components
import HorizontalNavMenuItems from '@src/@core/layouts/components/menu/horizontal-menu/HorizontalNavMenuItems';

const HorizontalMenu = (props: { currentActiveItem: any, routerProps: any, navigations: any }) => {
  const { currentActiveItem, routerProps, navigations = [] } = props;

  // ** States
  const [activeItem, setActiveItem] = useState(null);
  const [groupActive, setGroupActive] = useState([]);
  const [openDropdown, setOpenDropdown] = useState([]);

  // ** On mouse enter push the ID to openDropdown array
  const onMouseEnter = (id: any) => {
    const arr = openDropdown;
    // @ts-ignore
    arr.push(id);
    setOpenDropdown([...arr]);
  }

  // ** On mouse leave remove the ID to openDropdown array
  const onMouseLeave = (id: any) => {
    const arr = openDropdown;
    // @ts-ignore
    arr.splice(arr.indexOf(id), 1);
    setOpenDropdown([...arr]);
  }

  return (
    <div className='navbar-container main-menu-content'>
      <ul className='nav navbar-nav' id='main-menu-navigation'>
        <HorizontalNavMenuItems
          submenu={false}
          items={navigations}
          activeItem={activeItem}
          groupActive={groupActive}
          routerProps={routerProps}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          openDropdown={openDropdown}
          setActiveItem={setActiveItem}
          setGroupActive={setGroupActive}
          setOpenDropdown={setOpenDropdown}
          currentActiveItem={currentActiveItem}
        />
      </ul>
    </div>
  )
}

export default HorizontalMenu;
