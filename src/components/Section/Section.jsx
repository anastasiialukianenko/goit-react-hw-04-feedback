import PropTypes from 'prop-types';
import React from "react";
import { Title, Block } from "./Section.styled";


export const Section = ({ title, children }) => (
    <Block>
    <Title>{title}</Title>
    {children}
  </Block>
    );

Section.propTypes = {
    title: PropTypes.string.isRequired,
}