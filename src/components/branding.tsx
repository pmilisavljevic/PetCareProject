import React from "react";
import H1 from "./H1";

export default function Branding() {
  return (
    <section>
      <H1>
        Pet<span className="font-semibold">Find</span>
      </H1>

      <p className="text-lg opacity-80">Manage your pet daycare with ease</p>
    </section>
  );
}