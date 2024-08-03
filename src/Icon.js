import { Image } from "react-native";

function Logo({}){
    return(
        <Image source={require('./../assets/logo.png')}/>
    )
};
function Home({size}){
    return(
        <Image 
        style={{width:size, height:size}} source={require('./../assets/home.png')}/>
    )
};
function Profile({size}){
    return(
        <Image 
        style={{width:size, height:size}} source={require('./../assets/profile.png')}/>
    )
};
function Search({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/search.png')}/>
    )
};
function Shop({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/shop.png')}/>
    )
};
function Reel({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/reel.png')}/>
    )
};
function ReelField({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/reel-field.png')}/>
    )
};
function HomeField({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/home-field.png')}/>
    )
};
function ShopField({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/shop-field.png')}/>
    )
};
function SearchField({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/search-field.png')}/>
    )
};
function Plus({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/plus.png')}/>
    )
};
function Heart({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/heart.png')}/>
    )
};
function Messenger({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/messenger.png')}/>
    )
};
function Dots(){
    return(
        <Image style={{width:15, height:3}} source={require('./../assets/more.png')}/>
    )
};
function Bookmark({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/bookmark.png')}/>
    )
};
function Comment({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/comment.png')}/>
    )
};
function Share({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/share.png')}/>
    )
};
function Dropdown({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/dropdown.png')}/>
    )
};
function BurgerMenu({size}){
    return(
        <Image style={{width:size, height:size}} source={require('./../assets/burger.png')}/>
    )
};



export{Logo,Plus,Home,Dropdown,BurgerMenu,Comment,Share,Profile,Bookmark,Search,Shop,Reel,HomeField,SearchField,Dots,ShopField,ReelField,Heart,Messenger};