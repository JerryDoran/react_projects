import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    submenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [cols, setCols] = useState('col-2');

  useEffect(() => {
    setCols('col-2');
    // gets the aside element node
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setCols('col-3');
    }

    if (links.length > 3) {
      setCols('col-4');
    }
  }, [location, links]);

  return (
    <aside
      className={`${submenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${cols}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
