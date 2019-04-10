import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import Download from '../components/Download';

export default () => {
  return (
    <Page>
      <FormattedMessage id="meta_title_download">
        {(title) => (
          <FormattedMessage id="meta_description_download">
            {(description) => (
              <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
              </Helmet>
            )}
          </FormattedMessage>
        )}
      </FormattedMessage>

      <Container>
        <Download />
      </Container>
    </Page>
  );
};
