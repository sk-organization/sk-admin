import React from 'react';

export const FranchiseAreaTableConfig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Area Name',
    dataIndex: 'commonName',
  },
  {
    title: 'Franchise',
    dataIndex: 'franchiseInfo',
    render: franchiseInfo => (
      <div>
        {franchiseInfo ? (
          <React.Fragment>
            <div>Name: {franchiseInfo.name}</div>
            <div>Phone: {franchiseInfo.phone}</div>
          </React.Fragment>
        ) : (
          <div>
            <p>Not Owned!</p>
          </div>
        )}
      </div>
    ),
  },
];
