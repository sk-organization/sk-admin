import React from 'react';

export const AdminFranchiseAreasTableCofig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },

  {
    title: 'Area Name',
    dataIndex: 'areaName',
  },

  {
    title: 'No Of Franchises',
    dataIndex: 'numberOfFranchise',
  },

  {
    title: 'No Of Occupied Franchises',
    dataIndex: 'occupiedFranchise',
  },

  {
    title: 'No Of Available Franchise',
    dataIndex: 'nonOccupiedFranchise',
  },

  {
    title: 'Admin Franchise',
    dataIndex: 'owner',
    render: owner => (
      <div>
        {owner ? (
          <React.Fragment>
            <div>Name: {owner.name}</div>
            <div>Phone: {owner.phone}</div>
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
