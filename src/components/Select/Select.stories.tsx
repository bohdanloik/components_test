import { action } from "@storybook/addon-actions";
import React, { useEffect, useState } from "react";
import { SelectCustomExample, SelectExample } from "./Select";


export default{
    title: 'Select Exemple'
}

export const SelectExemple = () => {


    return <>
    <SelectExample />
    </>
}
export const SelectWithValue= () => {


    return <>
    <SelectCustomExample 
    value = {'1'}
    items = {[
        {value: '1', title: 'Lviv'},
        {value: '2', title: 'Kyiv'},
        {value: '3', title: 'Lutsk'}
    ]}
    onChange={action('hello')}
    />
    </>
}

export const SelectWithOutValue= () => {


    return <>
    <SelectCustomExample 
    items = {[
        {value: 1, title: 'Lviv'},
        {value: 2, title: 'Kyiv'},
        {value: 3, title: 'Lutsk'}
    ]}
    onChange={action('hello')}
    />
    </>
}