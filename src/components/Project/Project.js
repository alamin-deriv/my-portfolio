import React from "react";
import "./Project.css";
import styled from "styled-components";
import marketplace from "./../../assets/marketplace.png";
import multisigwallet from "./../../assets/multisigWallet.png";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    position: relative;

    @media (min-width: 320px) and (max-width: 992px) {
        display: block;
        height: fit-content;
    }

    & .project {

      width: 33%;
      margin: 30px 10px 20px 0;
      padding: 20px 10px;
      background-color: var(--gray-color);
      border-radius: 5px;
      color: var(--white-color);

      @media (min-width: 320px) and (max-width: 992px) {
        width: 80%;
        margin: 20px auto;
    }
      
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

        @media (min-width: 320px) and (max-width: 992px) {
        justify-content: space-between;
    }
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
            @media (min-width: 320px) and (max-width: 992px) {
               margin-right: 0px;
    }
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
        <div className="project">
          <img
            src={multisigwallet}
            alt="multisigwallet"
            width="100%"
            height="150px"
          />
          <h4>Multisignature Wallet</h4>
          <p>
            A wallet that require two or more private keys to sign and send a
            transaction.
          </p>

          <div className="links_div">
            <div
              className="site"
              onClick={() =>
                (window.location = "https://gorgeous-yeot-0fb8e3.netlify.app/")
              }
            >
              Site
            </div>
            <div
              onClick={() =>
                (window.location =
                  "https://github.com/alamin-deriv/ak-multisig-wallet")
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
