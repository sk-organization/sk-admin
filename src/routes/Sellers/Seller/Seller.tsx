import React from 'react';
import { useSellerQuery } from 'generated/Hooks';
import { Row, Col } from 'antd';

import { IMAGE_HOST } from 'constants/apollo';
import styles from './Seller.module.css';
import Products from 'routes/Products/Products';

interface Props {
  path: string;
  sellerId?: string;
}

const Seller: React.FC<Props> = props => {
  const { loading, error, data } = useSellerQuery({
    variables: {
      id: props.sellerId,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;

  console.log(data);

  const { seller } = data;

  const { user, bankDetails } = seller;

  return (
    <div>
      <Row>
        <Col span={8}>
          <h2>User Info</h2>
          <div>
            <span>Name:</span> <span className={styles.User}>{user.name}</span>
          </div>
          <div>
            <>
              <span>Email:</span>{' '}
              <span className={styles.User}>{user.email}</span>
            </>
          </div>

          <div>
            <span>Phone: </span>
            <span className={styles.User}>{user.phone}</span>{' '}
          </div>
          {user.location && (
            <div>
              <span>City: </span>{' '}
              <span className={styles.User}>{user.location.city}</span>{' '}
            </div>
          )}

          <div>
            <span>Gender: </span>
            <span className={styles.User}>{user.gender}</span>{' '}
          </div>
        </Col>

        <Col span={8}>
          <h2>Seller Info</h2>
          Shop Name: <span className={styles.User}>{seller.shopName}</span>
          <br />
          {seller.website && (
            <>
              Website: <span className={styles.User}>{seller.website}</span>
            </>
          )}
          <br />
          {seller.bankDetails && (
            <>
              Bank Name:{' '}
              <span className={styles.User}> {bankDetails.bankName}</span>
              <br />
              Account Number:{' '}
              <span className={styles.User}> {bankDetails.accountNumber}</span>
              <br />
              IFSC Code:{' '}
              <span className={styles.User}> {bankDetails.IFSC_CODE}</span>
            </>
          )}
        </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <img
            style={{ height: '150px', marginRight: 100, borderRadius: '50%' }}
            src={IMAGE_HOST + user.image}
            alt="Seller"
          />
        </Col>
      </Row>
      <br />

      {seller.id && <Products initialWhere={{ seller: { id: seller.id } }} />}
    </div>
  );
};

export default Seller;
