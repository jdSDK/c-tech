import * as Styled from './CountChanger.styled';
import { useState, useEffect } from 'react';

const CountChanger = ( {
    initialValue,
    handleValueUpdateCommit,
    minValue,
    maxValue,
    inputLabel,
    inputPadding,
    textColor,
} ) => {
    const [ inputValue, setInputValue ] = useState( initialValue );
    const [ isValid, setIsValid ] = useState( true );

    // Synchronize with upper level state changes
    useEffect( () => {
        setInputValue( initialValue );
    }, [ initialValue ] );

    const handleInputProcessingAndCommit = ( value ) => {
        const newValue = parseInt( value, 10 );

        // Basic validations
        if ( isNaN( newValue ) ) {
            setIsValid( false );
            return;
        }
        if ( newValue == initialValue ) {
            setIsValid( true );
            return;
        }
        // Min validations - if minValue is absent, use 0
        if ( minValue ? newValue < minValue : newValue < 0 ) {
            setIsValid( false );
            return;
        }
        // Max validations - if maxValue is absent, use Infinity
        if ( maxValue ? newValue > maxValue : newValue > Infinity ) {
            setIsValid( false );
            return;
        }
        // If all validations pass, set isValid to true
        setIsValid( true );

        // Commit the value
        handleValueUpdateCommit( newValue );
    };

    return (
        <Styled.Input
            name={ inputLabel }
            aria-label={ inputLabel }
            value={ inputValue }
            $isValid={ isValid }
            $inputPadding={ inputPadding }
            $textColor={ textColor }
            onChange={ e => setInputValue( e.target.value ) }
            onKeyUp={ ( e ) => {
                if ( e.key === "Enter" ) {
                    handleInputProcessingAndCommit( inputValue );
                }
            } }
            onBlur={ () => handleInputProcessingAndCommit( inputValue ) }
        />
    );
};
export default CountChanger;