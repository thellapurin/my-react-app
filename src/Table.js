// Table.js

import React, { Component } from 'react';

const Table = ({ data, handleAction }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <button onClick={() => handleAction(item.id)}>Action</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
