import React from 'react';
import {
  useAdminFranchiseAreasQuery,
  AdminFranchiseAreaWhereInput,
} from 'generated/Hooks';
import { Table } from 'antd';
import { AdminFranchiseAreasTableCofig } from 'config/AdminFranchiseAreasTableConfig/AdminFranchiseAreasTableConfig';
import { navigate } from '@reach/router';

interface Props {
  path: string;
  where?: AdminFranchiseAreaWhereInput;
}

const AdminFranchiseAreas: React.FC<Props> = props => {
  const { error, loading, data } = useAdminFranchiseAreasQuery({
    variables: {
      where: {},
    },
  });

  if (error) return <div>Server Error...</div>;

  console.log(data);

  const { adminFranchiseAreas = [] } = data || {};

  const adminFranchiseAreasMapped = adminFranchiseAreas.map(
    (adminFranchiseArea, index) => {
      let occupiedFranchise = 0;
      let nonOccupiedFranchise = 0;

      adminFranchiseArea.franchiseAreas.forEach(franchiseArea => {
        if (franchiseArea.franchise) {
          occupiedFranchise += 1;
        } else {
          nonOccupiedFranchise += 1;
        }
      });

      console.log({
        occupiedFranchise,
        nonOccupiedFranchise,
      });

      let adminFranchiseInfo = null;

      if (adminFranchiseArea.adminFranchise) {
        adminFranchiseInfo = {
          name: adminFranchiseInfo.name,
          phone: adminFranchiseInfo.phone,
        };
      }

      return {
        id: adminFranchiseArea.id,
        sn: index + 1,
        occupiedFranchise,
        nonOccupiedFranchise,
        areaName: adminFranchiseArea.commonName,
        numberOfFranchise: adminFranchiseArea.franchiseAreas.length,
        owner: adminFranchiseInfo,
      };
    },
  );

  return (
    <div>
      <Table
        key="id"
        dataSource={adminFranchiseAreasMapped}
        columns={AdminFranchiseAreasTableCofig}
        loading={loading}
        rowClassName={item => (item.owner ? '__franchise-occupied' : '')}
        pagination={false}
        onRowClick={adminFranchiseArea =>
          navigate(`/franchises-areas/franchises/${adminFranchiseArea.id}`)
        }
      />
    </div>
  );
};

export default AdminFranchiseAreas;
