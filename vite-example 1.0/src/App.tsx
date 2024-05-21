import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store';

import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BookForm from './components/BookForm';
import AuthorList from './components/AuthorList';
import AuthorDetails from './components/AuthorDetails';
import AuthorForm from './components/AuthorForm';
