import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. LOAD THE AUTHENTICATED USER
  const { isLoading, isAuthenticated } = useUser();

  // 2. IF THERE ISN'T AUTHENTICATED USER , REDIRECT TO THE /LOGIN
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. WHILE LOADING, SHOW SPINNER
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. IF THERE IS A USER , RENDER THE APP
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
