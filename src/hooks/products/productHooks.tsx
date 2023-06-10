import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import config from "../../config";
import { Product } from "../../types/Product";
import { useNavigate } from "react-router-dom";

export const useFetchProducts = () => {
    return useQuery<Product[], AxiosError>("products", ()=> 
        axios.get(`${config.baseApiUrl}/products`)
        .then((response) => response.data)
    );
}

export const useFetchProduct = (id:string) => {
    return useQuery<Product, AxiosError>(["products", id], ()=>
        axios.get(`${config.baseApiUrl}/products/${id}`)
        .then((response) => response.data)
    );
}

export const useAddProduct = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Product>(
        (product) => axios.post(`${config.baseApiUrl}/products`, product),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("products")
                nav("/")
            }
        }
    );
}

export const useUpdateProduct = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Product>(
        (product) => axios.post(`${config.baseApiUrl}/products`, product),
        {
            onSuccess: (_, product) => {
                queryClient.invalidateQueries("products")
                nav(`/products/${product.id}`)
            }
        }
    );
}

export const useDeleteProduct = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Product>(
        (product) => axios.post(`${config.baseApiUrl}/products/${product.id}}`, product),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("products")
                nav("/")
            }
        }
    );
}