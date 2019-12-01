import React from 'react';

interface Props {
  path: String;
}

const Settings: React.FC<Props> = props => {
  return (
    <div>
      <h3>Hi, i am from settings!</h3>
    </div>
  );
};

export default Settings;
