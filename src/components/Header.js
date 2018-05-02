import React, { Component } from "react";
import "./CSS/components.css";
import StyledLink from "./Styled/StyledLink";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(window.location);
    return (
      <div>
        <div className="main">
          {window.location.pathname === "/meet" ? (
            <span>
              <h1>Welcome</h1>
            </span>
          ) : window.location.pathname === "/projects" ? (
            <span>
              <h1>My Projects</h1>
            </span>
          ) : window.location.pathname === "/about" ? (
            <span>
              <h1>Brent Eckert</h1>
            </span>
          ) : window.location.pathname === "/futuremission" ? (
            <span>
              <h1>Vision</h1>
            </span>
          ) : (
            <span>
              <h1>Contact Me</h1>
            </span>
          )}

          <div id="links">
            {window.location.pathname === "/projects" ? (
              <StyledLink to="/meet">
              <span className="links">Home</span>
            </StyledLink>
            ) : (
                <StyledLink to="/projects">
                <span className="links">Projects</span>
              </StyledLink>
            )}
            <div
              className={
                window.location.pathname === "/meet"
                  ? "head-lines"
                  : window.location.pathname === "/projects"
                    ? "head-lines purple"
                    : window.location.pathname === "/about"
                      ? "head-lines green"
                      : window.location.pathname === "/futuremission"
                        ? "head-lines blue"
                        : "head-lines red"
              }
            />
            {window.location.pathname === "/about" ? (
                <StyledLink to="/meet">
                <span className="links">Home</span>
              </StyledLink>
            ) : (
                <StyledLink to="/about">
                <span className="links">About</span>
              </StyledLink>
            )}

            <div
              className={
                window.location.pathname === "/meet"
                  ? "head-lines"
                  : window.location.pathname === "/projects"
                    ? "head-lines purple"
                    : window.location.pathname === "/about"
                      ? "head-lines green"
                      : window.location.pathname === "/futuremission"
                        ? "head-lines blue"
                        : "head-lines red"
              }
            />
            {window.location.pathname === "/futuremission" ? (
              <StyledLink to="/meet">
              <span className="links">Home</span>
            </StyledLink>
            ) : (
              <StyledLink to="/futuremission">
              <span className="links">Mission</span>
            </StyledLink>
            )}

            <div
              className={
                window.location.pathname === "/meet"
                  ? "head-lines"
                  : window.location.pathname === "/projects"
                    ? "head-lines purple"
                    : window.location.pathname === "/about"
                      ? "head-lines green"
                      : window.location.pathname === "/futuremission"
                        ? "head-lines blue"
                        : "head-lines red"
              }
            />
            {window.location.pathname === "/contactbrent" ? (
              <StyledLink to="/meet">
              <span className="links">Home</span>
            </StyledLink>
            ) : (
                <StyledLink to="/contactbrent">
                <span className="links">Contact</span>
              </StyledLink>
              
            )}
          </div>
        </div>
        <div
          className={
            window.location.pathname === "/meet"
              ? "line"
              : window.location.pathname === "/projects"
                ? "line purple"
                : window.location.pathname === "/about"
                  ? "line green"
                  : window.location.pathname === "/futuremission"
                    ? "line blue"
                    : "line red"
          }
        />
      </div>
    );
  }
}

export default Header;
