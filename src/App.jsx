import './App.css'
import UserList from "./components/UserList.jsx";
import Counter from "./components/Counter.jsx";
import SayHello from "./components/SayHello.jsx";
import UserInfo from "./components/UserInfo.jsx";
import LoginForm from "./components/LoginForm.jsx";

const  App = ()=> {


    const firstUser = {name:"Buse", surname:"Doğan",point:100};
    const secondUser = {name:"Ömer", surname:"Doğan",point:85};
    const thirtUser = {name:"Uzay", surname:"Doğan",point:75};

/*    const  isLoggedIn = false;
    const  username = 'Deneme_user';*/


    // Yorum satırı için ctrl + shift + /
  return (
      <>
   {/*      <div>{isLoggedIn ?
             (
                 <div>Hoşgeldiniz :  {username}</div>
         ) : (

             <div>Lütfen Giriş yapınız.</div>
             )

         }</div>*/}

   {/*       <UserList />*/}

       {/*   <Counter/>*/}

       {/*   <SayHello name ="Ömer"/>
          <SayHello name ="Buse"/>
          <SayHello name ="Doğan"/>*/}
{/*          <UserInfo info={firstUser} />
          <UserInfo info={secondUser} />
          <UserInfo info={thirtUser} />*/}



          <LoginForm/>

      </>
  )
}

export default App
