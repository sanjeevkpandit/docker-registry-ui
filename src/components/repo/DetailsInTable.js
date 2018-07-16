import React from 'react';

const DetailsInTable = props => {
  const tableRows = props.value.map(value => {
    let keys = Object.keys(value);
    let el = keys.map(key => (
      <tr key={`manifest-${key}`}>
        <td>{key}</td>
        <td> : </td>
        <td>{value[key]}</td>
      </tr>
    ));

    return el;
  });

  return (
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default DetailsInTable;
