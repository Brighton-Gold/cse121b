//This will capitalize the First letter of every string passed into it. 
// Makes everything prettier.
export default function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}