import React from 'react'
import { Dropdown} from "semantic-ui-react";

export default function () {
    return (
        <div>
             <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>sepet sayfası</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
