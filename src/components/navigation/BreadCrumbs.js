import React from 'react';
import Button from '@material-ui/core/Button';

const BreadCrumbs = ({crumbs}) => {
  const crumbEls = crumbs.map((crumb, index) => {
    let trailingSlash = index !== (crumbs.length - 1) ? '/' : '';

    return (
      <span key={`crumb-${crumb.name}`}>
          <Button href={`${crumb.route}`}>{crumb.name}</Button> {trailingSlash}
      </span>
    );
  });

  return (
    <p>
      {crumbEls}
    </p>
  );
};

export default BreadCrumbs;
