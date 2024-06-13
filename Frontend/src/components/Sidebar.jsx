// import React, { useState } from 'react';
// import { FaBars, FaShoppingCart } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import { AiOutlineProject } from 'react-icons/ai';
// import { FaClipboardUser } from 'react-icons/fa6';
// import { GrInProgress } from 'react-icons/gr';

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       name: 'My Projects',
//       icon: <AiOutlineProject />,
//       path: '/projects',
//     },
//     {
//       name: 'Gigs',
//       icon: <FaClipboardUser />,
//       path: '/gigs',
//     },
//     {
//       name: 'Progress',
//       icon: <GrInProgress />,
//       path: '/progress',
//     },
//     {
//       name: 'Supplies',
//       icon: <FaShoppingCart />,
//       path: '/supplies',
//     },
//   ];
//   return (
//     <div className='container'>
//       <div style={{ width: isOpen ? '200px' : '50px' }} className='sidebar'>
//         <div className='top_section'>
//           <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo'>
//             Logo
//           </h1>
//           <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='bars'>
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className='link'
//             activeclassName='active'
//           >
//             <div className='icon'>{item.icon}</div>
//             <div
//               style={{ display: isOpen ? 'block' : 'none' }}
//               className='link_text'
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Sidebar;

{
  /* <SidebarB>
          <SidebarItem
            icon={<AiOutlineProject size={20} text='My Projects' />}
          />
          <SidebarItem icon={<FaShoppingCart size={20} text='Supplies' />} />
          <SidebarItem icon={<FaClipboardUser size={20} text='Talents' />} />
          <SidebarItem icon={<GrInProgress size={20} text='Progress' />} />
        </SidebarB>
        <SidebarS>
          <SidebarItem icon={<AiOutlineProject size={20} text='Projects' />} />
          <SidebarItem
            icon={<FaShoppingCart size={20} text='My Proposals' />}
          />
          <SidebarItem
            icon={<FaShoppingCart size={20} text='Track Progress' />}
          />
          <SidebarItem icon={<FaClipboardUser size={20} text='My Gigs' />} />
          <SidebarItem icon={<GrInProgress size={20} text='My Products' />} />
        </SidebarS> */
}
