import React from "react";
import "./Project.css";
import styled from "styled-components";
import marketplace from "./../../assets/marketplace.png";
import multisigwallet from "./../../assets/multisigWallet.png";
import tokenExchangeApp from "./../../assets/naija-exchange.png";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 415px;
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
      <p className="purple-text">💻 Take a look at my projects (Web3)</p>
      <div className="header-title-box-project">
        These projects are running on the Goerli testnet, You might need a
        goerli eth to interact with them. Here's where you can get free goerli
        eth.{" "}
        <a
          className="purple-text"
          target="_blank"
          href="https://faucetlink.to/goerli"
          rel="noreferrer"
        >
          https://faucetlink.to/goerli
        </a>
      </div>
      <Wrapper>
        <div className="project">
          <img
            src={tokenExchangeApp}
            alt="tokenExchangeApp"
            width="100%"
            height="150px"
          />
          <h4>Naija Token Exchange</h4>
          <p>
            A place where you can exchange ERC20 tokens, deposit and withdraw.
          </p>

          <div className="links_div">
            <a
              target="_blank"
              href="https://naija-token-exchange.vercel.app/"
              rel="noreferrer"
            >
              <div className="site">Site</div>
            </a>
            <a
              target="_blank"
              href="https://github.com/alamin-deriv/naija-token-exchange"
              rel="noreferrer"
            >
              <div>Code</div>
            </a>
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
            <a
              target="_blank"
              href="https://ak-multisignature-wallet.vercel.app/"
              rel="noreferrer"
            >
              <div className="site">Site</div>
            </a>
            <a
              target="_blank"
              href="https://github.com/alamin-deriv/ak-multisig-wallet"
              rel="noreferrer"
            >
              <div
                onClick={() =>
                  (window.location =
                    "https://github.com/alamin-deriv/ak-multisig-wallet")
                }
              >
                Code
              </div>
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src={marketplace}
            alt="marketplace"
            width="100%"
            height="150px"
          />
          <h4>Market Place</h4>
          <p>
            A marketplace where you can buy and sell multiple products......
          </p>

          <div className="links_div">
            <a
              target="_blank"
              href="https://blockchain-marketplace-nu.vercel.app/"
              rel="noreferrer"
            >
              <div className="site">Site</div>
            </a>
            <a
              target="_blank"
              href="https://github.com/alamin-deriv/blockchain-marketplace"
              rel="noreferrer"
            >
              <div>Code</div>
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Project;
