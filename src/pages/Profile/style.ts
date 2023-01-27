import styled from "styled-components";

export const ProfileWrapper = styled.div`
  .profile {
    margin-bottom: 10rem;
  }

  .profileHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logOut {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #00cc66;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }

  .profileDetailsHeader {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
  }
  
  .personalDetailsText {
    font-weight: 600;
  }
  
  .changePersonalDetails {
    cursor: pointer;
    font-weight: 600;
    color: #00cc66;
  }

  .profileCard {
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.2);
    max-width: 500px;
  }

  .profileName,
  .profileEmail,
  .profileAddress,
  .profileAddressActive,
  .profileEmailActive,
  .profileNameActive {
    all: unset;
    margin: 0.3rem 0;
    font-weight: 600;
    width: 100%;
  }
  .profileEmail,
  .profileAddress,
  .profileAddressActive,
  .profileEmailActive {
    font-weight: 500;
  }
  .profileNameActive {
    background-color: rgba(44, 44, 44, 0.1);
  }
  .profileEmailActive {
    background-color: rgba(44, 44, 44, 0.1);
  }
`