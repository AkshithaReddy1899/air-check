import React from "react";
import { matches } from "./test-utils";
import { Provider } from "react-redux";
import store from "../redux/configStore";
import DetailsPage from "../components/Pages/DetailsPage";

describe("HomePage", () => {
  it('Homepage matched snapshot', () => {
   matches(<Provider store={store}><DetailsPage /></Provider>)
  });
});
