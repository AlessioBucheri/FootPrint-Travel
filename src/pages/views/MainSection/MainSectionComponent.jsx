import React from "react";
import { Helmet } from "react-helmet";
import {
  MainSection,
  MainSectionText,
  MainSectionTitle,
  MainSectionDescription,
} from "../../../Styles/MainSectionStyles";

export default function MainSectionComponent() {
  return (
    <MainSection>
      <Helmet>
        <title>FootPrint Travel - Home</title>
        <meta name='main section' content='FootPrint Travel' />
      </Helmet>
      <MainSectionText>
        <MainSectionTitle>FootPrint Travel</MainSectionTitle>
        <MainSectionDescription>
          Discover your environmental impact by calculating the carbon emissions
          of your travels with this web app and find tips on how to be more
          sustainable!
        </MainSectionDescription>
      </MainSectionText>
    </MainSection>
  );
}
