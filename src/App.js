import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize AWS SDK for DynamoDB
    AWS.config.update({
      accessKeyId: 'AKIA3DJORRUDRNYHAXNC',
      secretAccessKey: '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',
      region: 'us-east-1'
    });

    const docClient = new AWS.DynamoDB.DocumentClient();

    // Create the parameters for the scan operation
    const params = {
      TableName: 'person'
    };

    // Fetch data from DynamoDB
    docClient.scan(params, (err, data) => {
      if (err) {
        console.error('Error fetching data:', err);
      } else {
        console.log('Data fetched successfully:', data);
        setData(data.Items); // Update state with fetched data
      }
    });
  }, []);

  const handleSubscribe = (itemId) => {
    // Perform subscribe action here with the itemId
    console.log('Subscribed to item with ID:', itemId);
  };

  return (
    <table style={{ border: '1px solid black' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th> {/* Add action column */}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>
              {/* Render Subscribe button in action column */}
              <button onClick={() => handleSubscribe(item.id)}>Subscribe</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
