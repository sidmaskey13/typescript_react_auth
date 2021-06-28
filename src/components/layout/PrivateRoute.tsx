import React, { Component, FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from "react-redux";

interface PrivateRouteProps extends RouteProps { }

export const PrivateRoute: React.FC<PrivateRouteProps> =
    ({ ...rest }) => {
        const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

        if (!isAuthenticated) {
            return (<Redirect to="/login" />)
        }
        return < Route {...rest} />;
    };

export default PrivateRoute;