import React, { Component } from 'react'
import { Field } from 'redux-form' 
import {
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
} from 'react-weui'


export const RF = (InputComponent) => ({ meta: { touch, error, warning }, input: inputProps, ...props }) => (
    <InputComponent { ...inputProps } { ...props }/>
)

export const RFInput = ({ label, name, footer, meta: { touch, error, warning }, input: inputProps, ...props }) => (
    <FormCell warn={ (error || warning) && true}>
        <CellHeader>
            <Label>{ label }</Label>
        </CellHeader>
        <CellBody>
            <Input { ...inputProps } { ...props } />
        </CellBody>
        <CellFooter>
            { footer }
        </CellFooter>
    </FormCell>
)

export const RFRadio = ({ label, radioValue: value, meta: { touch, error, warning }, input: inputProps, ...props }) => (
    <FormCell radio>
        <CellBody>
            { label }
        </CellBody>
        <CellFooter>
            <Radio { ...inputProps } { ...props} value={value} />
        </CellFooter>
    </FormCell>
)

export const RFCheckbox = ({ label, meta: { touch, error, warning }, input: inputProps , ...props }) => (
    <FormCell checkbox>
        <CellHeader>
            <Checkbox { ...inputProps } { ...props} />
        </CellHeader>
        <CellBody>
            { label }
        </CellBody>
    </FormCell>
)

export const RFSwitch = ({ label, name, meta: { touch, error, warning }, input: inputProps , ...props }) => (
    <FormCell switch>
        <CellBody>
            { label }
        </CellBody>
        <CellFooter>
            <Switch { ...inputProps } { ...props } />
        </CellFooter>
    </FormCell>
)

export const RFTextArea = ({ label, name, meta: { touch, error, warning }, input: inputProps, ...props }) => (
    <FormCell warn={ (error || warning) && true}>
        <CellHeader>
            <Label>{ label }</Label>
        </CellHeader>
        <CellBody>
            <TextArea { ...inputProps } { ...props } />
        </CellBody>
    </FormCell>
)

export const RFSelectCreator = (body, footer) => (
    ({ label, name, children, meta: { touch, error, warning }, input: inputProps, ...props }) => (
    <FormCell select selectPos={ (body && 'before') || (label && 'after')} >
        <CellHeader>
            { (body && (
                <Select { ...inputProps } { ...props } >
                    { children }
                </Select>)) ||
              (label && <Label>{ label }</Label>) }
        </CellHeader>
        <CellBody>
            { body || <Select { ...inputProps } { ...props } >
                    { children }
            </Select> }
        </CellBody>
        <CellFooter>
            { footer }
        </CellFooter>
    </FormCell>
    )
)

export const RFSelect = RFSelectCreator()
