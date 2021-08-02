import * as React from 'react';

import { IntercomProvider } from '../../../dist';

const ProviderAutoBootProps = () => {
  const phone = '123456';

  return (
    <IntercomProvider appId="jcabc7e3" autoBootProps={{ phone }} autoBoot>
      <p>Intercom children</p>
    </IntercomProvider>
  );
};

export default ProviderAutoBootProps;
