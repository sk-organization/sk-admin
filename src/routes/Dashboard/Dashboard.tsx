import React from 'react';

interface Props {
  path: string;
}

const Dashboard: React.FC<Props> = props => {
  return (
    <div>
      <h3>Hi, i am from Dashboard!!</h3>
    </div>
  );
};

export default Dashboard;
