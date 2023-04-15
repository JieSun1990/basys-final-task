import React from 'react'
import { NavContainer, Container, Draggable } from "./DragAndDropForm/styles";

function Header() {
  return (
    <div>
        <Container>
        <NavContainer>
        <nav>
          <strong>Hi, Dr. Lennon!</strong>
          <ul>
            <li title="Search">
              <span class="material-icons">search</span>
            </li>
            <li title="Notifications">
              <span class="material-icons">notifications</span>
            </li>
            <li title="Profile">
              <span class="material-icons">account_circle</span>
            </li>
            <li title="Logout">
              <span class="material-icons">logout</span>
            </li>
          </ul>
        </nav>
      </NavContainer>
      </Container>
    </div>
  )
}

export default Header