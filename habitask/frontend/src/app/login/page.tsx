'use client';
import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="logo-container">
          <Image
            src={require("../../public/logo.png")}
            alt="Logo"
            className="logo"
            width={200}
            height={200}
          />
          <div className="cta-button">
            <text>
              Start now,
              dont lose your time.
            </text>
          </div>
        </div>

        <div className="text-content">
          <h1>
            <span className="purple">Organize</span> sua vida.
            <br />
            Alcance seus <span className="purple">objetivos</span>.
            <br />
            Menos caos, mais
            <br />
            <span className="purple">conquistas</span>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
