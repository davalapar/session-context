# session-context
Session state using React.Context.

#### intro

This module simplifies shit like you've never seen before.

#### basics

```js
import { SessionProvider } from 'session-context';

const App = () => (
  <SessionProvider>
    // nested code
  </SessionProvider>
);
```

```
class Header extends React.Component {
  componentDidMount() {
    const { updateSession } = this.props;
    fetchExternalCode()
      .then((data) => {
        updateSession({ data });
      });
  }
  render() {
    const { session } = this.props;
    return (
      <div>
        { session.data }
      </div>
    );
  }
}

Header.propTypes = {
  session: PropTypes.object.isRequired, // withSession
  updateSession: PropTypes.func.isRequired, // withSession
};

export default withSession(Header);
```

#### using `defaults` props for session

- useful when you're loading a session state from `window.__STATE__` and the like

```js
import { SessionProvider } from 'session-context';

const App = () => (
  <SessionProvider defaults={{ data: null }}>
    // nested code
  </SessionProvider>
);
```
