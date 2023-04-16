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
              <span className="material-icons">search</span>
            </li>
            <li title="Notifications">
              <span className="material-icons">notifications</span>
            </li>
            <li title="Profile">
              <span className="material-icons">account_circle</span>
            </li>
            <li title="Logout">
              <span className="material-icons">logout</span>
            </li>
          </ul>
        </nav>
      </NavContainer>
      </Container>
    </div>
  )
}

export default Header