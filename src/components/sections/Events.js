import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import Icon from '@common/Icon';
import { getEvents, postRegisterUser } from '../../api';
import moment from 'moment';
import Modal from 'react-modal';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const customStyles = {
  overlay: {
    zIndex: 10000,
  },
  content: {
    height: '100%',
    width: '100%',
    border: 'none',
    inset: 0,
    padding: 32,
  },
};

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => (
  <div style={{ marginBottom: 24 }}>
    <p style={{ fontSize: 18, marginBottom: 0 }}>{label}</p>
    <input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

const EventDetails = ({ isOpen, handleModal, data, ...props }) => {
  const schema = Yup.object().shape({
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModal}
      style={customStyles}
      contentLabel="Example Modal"
      preventScroll={true}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <h2 style={{ marginRight: 24 }}>{data?.['Name']}</h2>
          <Icon
            name="multiply"
            onClick={handleModal}
            style={{ maxHeight: 24, cursor: 'pointer', textAlign: 'right' }}
          />
        </div>
        <p
          style={{
            color: 'rgba(9, 140, 107, 1)',
            fontSize: 22,
            marginBottom: 32,
          }}
        >
          Free
        </p>
        <DetailsSection>
          <div style={{ flex: 1, marginRight: 60 }}>
            <p style={{"white-space": "pre-wrap"}}>{data?.['Details']}</p>
            <h3 style={{ margin: '72px 0 24px 0' }}>Register</h3>
            <Formik
              initialValues={{
                email: '',
                name: '',
                city: '',
              }}
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                const requestData = {
                  records: [
                    {
                      fields: {
                        Name: values.name,
                        Email: values.email,
                        City: values.city,
                        Event: data?.['ID']?.toString?.(),
                      },
                    },
                  ],
                };
                try {
                  var res = await postRegisterUser(requestData);
                  if (res.ok) {
                    actions.resetForm();
                    handleModal();
                    alert("We've successfully completed your registration!");
                  } else throw new Error('failed');
                } catch (error) {
                  actions.resetForm();
                  alert('Something went wrong. Please try again later.');
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="name"
                    component={CustomInputComponent}
                    label="Name"
                    style={{"height": "50px"}}
                  />
                  <Field
                    name="city"
                    component={CustomInputComponent}
                    label="City"
                    style={{"height": "50px"}}
                  />
                  <Field
                    name="email"
                    component={CustomInputComponent}
                    label="Email"
                    style={{"height": "50px"}}
                  />
                  <button
                    className="btn-base btn-contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <RightContainer>
            <h3>{moment(data?.['Time']).format('dddd, MMM DD, YYYY')}</h3>
            <p style={{ fontSize: 18 }}>
              Time: {moment(data?.['Time']).format('hh:mm a')}
            </p>
            <p style={{ fontSize: 18 }}>Location: Online via google meet</p>
            <p style={{ fontSize: 18 }}>Seats: {data?.['Seats']}</p>
          </RightContainer>
        </DetailsSection>
      </Container>
    </Modal>
  );
};

const MAX_EVENTS = 3;

const UsedBy = () => {
  const data = useStaticQuery(graphql`
    query {
      art_story: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "tell_story" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const [isLoading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState(null);
  const [viewMoreTrue, setViewMore] = useState(false);

  useEffect(() => {
    (async function IIFE() {
      setLoading(true);
      try {
        var res = await getEvents();
        var resJson = await res.json();
        setLoading(false);
        if (res.ok) {
          const list = resJson.records
            .map(item => item.fields)
            .filter(item => new Date(item['Time']) > new Date());
          setEvents(list);
        } else throw new Error('Request failed');
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  var showEventsList =
    events?.length > MAX_EVENTS && !viewMoreTrue
      ? events?.slice?.(0, MAX_EVENTS)
      : events;

  return (
    <Section id="sessions" accent>
      <StyledContainer>
        <div>
          <EventDetails
            isOpen={eventId != null}
            handleModal={() => setEventId(null)}
            data={events.filter(item => item.ID == eventId)[0]}
          />
          <h1>Upcoming Group Sesssions</h1>
          <LogoGrid></LogoGrid>
          {showEventsList.map(item => {
            return (
              <Card key={item.ID}>
                <div>
                  <h3>{moment(item['Time']).format('dddd, MMM DD, YYYY')}</h3>
                  <p style={{ color: 'rgba(9, 140, 107, 1)', fontSize: 14 }}>
                    Free
                  </p>
                  <p style={{ fontSize: 18 }}>
                    Time: {moment(item['Time']).format('hh:mm a')}
                  </p>
                  <p style={{ fontSize: 18 }}>
                    Location: Online via google meet
                  </p>
                  <p style={{ fontSize: 18 }}>Seats: {item['Seats']}</p>
                </div>
                <div>
                  <div>
                    <button
                      onClick={() => setEventId(item.ID)}
                      className="btn-base btn-contained"
                      style={{ width: '100%' }}
                    >
                      Register
                    </button>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <button
                      onClick={() => setEventId(item.ID)}
                      className="btn-base btn-outlined"
                      style={{ width: '100%' }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}

          {events?.length > MAX_EVENTS && !viewMoreTrue ? (
            <button
              className="btn-base btn-outlined btn-black"
              style={{ display: 'block', marginLeft: 'auto' }}
              onClick={() => setViewMore(true)}
            >
              View More
            </button>
          ) : events?.length > MAX_EVENTS && viewMoreTrue ? (
            <button
              className="btn-base btn-outlined btn-black"
              style={{ display: 'block', marginLeft: 'auto' }}
              onClick={() => setViewMore(false)}
            >
              View Less
            </button>
          ) : null}
        </div>
        <Art>
          <Img fluid={data.art_story.childImageSharp.fluid} />
        </Art>
      </StyledContainer>
    </Section>
  );
};

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: calc(50% - 300px);
  right: calc(50% + 32px);

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: calc(50% - 250px);
    right: calc(65% + 32px);
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const Card = styled.div`
  padding: 24px;
  background: white;
  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const DetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: ${props => props.theme.screen.md}) {
    flex-direction: column;
  }
`;

const RightContainer = styled.div`
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-top: 24px;
  }
`;

export default UsedBy;
