import React from 'react';
import PropTypes from 'prop-types';

const SessionContext = React.createContext();
const SessionUpdateContext = React.createContext();

export class SessionProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setState = this.setState.bind(this);
  }

  render() {
    const { children } = this.props;
    return (
      <SessionContext.Provider value={this.state}>
        <SessionUpdateContext.Provider value={this.setState}>
          {children}
        </SessionUpdateContext.Provider>
      </SessionContext.Provider>
    );
  }
}

SessionProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const withSession = ChildComponent => props => (
  <SessionContext.Consumer>
    {session => (
      <SessionUpdateContext.Consumer>
        {updateSession => (
          <ChildComponent
            {...props}
            session={session}
            updateSession={updateSession}
          />
        )}
      </SessionUpdateContext.Consumer>
    )}
  </SessionContext.Consumer>
);

export default undefined;
