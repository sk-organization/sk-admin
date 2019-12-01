import React from 'react';
import { useAdminFranchiseAreaQuery } from 'generated/Hooks';
import { Row, Col, Avatar, Table } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';
import { FranchiseAreaTableConfig } from 'config/AdminFranchiseAreasTableConfig/FranchiseAreaTableConfig';
import { navigate } from '@reach/router';

interface Props {
  path: string;
  franchisesId?: string;
}

const AdminFranchiseArea: React.FC<Props> = props => {
  console.log(props);

  const { error, loading, data } = useAdminFranchiseAreaQuery({
    variables: {
      adminFranchiseAreaId: props.franchisesId,
    },
  });

  // console.dir(error);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error....</div>;

  const { adminFranchiseArea } = data;

  console.log(adminFranchiseArea);

  const { adminFranchise, franchiseAreas } = adminFranchiseArea;

  const franchiseAreasMapped = franchiseAreas.map((franchiseArea, index) => ({
    ...franchiseArea,
    sn: index + 1,
    franchiseInfo: franchiseArea.franchise
      ? {
          name: franchiseArea.franchise.user.name,
          phone: franchiseArea.franchise.user.name,
        }
      : null,
  }));

  return (
    <div>
      <Row>
        <Col span={16}>
          <p>Map here!!</p>
        </Col>
        {adminFranchise ? (
          <Col span={8}>
            <h2>Admin Franchise Info</h2>
            {adminFranchise.franchise.user.image && (
              <Avatar
                alt="admin_image"
                size={120}
                src={IMAGE_HOST + adminFranchise.franchise.user.image}
              />
            )}
            <br />
            {adminFranchiseArea.commonName && (
              <div>
                Area Name: <strong>{adminFranchiseArea.commonName}</strong>
              </div>
            )}
            <div>
              {adminFranchise.franchise.user.name && (
                <div>
                  Name: <strong>{adminFranchise.franchise.user.name}</strong>
                </div>
              )}

              {adminFranchise.franchise.user.email && (
                <div>
                  Email: <strong>{adminFranchise.franchise.user.email}</strong>
                </div>
              )}

              {adminFranchise.franchise.user.phone && (
                <div>
                  Phone: <strong>{adminFranchise.franchise.user.phone}</strong>
                </div>
              )}
            </div>
          </Col>
        ) : (
          <div>
            <p>Admin Franchise Not Owned Yet !!</p>
          </div>
        )}
      </Row>
      <br />
      <br />
      <div>
        <Table
          key="id"
          dataSource={franchiseAreasMapped}
          columns={FranchiseAreaTableConfig}
          onRowClick={franchiseArea =>
            navigate(`/franchises/franchise/${franchiseArea.id}`)
          }
        />
      </div>
    </div>
  );
};

export default AdminFranchiseArea;
