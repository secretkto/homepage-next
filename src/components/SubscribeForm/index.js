import { connect } from 'react-redux';
import { submitSubscribeForm } from '../../actions/forms';

import { SubscribeForm } from './SubscribeForm';

const mapStateToProps = ({ forms }) => {
  return {
    error: forms.subscribe.error,
    pending: forms.subscribe.pending,
  };
};

const mapDispatchToProps = { onSubmit: submitSubscribeForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscribeForm);
