import firebase from 'firebase';
import functions = firebase.functions;

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAWfYnkgPgnicuf7TgDmflcRShpLYc6cw8',
    authDomain: 'business-networking-dev.firebaseapp.com',
    databaseURL: 'https://business-networking-dev.firebaseio.com',
    projectId: 'business-networking-dev',
    storageBucket: 'business-networking-dev.appspot.com',
    messagingSenderId: '501153927043',
    appId: '1:501153927043:web:cbb456f127db6b449570b6'
  }
};

export interface Profile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  address?: string;
  phone?: string;
  tags?: string [];
  bio?: string;
  role?: string;
  currentP?: string [];
  pastP?: string [];
  contacts?: string [];
}
export interface Project {
  projId: string;
  projName: string;
  projDescription: string;
  projCreatorId: string;
  projStartDate: Date;
  projEndDate: Date;
  projParticipants: string[];
}
export interface Task {
  done: boolean;
  pid?: string;
  tskName: string;
  tskId: string;
  tskDescription: string;
  tskDeadline: Date;
  uid?: string;
}
