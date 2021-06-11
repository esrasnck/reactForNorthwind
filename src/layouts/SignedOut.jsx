import React from "react";
import { Menu, Button } from "semantic-ui-react";

export default function SignedOut({signedIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signedIn}>Giriş Yap </Button>
        <Button style={{ marginLeft: "0.7em" }}>Kayıt Ol </Button>
      </Menu.Item>
    </div>
  );
}

// parametre olarak obje istediğinden iki tane süslü parantez kullanıyoruz.
