import React from 'react';
import look, { StyleSheet } from 'react-look'
import Header from './header/Header';

const App = ({ children }) => {
  return (
    <div>
      <Header/>
      { children }
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '<100hv></100hv>'
  }
});

export default look(App);