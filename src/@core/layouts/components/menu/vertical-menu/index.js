// ** React Imports
import { Fragment, useState, useRef } from 'react';
import navigation from '@navigation/vertical';

// ** Third Party Components
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

// ** Vertical Menu Components
import VerticalMenuHeader from './VerticalMenuHeader';
import VerticalNavMenuItems from './VerticalNavMenuItems';

const Sidebar = props => {
  // ** Props
  const { menuCollapsed, setMenuCollapsed, routerProps, menu, currentActiveItem, skin } = props;

  // ** States
  const [groupOpen, setGroupOpen] = useState([]);
  const [groupActive, setGroupActive] = useState([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false);

  // ** Ref
  const shadowRef = useRef(null);

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    setMenuHover(true);
  }

  const handleOnClick = () => {
    setMenuHover(true);
  }

  // ** Scroll Menu
  const scrollMenu = container => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.add('d-block');
      }
    } else {
      if (shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.remove('d-block');
      }
    }
  }

  return (
    <Fragment>
      <div
        className={classnames('main-menu menu-fixed menu-accordion menu-shadow mt-5 box-shadow-0', {
          expanded: menuCollapsed === false,
          'menu-light': skin !== 'semi-dark' && skin !== 'dark',
          'menu-dark': skin === 'semi-dark' || skin === 'dark',
          collapsed: menuCollapsed,
        })}
        // onMouseEnter={onMouseEnter}
        // onMouseLeave={() => setMenuHover(false)}
        onClick={handleOnClick}
        style={{ flexShrink: 0, height: '80%', overflow: 'auto' }}
      >
        {menu ? (
          menu
        ) : (
          <Fragment>
            {/* Vertical Menu Header */}
            <VerticalMenuHeader setGroupOpen={setGroupOpen} menuHover={true} menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} {...props} />
            {/* Vertical Menu Header Shadow */}
            <div className='shadow-bottom' ref={shadowRef}> </div>
            {/* Perfect Scrollbar */}
            <PerfectScrollbar
              className='main-menu-content'
              options={{ wheelPropagation: false }}
              onScrollY={container => scrollMenu(container)}
            >
              {
                menuCollapsed && (
                  <ul className='navigation navigation-main' style={{ pointerEvents: 'none', opacity: 0.4 }}>
                    <VerticalNavMenuItems
                      items={navigation}
                      menuData={navigation}
                      menuHover={true}
                      groupOpen={groupOpen}
                      activeItem={activeItem}
                      groupActive={groupActive}
                      currentActiveGroup={currentActiveGroup}
                      routerProps={routerProps}
                      setGroupOpen={setGroupOpen}
                      menuCollapsed={menuCollapsed}
                      setActiveItem={setActiveItem}
                      setGroupActive={setGroupActive}
                      setCurrentActiveGroup={setCurrentActiveGroup}
                      currentActiveItem={currentActiveItem}
                    />
                  </ul>
                )
              }
              {
                !menuCollapsed && (
                  <ul className='navigation navigation-main'>
                    <VerticalNavMenuItems
                      items={navigation}
                      menuData={navigation}
                      menuHover={true}
                      groupOpen={groupOpen}
                      activeItem={activeItem}
                      groupActive={groupActive}
                      currentActiveGroup={currentActiveGroup}
                      routerProps={routerProps}
                      setGroupOpen={setGroupOpen}
                      menuCollapsed={menuCollapsed}
                      setActiveItem={setActiveItem}
                      setGroupActive={setGroupActive}
                      setCurrentActiveGroup={setCurrentActiveGroup}
                      currentActiveItem={currentActiveItem}
                    />
                  </ul>
                )
              }
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar;
