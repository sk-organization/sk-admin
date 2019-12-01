import React from 'react';
import { Row, Col } from 'antd';

interface Props {
  path: string;
  franchiseId?: string;
}

const Franchise: React.FC<Props> = props => {
  // const { error, loading, data } = useFranchiseQuery({
  //   variables: {
  //     franchiseId: props.franchiseId
  //   }
  // })

  // if(loading) return <div>Loading...</div>
  // if(error) return <div>Server Error...</div>

  // console.log(data);

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
            Name: <strong></strong>
          </div>
          <div>
            Email: <strong></strong>
          </div>
          <div>
            Phone: <strong></strong>
          </div>
          <div>
            Gender: <strong></strong>
          </div>
        </Col>
        <Col span={6}>
          <h2>Bank Details</h2>
          <div>
            Bank Name: <strong></strong>
          </div>
          <div>
            A/c: <strong></strong>
          </div>
          <div>
            IFSC_CODE: <strong></strong>
          </div>
        </Col>
        <Col span={6}>
          <h2>Location Info</h2>
          <div>
            city: <strong></strong>
          </div>
          <div>
            Address: <strong></strong>
          </div>
          <div>
            ZipCode: <strong></strong>
          </div>
        </Col>
        <Col span={6}>
          <p>image info</p>
        </Col>
      </Row>
      <br />
      <br />
      <div>
        <h2>displaying franchise reffered products here!! </h2>
      </div>
    </div>
  );
};

export default Franchise;
