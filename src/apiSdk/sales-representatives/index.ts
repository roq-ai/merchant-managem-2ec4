import axios from 'axios';
import queryString from 'query-string';
import { SalesRepresentativeInterface, SalesRepresentativeGetQueryInterface } from 'interfaces/sales-representative';
import { GetQueryInterface } from '../../interfaces';

export const getSalesRepresentatives = async (query?: SalesRepresentativeGetQueryInterface) => {
  const response = await axios.get(`/api/sales-representatives${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSalesRepresentative = async (salesRepresentative: SalesRepresentativeInterface) => {
  const response = await axios.post('/api/sales-representatives', salesRepresentative);
  return response.data;
};

export const updateSalesRepresentativeById = async (id: string, salesRepresentative: SalesRepresentativeInterface) => {
  const response = await axios.put(`/api/sales-representatives/${id}`, salesRepresentative);
  return response.data;
};

export const getSalesRepresentativeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/sales-representatives/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteSalesRepresentativeById = async (id: string) => {
  const response = await axios.delete(`/api/sales-representatives/${id}`);
  return response.data;
};
