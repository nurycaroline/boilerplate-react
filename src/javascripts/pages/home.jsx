import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
  const { user } = props;

  return (
    <div className="page">
      <p>Home Page</p>
      <div>
        {user.logged ? JSON.stringify(user) : <p>Usuário não logado</p>}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);
