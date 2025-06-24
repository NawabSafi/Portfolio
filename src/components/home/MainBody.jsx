import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => {
              // Custom icon for LeetCode
              if (icon.url.includes("leetcode.com")) {
                return (
                  <a
                    key={`social-icon-${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.url}
                    aria-label="My LeetCode"
                  >
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fff',
                      borderRadius: '50%',
                      width: '48px',
                      height: '48px',
                      margin: '0 10px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}>
                      <img
                        src="/icons8-leetcode-24.png"
                        alt="LeetCode"
                        style={{ width: '32px', height: '32px', display: 'block' }}
                      />
                    </span>
                  </a>
                );
              }
              // Default icon
              return (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image}  fa-3x socialicons`} />
                </a>
              );
            })}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
