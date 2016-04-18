import React from 'react';
import look, { StyleSheet } from 'react-look'

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
        <h3 className={styles.title}>CQ</h3>
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    margin: '0 0.5rem'
  },
  title: {
    color: '#5B8BE3',
    fontFamily: 'fantasy, Georgia'
  }
});

export default look(Header);