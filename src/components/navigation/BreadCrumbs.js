import React from 'react';
import Button from '@material-ui/core/Button';

const BreadCrumbs = ({ crumbs }) => {
  const crumbEls = crumbs.map(crumb => (
    <span key={`crumb-${crumb.name}`}>
      <Button href={`${crumb.route}`}>{crumb.name}</Button> /
    </span>

  ));

  return (
    <p>
      {crumbEls}
    </p>
  );
};

export default BreadCrumbs;
