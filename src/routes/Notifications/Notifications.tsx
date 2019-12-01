import React from 'react';
import { Field, Formik } from 'formik';
import SelectInput from 'formik/Form/Select';
import TextInput from 'formik/Form/TextInput';
import { message, Button, Icon } from 'antd';
import FileInput from 'formik/Form/FileInput';
import TextArea from 'antd/lib/input/TextArea';

import styles from './Notification.module.css';

interface Props {
  path: string;
}

const initialValues = {
  notificationTitle: '',
  notificationDescription: '',
  notificationName: '',
  notificationImage: '',
  notificationType: [],
};

const nofiticationsType = [
  'ALL',
  'CUSTOMERS',
  'ACTIVE_CUSTOMERS',
  'INACTIVE_CUSTOMERS',
  'FRANCHISES',
  'ACTIVE_FRANCHISES',
  'INACTIVE_FRANCHISES',
  'SELLERS',
  'ACTIVE_SELLERS',
  'INACTIVE_SELLERS',
];

const Notifications: React.FC<Props> = props => {
  return (
    <div
      style={{
        padding: 30,
        maxWidth: '60%',
        marginLeft: '200px',
        border: '1px solid #EAEAEA',
      }}
    >
      <h2>Customers Notifications</h2>
      <Formik
        enableReinitialize
        onSubmit={values => {
          console.log(values);
        }}
        initialValues={initialValues}
      >
        {({ handleSubmit, values }) => {
          return (
            <div>
              <div className={styles.mb5}>
                Notification Title (optional){' '}
                <Icon title="optional" type="question-circle" />
              </div>
              <Field
                name="notificationTitle"
                placeholder="Nofitication Title"
                component={TextInput}
              />
              <div className={styles.mb5}>
                <span>Notification Type</span>
              </div>
              <Field
                name="notificationType"
                placeholder="notifications type"
                options={nofiticationsType}
                component={SelectInput}
              />
              <div className={styles.mb5}>
                <span>Notification Text</span>
              </div>
              <div>
                <TextArea
                  name="notificationDescription"
                  placeholder="Type Message"
                />
              </div>
              <br />

              <div className={styles.mb5}>
                <span>
                  Notifications Image (optional){' '}
                  <Icon title="optional" type="question-circle" />
                </span>
              </div>

              <Field
                name="notificationImage"
                listType="picture-card"
                className="avatar-uploader"
                boxWidth="340px"
                maxSize={5 * 1024 * 1024}
                onError={error => message.error(error)}
                fileTypes={['image/jpg', 'image/png', 'image/jpeg']}
                multiple={false}
                component={FileInput}
              />

              <div className={styles.mb5}>
                <span>
                  Notification Name (optional){' '}
                  <Icon title="optional" type="question-circle" />{' '}
                </span>
              </div>

              <Field
                name="notificationName"
                placeholder="Notifications Name"
                component={TextInput}
              />
              <Button type="primary" onClick={() => handleSubmit()}>
                Send Message
              </Button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Notifications;
