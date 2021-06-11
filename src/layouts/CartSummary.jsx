import React from 'react'
import { NavLink } from 'react-router-dom';
import { Dropdown} from "semantic-ui-react";

export default function () {
  // sepete git e tıkladığımda sepete gitmek istiyorum. react router dom dan gelen bir element ile bunu yapıyoruz.

    return (
        <div>
             <Dropdown item text="Sepetiniz">
              <Dropdown.Menu>
                <Dropdown.Item>Acer Laptop</Dropdown.Item>
                <Dropdown.Item>Asus Laptop</Dropdown.Item>
                <Dropdown.Item>Dell Laptop</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
         </Dropdown>
        </div>
    )
}
