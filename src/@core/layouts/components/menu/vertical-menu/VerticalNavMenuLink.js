// ** React Imports
import { useEffect } from 'react';
// import { NavLink, useLocation, matchPath, useParams } from 'react-router-dom'

// ** Third Party Components
import { Badge } from 'reactstrap';
import classnames from 'classnames';

// ** Vertical Menu Array Of Items
import navigation from '../../../../../navigation/vertical';

// ** Utils
import { isNavLinkActive, search, getAllParents } from '../../../utils';

import Link from "next/link";
import { useRouter } from "next/router";

const VerticalNavMenuLink = ({
                               item,
                               groupActive,
                               setGroupActive,
                               activeItem,
                               setActiveItem,
                               groupOpen,
                               setGroupOpen,
                               toggleActiveGroup,
                               parentItem,
                               routerProps,
                               currentActiveItem,
                             }) => {
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = Link; // item.externalLink ? 'a' : NavLink


  // ** URL Vars
  // const location = useLocation()
  const currentURL = location.pathname;

  // ** To match path
  const match = undefined; /*matchPath(currentURL, {
    path: `${item.navLink}/:param`,
    exact: true,
    strict: false
  })*/

  // ** Search for current item parents
  const searchParents = (navigation, currentURL) => {
    const parents = search(navigation, currentURL, routerProps); // Search for parent object
    const allParents = getAllParents(parents, 'id'); // Parents Object to Parents Array
    return allParents;
  }

  // ** URL Vars
  const resetActiveGroup = navLink => {
    const parents = search(navigation, navLink, match);
    toggleActiveGroup(item.id, parents);
  }

  // ** Reset Active & Open Group Arrays
  const resetActiveAndOpenGroups = () => {
    setGroupActive([]);
    setGroupOpen([]);
  }

  const router = useRouter();

  // ** Checks url & updates active item
  useEffect(() => {
    if (currentActiveItem !== null) {
      setActiveItem(currentActiveItem);
      const arr = searchParents(navigation, currentURL);
      setGroupActive([...arr]);
    }
  }, [router])

  const isActive = () => {
    if (!item.activeLinks) return false;
    if (Array.isArray(item.activeLinks)) {
      for (const link of item.activeLinks) {
        if (currentURL.indexOf(link) > -1) return true;
      }
      return false;
    }
    return currentURL.indexOf(item.activeLinks) > -1;
  }

  return (
    <li
      className={classnames({
        'nav-item': !item.children,
        disabled: item.disabled,
        active: item.navLink === activeItem || isActive(),
      })}
      style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
    >
      <LinkTag

        target={item.newTab ? '_blank' : undefined}
        /*eslint-disable */
        {...(item.externalLink === true
          ? {
            href: item.navLink || '/'
          }
          : {
            href: item.navLink || '/'
            // to: item.navLink || '/',
            // isActive: (match, location) => {
            //   if (!match) {
            //     return false
            //   }
            //
            //   if (match.url && match.url !== '' && match.url === item.navLink) {
            //     currentActiveItem = item.navLink
            //   }
            // }
          })}
        /*eslint-enable */
        onClick={e => {
          if (!item.navLink.length) {
            e.preventDefault();
          }
          parentItem ? resetActiveGroup(item.navLink) : resetActiveAndOpenGroups()
        }}
      >
        <a className='d-flex align-items-center fw-bold'>
          {item.icon}
          <span className='menu-item fw-bolder' style={{ fontSize: '9pt' }}>
            {item.title}
          </span>

          {item.badge && item.badgeText ? (
            <Badge className='ml-auto mr-1' color={item.badge} pill>
              {item.badgeText}
            </Badge>
          ) : null}
        </a>
      </LinkTag>
    </li>
  )
}

export default VerticalNavMenuLink;


// // ** React Imports
// import { useEffect } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
//
// // ** Third Party Components
// import classnames from 'classnames'
//
// // ** Reactstrap Imports
// import { Badge } from 'reactstrap'
//
// const VerticalNavMenuLink = ({
//   item,
//   activeItem,
//   setActiveItem,
//   currentActiveItem
// }) => {
//   // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
//   const LinkTag = item.externalLink ? 'a' : NavLink
//
//   // ** Hooks
//   const location = useLocation()
//
//   useEffect(() => {
//     if (currentActiveItem !== null) {
//       setActiveItem(currentActiveItem)
//     }
//   }, [location])
//
//   return (
//     <li
//       className={classnames({
//         'nav-item': !item.children,
//         disabled: item.disabled,
//         active: item.navLink === activeItem
//       })}
//     >
//       <LinkTag
//         className='d-flex align-items-center'
//         target={item.newTab ? '_blank' : undefined}
//         /*eslint-disable */
//         {...(item.externalLink === true
//           ? {
//               href: item.navLink || '/'
//             }
//           : {
//               to: item.navLink || '/',
//               isActive: match => {
//                 if (!match) {
//                   return false
//                 }
//
//                 if (
//                   match.url &&
//                   match.url !== '' &&
//                   match.url === item.navLink
//                 ) {
//                   currentActiveItem = item.navLink
//                 }
//               }
//             })}
//       >
//         {item.icon}
//         <span className='menu-item text-truncate'>{item.title}</span>
//
//         {item.badge && item.badgeText ? (
//           <Badge className='ms-auto me-1' color={item.badge} pill>
//             {item.badgeText}
//           </Badge>
//         ) : null}
//       </LinkTag>
//     </li>
//   )
// }
//
// export default VerticalNavMenuLink
