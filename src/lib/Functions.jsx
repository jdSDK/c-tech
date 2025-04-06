export const randint = ( a, b ) => {
    // Helper to generate random int
    return Math.floor( Math.random() * ( a - b + 1 ) ) + b;
};

export const parseCommaDelimitedString = ( kms ) => {
    // Helper to parse numeric string into X.XXX.XXX format
    if ( kms === null || kms === undefined ) {
        return null;
    }
    return kms.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g,
        "."
    );
};

export const dateToString = ( date ) => {
    // Helper to conver date like 2021/01/28 00:00:00 to 28th January 2021
    if ( date === null || date === undefined ) {
        return null;
    }
    const dateObj = new Date( date );
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString( 'en-US', options );
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString( 'default', { month: 'long' } );
    const year = dateObj.getFullYear();
    const suffix = [ "th", "st", "nd", "rd" ][ day % 10 ] || "th";
    return `${ day }${ suffix } ${ month } ${ year }`;
};

export const getHoursUntilDateString = ( date ) => {
    // Helper to get hours until date
    if ( date === null || date === undefined ) {
        return null;
    }
    const today = new Date();
    const auctionDate = new Date( date );
    const diffTime = Math.abs( auctionDate - today );
    const diffHours = Math.ceil( diffTime / ( 1000 * 60 * 60 ) );
    return diffHours;
};

export const getDaysUntilDate = ( date ) => {
    // Helper to get days until date
    if ( date === null || date === undefined ) {
        return null;
    }
    const today = new Date();
    const auctionDate = new Date( date );
    const diffTime = Math.abs( auctionDate - today );
    const diffDays = Math.ceil( diffTime / ( 1000 * 60 * 60 * 24 ) );
    return diffDays;
};