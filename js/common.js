import cookies from 'js-cookie';

export default{
    getLoginStatus(){
        if(cookies.get("userid")){
            this.$store.commit("setUserData",{
                userid: cookies.get("userid"),
                username: cookies.get("username"),
                userpic: cookies.get("userpic"),
                userphone: cookies.get("userphone"),
            })
        }
    },
    logOut(){
        cookies.remove("username");
        cookies.remove("userid");
        cookies.remove("userpic");
        cookies.remove("userphone");
        this.$store.commit("setUserData",{
            userid:"",
            username:"",
            userpic:"",
            userphone:""
        })
    }
}