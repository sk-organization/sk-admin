import React from 'react';
import { Row, Col, Avatar, Table } from 'antd';
import {
  useFranchiseQuery,
  useWithFranchiseOrdersQuery,
} from 'generated/Hooks';
import { IMAGE_HOST } from 'constants/apollo';
import { FranchiseTableConfig } from 'config/AdminFranchiseAreasTableConfig/FranchiseTableConfig';

interface Props {
  path: string;
  franchiseId?: string;
}

const Franchise: React.FC<Props> = props => {
  const { error, loading, data } = useFranchiseQuery({
    variables: {
      franchiseId: props.franchiseId,
    },
  });

  const franchiseOrderData = useWithFranchiseOrdersQuery({
    variables: {
      withFranchiseId: props.franchiseId,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;

  const { franchise } = data;

  const { bankDetails, user } = franchise;
  const { defaultLocation } = user;

  console.log(franchiseOrderData);

  if (franchiseOrderData.loading) return <div>Loading...</div>;
  if (franchiseOrderData.error) return <div>Server Error...</div>;

  return (
    <div>
      <div>
        <p>map here!!</p>
      </div>
      <br />
      <br />

      <Row>
        <Col span={6}>
          <h2>Franchise Info</h2>
          <div>
            Name: <strong>{user.name}</strong>
          </div>
          <div>
            Email: <strong>{user.email}</strong>
          </div>
          <div>
            Phone: <strong>{user.phone}</strong>
          </div>
          <div>
            Gender: <strong>{user.gender.toLocaleLowerCase()}</strong>
          </div>
        </Col>
        <Col span={6}>
          <h2>Bank Details</h2>
          {bankDetails ? (
            <div>
              <div>
                Bank Name: <strong>{bankDetails.bankName}</strong>
              </div>
              <div>
                A/c: <strong>{bankDetails.accountNumber}</strong>
              </div>
              <div>
                IFSC_CODE: <strong>{bankDetails.IFSC_CODE}</strong>
              </div>
            </div>
          ) : (
            <p>Bank Details Not Available!!</p>
          )}
        </Col>
        <Col span={6}>
          <h2>Location Info</h2>
          <div>
            city: <strong>{defaultLocation.city}</strong>
          </div>
          <div>
            Address:{' '}
            <strong>
              {defaultLocation.address1}, {defaultLocation.address2}
            </strong>
          </div>
          <div>
            ZipCode: <strong>{defaultLocation.zipCode}</strong>
          </div>
        </Col>
        <Col span={6}>
          <Avatar
            size={160}
            alt="franchise_image"
            src={IMAGE_HOST + user.image}
          />
        </Col>
      </Row>
      <br />
      <br />
      <div>
        <h2>
          <span style={{ color: 'purple' }}>{user.name}</span> Reffered Products
        </h2>
        <br />
        <Table
          dataSource={franchiseOrderData.data.orders}
          columns={FranchiseTableConfig}
        />
      </div>
    </div>
  );
};

export default Franchise;
