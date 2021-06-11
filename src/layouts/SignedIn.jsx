import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signedOut}) {

  // props => üst compenentten gelen signedOut={handleSignOut} bisey="1" kısım. ben parametre olarak verdiğim propslardaki
  // singOut'u metodunu, onClick ile çalıştıracam. propslar buraya obje olarak geliyor.  encapsulation var burada. destruction yaparsın burada.
  // objeleri props =>{signIn} şeklinde destruc edebiliyoruz

  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://lh3.googleusercontent.com/ogw/ADea4I7kvPi5I4M7Ckp04aITxe_gYvMbecL4IXX5uaMLPA=s32-c-mo"
        ></Image>
        <Dropdown pointing="top left" text="Esra">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signedOut} text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
