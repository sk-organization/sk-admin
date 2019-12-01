import React from 'react';
import { Row, Col, message, Button } from 'antd';
import { Formik, Field } from 'formik';
import TextInput from 'formik/Form/TextInput';
import FileInput from 'formik/Form/FileInput';

import styles from './AddCategory.module.css';

interface Props {
  path: string;
}

const intialValues = {
  name: '',
  image: '',
};

const AddCategory: React.FC<Props> = props => {
  return (
    <div>
      <Row>
        <Col span={7} />
        <Col span={10}>
          <Formik
            enableReinitialize
            onSubmit={values => {
              console.log(values);
            }}
            initialValues={intialValues}
          >
            {({ handleSubmit }) => (
              <React.Fragment>
                <strong>Name: </strong>
                <Field
                  name="name"
                  placeholder="Category Name"
                  component={TextInput}
                />
                <strong>Choose Category Image</strong>
                <Field
                  name="image"
                  listType="picture-card"
                  boxWidth="340px"
                  maxSize={1 * 1024 * 1024}
                  onError={error => message.error(error)}
                  fileTypes={['image/jpg', 'image/png', 'image/jpeg']}
                  multiple={false}
                  component={FileInput}
                />

                <Button
                  className={styles.mr10}
                  type="primary"
                  onClick={() => handleSubmit()}
                >
                  Add Category
                </Button>
                <Button type="default" onClick={() => window.history.back()}>
                  Back
                </Button>
              </React.Fragment>
            )}
          </Formik>
        </Col>
      </Row>
      >
    </div>
  );
};

export default AddCategory;
