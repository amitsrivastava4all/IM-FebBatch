const initCap =name=>name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();

const fullName = (firstName, lastName)=>`Hello ${initCap(firstName)} and ${initCap(lastName)}`; 