import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { StateProp } from '../../types';
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router';

type ShareProps = {
  isLoggedIn: boolean;
};

const Share: FunctionComponent<ShareProps> = (props) => {
  const { isLoggedIn } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  return <></>;
};

const mapStateToProps = (state: StateProp) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Share);
