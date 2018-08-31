import React from 'react';

import {StackNavigator} from 'react-navigation';

import LogIn from './LogIn';

import Register from './Register';

import Recover from './Recover';

export const HomeStack = StackNavigator({
    LogIn: {
    screen:LogIn
  },
  Register: {
    screen:Register
  },
  Recover: {
    screen:Recover
  }
},
{ initialRouteName: 'LogIn',
  headerMode: 'none'
});

// export const NewsStack = StackNavigator({
//   News: {
//     screen:News
//   },
//   Categories: {
//     screen:Categories
//   },
//   Detail: {
//     screen:Detail
//   }
// },
// {
//   headerMode: 'none'
// });

// export const VideosStack = StackNavigator({
//   Videos: {
//     screen:Videos
//   },
//   VideoDetail: {
//     screen:VideoDetail
//   }
// },
// {
//   headerMode: 'none'
// });
