import React from 'react';
import { Row, Col, message, Button } from 'antd';
import { Formik, Field } from 'formik';
import TextInput from 'formik/Form/TextInput';
import SelectInput from 'formik/Form/Select';
import FileInput from 'formik/Form/FileInput';

interface Props {
  path: string;
}

const initialValues = {
  subCategoryName: '',
  categoryName: [],
  image: '',
};

const categoryOptions = ['SAREE', 'SUITS', 'KURTIS', 'LEHENGA'];

const AddSubCategory: React.FC<Props> = props => {
  return (
    <div>
      <Row>
        <Col span={7} />
        <Col span={10}>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={values => {
              console.log(values);
            }}
          >
            {({ handleSubmit, values }) => (
              <React.Fragment>
                <strong>Name:</strong>
                <Field
                  name="subCategoryName"
                  placeholder="Sub Category Name"
                  component={TextInput}
                />
                <strong>Select Category:</strong>

                <Field
                  name="categoryName"
                  placeholder="Select Item Category"
                  options={categoryOptions}
                  // labelInValue
                  component={SelectInput}
                />
                <strong>Choose Sub Category Image</strong>
                <Field
                  name="image"
                  listType="picture-card"
                  boxWidth="350px"
                  maxSize={1 * 1024 * 1024}
                  onError={error => message.error(error)}
                  fileTypes={['image/jpg', 'image/png', 'image/jpeg']}
                  multiple={false}
                  component={FileInput}
                />

                <Button
                  style={{ marginRight: 10 }}
                  type="primary"
                  onClick={() => handleSubmit()}
                >
                  Add SubCategory
                </Button>
                <Button type="default" onClick={() => window.history.back()}>
                  Back
                </Button>
              </React.Fragment>
            )}
          </Formik>
        </Col>
        <Col span={7} />
      </Row>
    </div>
  );
};

export default AddSubCategory;
