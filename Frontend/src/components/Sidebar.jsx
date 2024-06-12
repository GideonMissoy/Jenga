import React from 'react';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div>
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              onclick={() => {
                window.location.pathname = val.link;
              }}
            >
              {' '}
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
