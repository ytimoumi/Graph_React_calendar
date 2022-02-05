import React,{ Suspense }  from 'react';
import App from './App';
import { ApolloClient } from 'apollo-boost'
//import { createHttpLink } from 'apollo-link-http';
import {ApolloProvider} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import {store,persistor} from "./utils/redux/store";
import {Provider, useSelector} from "react-redux";
import { ApolloLink } from "apollo-link";
import { Spin } from 'antd';
import { PersistGate } from 'redux-persist/integration/react'
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink, HttpLink} from 'apollo-link-http';
import './i18n'
const firstLink = new createHttpLink({
    uri: window.process.env.REACT_APP_API_WEBINARPLEASE_HOST
});

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');

    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    };
});



// Create Second Link
const secondLink = new HttpLink({
    uri: window.process.env.REACT_APP_API_WEBINARPLEASE_HOST
});


const authLink2 = setContext(() => {
    const token2 = localStorage.getItem('jwtToken')
    return {
        headers: {
            Authorization: token2 ? `Bearer ${token2}` : ''
        }
    };
});



const client = new ApolloClient({
    link: ApolloLink.split(
        operation => operation.getContext().clientName === "second", // Routes the query to the proper client
        authLink2.concat(secondLink),
        authLink.concat(firstLink),
    ),
    cache: new InMemoryCache({
        addTypename: false
    }),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "cache-and-network",
        },
    },
});

export default (
    <Suspense fallback={(<Spin className="Spin">
        <div></div>
    </Spin>)}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ApolloProvider client={client}>
                        <App/>
                </ApolloProvider>
            </PersistGate>
        </Provider>
    </Suspense>
);