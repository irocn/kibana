/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { createAction } from 'redux-actions';
import { MonitorDetailsActionPayload } from './types';
import { MonitorError } from '../../../common/runtime_types';
import { MonitorLocations } from '../../../common/runtime_types';
import { QueryParams } from './types';

export interface MonitorLocationsPayload extends QueryParams {
  monitorId: string;
}

export interface MonitorDetailsState {
  monitorId: string;
  error: MonitorError;
}

export const getMonitorDetailsAction = createAction<MonitorDetailsActionPayload>(
  'GET_MONITOR_DETAILS'
);
export const getMonitorDetailsActionSuccess = createAction<MonitorDetailsState>(
  'GET_MONITOR_DETAILS_SUCCESS'
);
export const getMonitorDetailsActionFail = createAction<Error>('GET_MONITOR_DETAILS_FAIL');

export const getMonitorLocationsAction = createAction<MonitorLocationsPayload>(
  'GET_MONITOR_LOCATIONS'
);
export const getMonitorLocationsActionSuccess = createAction<MonitorLocations>(
  'GET_MONITOR_LOCATIONS_SUCCESS'
);
export const getMonitorLocationsActionFail = createAction<Error>('GET_MONITOR_LOCATIONS_FAIL');
