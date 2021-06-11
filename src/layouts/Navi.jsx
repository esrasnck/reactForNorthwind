import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  // const diyerek destructor işlemi gerçekleştirecez  => initialState öncekinde ürünler olduğu için, state'i boş arraydi. fakat bu durumda
  // içerisinde birşeyler olduğundan(state durumu) bunun da default'u ya truedur ya da false dur.

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()

  function handleSignOut(){ // çıkış yapma işlemini handle edecez.
      
    setIsAuthenticated(false)   // bu fonksiyonu çağıracak olan da alt component
    // offline olunca, product sayfasına geri dönmek için, burada useHistory'i kullanıyoruz
    
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
              <CartSummary></CartSummary>
              { // angularda ngIf ile yapıyordur. burada js kullanacaz. isAuthenticated ve setIsAuthenticated'ı destructe yapacaz.
                // useState bize ayrı ayrı iki tane bilgi geçiyor. biz de onu destructe ediyoruz.
                // çıkış yapa bastığımda, isAuthenticated'ı değiştirmem gerekiyordu. onu değiştiren fonksiyon, setIsAuthenticated
                // sen setIsAuthenticated'ı kullanarak, ona true ya da false değerini verebilirsin.

                isAuthenticated ? <SignedIn signedOut={handleSignOut} bisey="1"/> : <SignedOut signedIn={handleSignIn} birsey="1"/>

                // sanki singed'in içinde signedOut diye bir fonksiyon var da, o da aslında handleSignOut fonksiyonunu tetikliyor
                // bisey de bunun içindeki değer. bunlara props diyoruz. Bu değerler orada nasıl kullanacaz? => signedIn 'e git

              }
      
          
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

// eğer kişi authentice olduysa signed in i göster, authentice olmamışsa sign-out u göster diyor. 
// buna karar veren navi. state'i tutan navi. (Fatiq'in state mevzusu buradan geliyor.)

// ** reactta bir componente, senin bir şarta göre birşeyler yapman gerekiyorsa, bir datayı tutman gerekiyorsa,
// orada aklına state gelecek. yani o componentin datası. bu işin en basic kısmı. biz bir sonraki aşamada alt componentte data taşıycaz.


// hangisini gösterceğine karar veren navi olduğundan senin state bilgisini burada tutman gerek 