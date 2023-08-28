// // ** React Imports
// // import { Link, useLocation } from 'react-router-dom'
//
// // ** Third Party Components
// import classnames from 'classnames'
// import { Collapse, Badge } from 'reactstrap'
//
// // ** Vertical Menu Items Component
// import VerticalNavMenuItems from './VerticalNavMenuItems'
//
// // ** Utils
// import { isNavGroupActive, getAllParents } from '../../../utils'
//
// const VerticalNavMenuGroup = ({
//                                 item,
//                                 groupActive,
//                                 setGroupActive,
//                                 activeItem,
//                                 setActiveItem,
//                                 groupOpen,
//                                 setGroupOpen,
//                                 parentItem,
//                                 menuCollapsed,
//                                 menuHover,
//                                 routerProps,
//                                 currentActiveItem
//                               }) => {
//   // ** Current Val
//   const currentURL = 'home'; // useLocation().pathname
//
//   // ** Toggles Open Group
//   const toggleOpenGroup = (item, parentItem) => {
//     let openArr = groupOpen
//     let allParents
//
//     if (parentItem) {
//       allParents = getAllParents(parentItem, 'id')
//       allParents.pop()
//     }
//
//     // ** If user clicked on menu group inside already opened group i.g. when user click on blog group inside pages group
//     if (groupOpen && allParents && groupOpen[0] === allParents[0]) {
//       groupOpen.includes(item) ? openArr.splice(openArr.indexOf(item), 1) : openArr.push(item)
//     } else {
//       openArr = []
//       if (!groupOpen.includes(item)) {
//         openArr.push(item)
//       }
//     }
//
//     // ** Set Open Group
//     setGroupOpen([...openArr])
//   }
//
//   // ** Toggle Active Group
//   const toggleActiveGroup = (item, parentItem) => {
//     let activeArr = groupActive
//     let allParents
//
//     if (parentItem) {
//       allParents = getAllParents(parentItem, 'id')
//       activeArr = allParents
//     } else {
//       activeArr.includes(item) ? activeArr.splice(activeArr.indexOf(item), 1) : activeArr.push(item)
//     }
//
//     // ** Set open group removing any activegroup item present in opengroup state
//     const openArr = groupOpen.filter(val => !activeArr.includes(val))
//     setGroupOpen([...openArr])
//
//     // **  Set Active Group
//     setGroupActive([...activeArr])
//   }
//
//   // ** On Group Item Click
//   const onCollapseClick = (e, item) => {
//     if ((groupActive && groupActive.includes(item.id)) || isNavGroupActive(item.children, currentURL, routerProps)) {
//       toggleActiveGroup(item.id)
//     } else {
//       toggleOpenGroup(item.id, parentItem)
//     }
//
//     e.preventDefault()
//   }
//
//   // ** Returns condition to add open class
//   const openClassCondition = id => {
//     if ((menuCollapsed && menuHover) || menuCollapsed === false) {
//       if (groupActive.includes(id) || groupOpen.includes(item.id)) {
//         return true
//       }
//     } else if (groupActive.includes(id) && menuCollapsed && menuHover === false) {
//       return false
//     } else {
//       return null
//     }
//   }
//
//   return (
//     <li
//       className={classnames('nav-item has-sub', {
//         open: openClassCondition(item.id),
//         'menu-collapsed-open': groupActive.includes(item.id),
//         'sidebar-group-active': groupActive.includes(item.id) || groupOpen.includes(item.id)
//       })}
//     >
//       <a className='d-flex align-items-center' to='/' onClick={e => onCollapseClick(e, item)}>
//         {item.icon}
//         <span className='menu-title text-truncate'>
//           {item.title}
//         </span>
//
//         {item.badge && item.badgeText ? (
//           <Badge className='ml-auto mr-1' color={item.badge} pill>
//             {item.badgeText}
//           </Badge>
//         ) : null}
//       </a>
//
//       {/* Render Child Recursively Through VerticalNavMenuItems Component */}
//       <ul className='menu-content'>
//         <Collapse isOpen={(groupActive && groupActive.includes(item.id)) || (groupOpen && groupOpen.includes(item.id))}>
//           <VerticalNavMenuItems
//             items={item.children}
//             groupActive={groupActive}
//             setGroupActive={setGroupActive}
//             groupOpen={groupOpen}
//             setGroupOpen={setGroupOpen}
//             toggleActiveGroup={toggleActiveGroup}
//             parentItem={item}
//             menuCollapsed={menuCollapsed}
//             menuHover={menuHover}
//             routerProps={routerProps}
//             currentActiveItem={currentActiveItem}
//             activeItem={activeItem}
//             setActiveItem={setActiveItem}
//           />
//         </Collapse>
//       </ul>
//     </li>
//   )
// }
//
// export default VerticalNavMenuGroup


// ** React Imports
import {useEffect, useState} from 'react';
// import { Link, useLocation } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames';

// ** Reactstrap Imports
import { Collapse, Badge } from 'reactstrap';

// ** Vertical Menu Items Component
import VerticalNavMenuItems from './VerticalNavMenuItems';

// ** Utils
import { hasActiveChild, removeChildren } from '@layouts/utils';
import {useRouter} from 'next/router';
import {useAppSelector} from '../../../../../utility/hooks/useAppSelector';

const VerticalNavMenuGroup = ({
  item,
  groupOpen,
  menuHover,
  activeItem,
  parentItem,
  routerProps,
  groupActive,
  currentActiveGroup,
  setGroupOpen,
  setActiveItem,
  menuCollapsed,
  setGroupActive,
  setCurrentActiveGroup,
  currentActiveItem,
  ...rest
}) => {
  // ** Hooks
  // const location = useLocation()
  const { asPath } = useRouter();

  const { treatment } = useAppSelector(state => state.patient);

  // ** Current Val
  const currentURL = asPath; // useLocation().pathname

  // ** Toggle Open Group
  const toggleOpenGroup = (item, parent) => {
    let openGroup = groupOpen;
    const activeGroup = groupActive;

    // ** If Group is already open and clicked, close the group
    if (openGroup.includes(item.id)) {
      openGroup.splice(openGroup.indexOf(item.id), 1);

      // ** If clicked Group has open group children, Also remove those children to close those groups
      if (item.children) {
        removeChildren(item.children, openGroup, groupActive);
      }
    } else if (
      activeGroup.includes(item.id) ||
      currentActiveGroup.includes(item.id)
    ) {
      // ** If Group clicked is Active Group

      // ** If Active group is closed and clicked again, we should open active group else close active group
      if (
        !activeGroup.includes(item.id) &&
        currentActiveGroup.includes(item.id)
      ) {
        activeGroup.push(item.id);
      } else {
        activeGroup.splice(activeGroup.indexOf(item.id), 1);
      }

      // ** Update Active Group
      setGroupActive([...activeGroup]);
    } else if (parent) {
      // ** If Group clicked is the child of a open group, first remove all the open groups under that parent
      if (parent.children) {
        removeChildren(parent.children, openGroup, groupActive);
      }

      // ** After removing all the open groups under that parent, add the clicked group to open group array
      if (!openGroup.includes(item.id)) {
        openGroup.push(item.id);
      }
    } else {
      // ** If clicked on another group that is not active or open, create openGroup array from scratch

      // ** Empty Open Group array
      openGroup = [];

      // ** Push current clicked group item to Open Group array
      if (!openGroup.includes(item.id)) {
        openGroup.push(item.id);
      }
    }
    setGroupOpen([...openGroup]);
  }

  // ** On Group Item Click
  const onCollapseClick = (e, item) => {
    toggleOpenGroup(item, parentItem);

    e.preventDefault();
  }

  // ** Checks url & updates active item
  useEffect(() => {
    if (hasActiveChild(item, currentURL)) {
      if (!groupActive.includes(item.id)) groupActive.push(item.id);
    } else {
      const index = groupActive.indexOf(item.id);
      if (index > -1) groupActive.splice(index, 1);
    }
    setGroupActive([...groupActive]);
    setCurrentActiveGroup([...groupActive]);
    setGroupOpen([]);
  }, [asPath])

  // ** Returns condition to add open class
  const openClassCondition = id => {
    if ((menuCollapsed && menuHover) || menuCollapsed === false) {
      if (groupActive.includes(id) || groupOpen.includes(id)) {
        return true;
      }
    } else if (
      groupActive.includes(id) &&
      menuCollapsed &&
      menuHover === false
    ) {
      return false;
    } else {
      return null;
    }
  }

  if (item && item.isTreatmentRequired && !treatment) {
    return null;
  } else if (treatment && treatment.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatInap' && item && item.id === 'rawat-jalan') {
    return null;
  } else if (treatment && treatment.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatJalan' && item && item.id === 'rawat-inap') {
    return null;
  }
  return (
    <li
      className={classnames('nav-item has-sub', {
        open: openClassCondition(item.id),
        'menu-collapsed-open': groupActive.includes(item.id),
        'sidebar-group-active':
          groupActive.includes(item.id) ||
          groupOpen.includes(item.id) ||
          currentActiveGroup.includes(item.id),
      })}
    >
      <a
        className='d-flex align-items-center fw-bold'
        // to='/'
        onClick={e => onCollapseClick(e, item)}
      >
        {/*<a>*/}
        {item.icon}
        <span className='menu-title text-truncate fw-bolder' style={{ fontSize: '9pt' }}>{item.title}</span>

        {item.badge && item.badgeText ? (
          <Badge className='ms-auto me-1' color={item.badge} pill>
            {item.badgeText}
          </Badge>
        ) : null}
        {/*</a>*/}
      </a>

      {/* Render Child Recursively Through VerticalNavMenuItems Component */}
      <ul className='menu-content'>
        <Collapse
          isOpen={
            (groupActive && groupActive.includes(item.id)) ||
            (groupOpen && groupOpen.includes(item.id))
          }
        >
          <VerticalNavMenuItems
            {...rest}
            items={item.children}
            groupActive={groupActive}
            setGroupActive={setGroupActive}
            currentActiveGroup={currentActiveGroup}
            setCurrentActiveGroup={setCurrentActiveGroup}
            groupOpen={groupOpen}
            setGroupOpen={setGroupOpen}
            parentItem={item}
            menuCollapsed={menuCollapsed}
            menuHover={menuHover}
            routerProps={routerProps}
            currentActiveItem={currentActiveItem}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Collapse>
      </ul>
    </li>
  )
}

export default VerticalNavMenuGroup;
