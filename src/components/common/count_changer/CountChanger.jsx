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
    const [ isTooltipVisible, setIsTooltipVisible ] = useState( false );
    const [ tooltipText, setTooltipText ] = useState( "" );
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
            showTooltip( "Please enter a valid number!" );
            return;
        }
        if ( newValue == initialValue ) {
            setIsValid( true );
            return;
        }
        // Min validations - if minValue is absent, use 0
        if ( minValue ? newValue < minValue : newValue < 0 ) {
            setIsValid( false );
            let minValueText = minValue ? minValue : 0;
            showTooltip( "Value cannot be less than " + minValueText );
            return;
        }
        // Max validations - if maxValue is absent, use Infinity
        if ( maxValue ? newValue > maxValue : newValue > Infinity ) {
            setIsValid( false );
            let maxValueText = maxValue ? maxValue : "Infinity";
            showTooltip( "Value cannot be greater than " + maxValueText );
            return;
        }
        // If all validations pass, set isValid to true
        setIsValid( true );

        // Commit the value
        handleValueUpdateCommit( newValue );
    };

    const showTooltip = ( text ) => {
        setIsTooltipVisible( true );
        setTooltipText( text || "Invalid input!" );
        setTimeout( () => {
            setIsTooltipVisible( false );
        }, 3000 ); // Hide tooltip after 3s
    };

    return (
        <div style={ { position: "relative" } }>
            <Styled.Tooltip $isVisible={ isTooltipVisible }>
                { tooltipText }
            </Styled.Tooltip>
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
        </div>
    );
};
export default CountChanger;