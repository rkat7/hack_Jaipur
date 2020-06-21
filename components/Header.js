import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu color={'blue'} style={{ marginTop: '10px' }}>
      <Link route="/">
        <a color='blue' className="item">CrowdCoin</a>
      </Link>

      <Menu.Menu color={'blue'} position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
