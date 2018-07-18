import React from 'react';

const BreadCrumbs = ({ crumbs }) => {
  const crumbEls = crumbs.map(crumb => (
    <li key={`crumb-${crumb.name}`}>
      <a href={`${crumb.route}`}>{crumb.name}</a>
    </li>
  ));

  return (
    <nav aria-label="You are here:">
      <ul className="breadcrumbs">
        {crumbEls}
      </ul>
      <hr/>
    </nav>
  );
};

export default BreadCrumbs;
