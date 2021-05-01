import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import Directory from './directory.component';

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  })

const CartDropdownContainer = connect(mapStateToProps)(Directory)

export default CartDropdownContainer;