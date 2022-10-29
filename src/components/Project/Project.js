import React from "react";
import "./Project.css";
import styled from "styled-components";
import marketplace from "./../../assets/marketplace.png";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 400px;

    & .project {
      width: 33%;
      margin: 30px 10px 20px 0;
      padding: 20px 10px;
      background-color: var(--gray-color);
      border-radius: 5px;
      color: var(--white-color);
      
      & img {
        margin-bottom: 10px;
        border-radius: 5px;
      }

      & p {
        font-size: 13px;
        margin-top: 10px;
      }

      & .links_div {
        display: flex;
        margin-top: 55px;
        & div {
           border: 0.5px solid var(--white-color);
           padding: 10px 30px;
           cursor: pointer;
           font-size: 12px;
           border-radius: 5px;

           
        }
        & .site {
            margin-right: 30px;
            background-color: var(--black-color-bg);
           }
      }
    }
  }
`;


function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">💻 Taka a look at my projects (Web3)</p>
      <Wrapper>
        <div className="project">
          <img
            src={marketplace}
            alt="marketplace"
            width="100%"
            height="150px"
          />
          <h4>Market Place</h4>
          <p>A place where you can buy and sell your products...</p>

          <div className="links_div">
            <div
              className="site"
              onClick={() =>
                (window.location =
                  "https://blockchain-marketplace-nu.vercel.app/")
              }
            >
              Site
            </div>
            <div
              onClick={() =>
                (window.location =
                  "https://github.com/alamin-deriv/blockchain-marketplace")
              }
            >
              Code
            </div>
          </div>
        </div>

      </Wrapper>
    </section>
  );
}

export default Project;
