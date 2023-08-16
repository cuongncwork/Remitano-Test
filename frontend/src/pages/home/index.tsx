import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { StateProp } from '../../types';
import { Col, Container, Row } from 'react-bootstrap';
import { Dispatch } from 'redux';

const FAKE_DATA = [
  {
    url: 'https://youtu.be/bxG8DPeECqM',
    title: 'Test',
    description: 'test',
    upVote: 12,
    downVote: 20,
  },
];

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = (props) => {
  return (
    <Container>
      {FAKE_DATA.map((data) => {
        const { url, title, description, upVote, downVote } = data;

        return (
          <Row>
            <Col sm={12} md={5} className='movie-video'></Col>
            <Col sm={12} md={7}></Col>
          </Row>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state: StateProp) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
