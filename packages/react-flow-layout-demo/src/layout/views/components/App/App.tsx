import * as React from "react";
import { Component, ReactNode } from "react";

import { Layout } from "react-flow-layout";

import Theme from "../Theme";

import Avatar from "@material-ui/core/Avatar";

// tslint:disable-next-line:no-empty-interface
export interface IAppProps {}

// tslint:disable-next-line:no-empty-interface
export interface IAppStates {}

export default class App extends Component<IAppProps, IAppStates> {
  public render(): ReactNode {
    return (
      <Theme theme="light">
        <Layout
          center={true}
          style={{ alignItems: "center" }}
          items={["1.0", ["2.1", "2.2"], "3.0", ["4.1", "4.2", "4.3"], "5.0"]}
        >
          {(item: string) => <Avatar style={{ margin: 20 }}>{item}</Avatar>}
        </Layout>
      </Theme>
    );
  }
}
